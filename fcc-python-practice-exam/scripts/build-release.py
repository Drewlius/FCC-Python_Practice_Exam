#!/usr/bin/env python3
"""Build the dependency-free v2 release and verify its archive."""

from __future__ import annotations

import hashlib
import shutil
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
SINGLE = DIST / "Python-Practice-Exam-v2.html"
ZIP_PATH = DIST / "Python-Certification-Practice-Lab-v2.zip"
PREFIX = "Python-Certification-Practice-Lab-v2"
ARCHIVE_TIMESTAMP = (2026, 7, 19, 0, 0, 0)

RELEASE_FILES = [
    "index.html",
    "styles.css",
    "src/exam-core.js",
    "src/question-bank.js",
    "src/app.js",
    "README.md",
    "LICENSE",
    "NOTICE.md",
    "START_HERE.txt",
    "research/RESEARCH.md",
    "package.json",
    "package-lock.json",
    "tests/exam-core.test.js",
    "tests/question-quality-v2.test.js",
    "tests/python-semantics-audit.py",
    "tests/ui.spec.js",
    "tests/release.spec.js",
    "scripts/build-release.py",
]


def inline_application() -> str:
    html = (ROOT / "index.html").read_text(encoding="utf-8")
    css = (ROOT / "styles.css").read_text(encoding="utf-8")
    html = html.replace(
        '<link rel="stylesheet" href="styles.css">', f"<style>\n{css}\n</style>"
    )
    for script in ("src/exam-core.js", "src/question-bank.js", "src/app.js"):
        source = (ROOT / script).read_text(encoding="utf-8")
        html = html.replace(
            f'<script src="{script}"></script>', f"<script>\n{source}\n</script>"
        )
    if '<script src="' in html or 'href="styles.css"' in html:
        raise RuntimeError(
            "single-file build still contains a local runtime dependency"
        )
    if "167 manually revised questions" not in html or "confidence-options" not in html:
        raise RuntimeError("single-file build is missing v2 content")
    return html


def write_reproducible_member(archive: zipfile.ZipFile, name: str, data: bytes) -> None:
    info = zipfile.ZipInfo(name, date_time=ARCHIVE_TIMESTAMP)
    info.create_system = 3
    info.external_attr = 0o100644 << 16
    info.compress_type = zipfile.ZIP_DEFLATED
    archive.writestr(info, data)


def build() -> None:
    DIST.mkdir(exist_ok=True)
    SINGLE.write_text(inline_application(), encoding="utf-8")

    with zipfile.ZipFile(
        ZIP_PATH, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=9
    ) as archive:
        for relative in RELEASE_FILES:
            source = ROOT / relative
            if not source.is_file():
                raise FileNotFoundError(source)
            write_reproducible_member(
                archive, f"{PREFIX}/{relative}", source.read_bytes()
            )
        write_reproducible_member(
            archive, f"{PREFIX}/{SINGLE.name}", SINGLE.read_bytes()
        )

    with zipfile.ZipFile(ZIP_PATH) as archive:
        bad = archive.testzip()
        if bad:
            raise RuntimeError(f"corrupt ZIP member: {bad}")
        members = archive.namelist()
        if len(members) != len(RELEASE_FILES) + 1:
            raise RuntimeError(f"unexpected member count: {len(members)}")

    for path in (SINGLE, ZIP_PATH):
        digest = hashlib.sha256(path.read_bytes()).hexdigest()
        print(f"{path.name}\t{path.stat().st_size} bytes\tsha256 {digest}")
    print(f"archive members\t{len(RELEASE_FILES) + 1}")


if __name__ == "__main__":
    build()
