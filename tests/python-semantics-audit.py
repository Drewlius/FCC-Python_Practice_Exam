"""Independent checks for Python behaviors used by the curated question bank."""
import ast
import json
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

assert isinstance(12.0, float)
assert isinstance(True, int)  # bool is an int subclass.
accepts_int_contract = lambda value: isinstance(value, int)
assert accepts_int_contract(4) and accepts_int_contract(True)
assert not accepts_int_contract(1.0) and not accepts_int_contract("1")
assert len("freeCodeCamp") == 12
assert "freeCodeCamp".count("e") == 3
assert "-".join(map(str, [2026, 7, 19])) == "2026-7-19"
translation = str.maketrans("abc", "xyz")
assert "cab".translate(translation) == "zxy"
try:
    "{name}: {score}".format("Ada", 97)
except KeyError:
    pass
else:
    raise AssertionError("positional arguments must not fill named format fields")
assert len("certificate") == 11
assert "Python".endswith("thon") is True
assert type(9 / 2) is float
assert "interface"[2:7] == "terfa"
assert "red,green,blue".split(",") == ["red", "green", "blue"]
assert "-".join(["2026", "07", "19"]) == "2026-07-19"
table = str.maketrans({"a": "@", "e": "3"})
assert "release".translate(table) == "r3l3@s3"
assert "banana".find("z") == -1
assert "mississippi".count("ss") == 2
assert -7 // 2 == -4
assert round(2.5) == 2
assert 3 + 2 * 4 ** 2 == 35


def record(message):
    if message:
        return None


assert record("saved") is None


def remember(value, items=[]):
    items.append(value)
    return items


assert remember("first") == ["first"]
assert remember("second") == ["first", "second"]
assert ["oak", "pine", "elm"][-1] == "elm"
assert list("code") == ["c", "o", "d", "e"]
assert list(range(2, 8, 2)) == [2, 4, 6]
desserts = ["cake", "cookies", "ice cream", "pie"]
assert desserts[1:3] == ["cookies", "ice cream"]
assert list(zip(["A", "B", "C"], [10, 20])) == [("A", 10), ("B", 20)]
assert [n for n in range(5) if n != 2] == [0, 1, 3, 4]
settings = {"theme": "dark", "volume": 4}
assert settings.get("language", "en") == "en"
inventory = {"tea": 1}
inventory_keys = inventory.keys()
inventory["coffee"] = 2
assert "coffee" in inventory_keys  # dict views are live.
assert list({"Ada": 97}.items()) == [("Ada", 97)]
assert {1, 2, 3} ^ {3, 4} == {1, 2, 4}
assert re.findall(r"\d+", "A12 B7") == ["12", "7"]

events = []


def return_from_try():
    try:
        return "returned"
    except ValueError:
        events.append("except")
    else:
        events.append("else")
    finally:
        events.append("finally")


assert return_from_try() == "returned"
assert events == ["finally"]  # return skips try-else but not finally.

loop_events = []
try:
    for value in [1, 2]:
        if value == 2:
            raise RuntimeError("stop")
    else:
        loop_events.append("else")
except RuntimeError:
    loop_events.append("except")
assert loop_events == ["except"]  # exceptions also skip loop-else.

class Menu:
    special = "soup"

    def add_item(self):
        return "added"


assert Menu.special == "soup"
assert Menu().add_item() == "added"
source = [4, 1, 3]
assert sorted(source) == [1, 3, 4]
assert source == [4, 1, 3]  # sorted() did not mutate the source.
selection = [7, 5, 3, 2]
minimum = min(range(len(selection)), key=selection.__getitem__)
selection[0], selection[minimum] = selection[minimum], selection[0]
assert selection == [2, 5, 3, 7]

node = subprocess.run(
    [
        "node", "-e",
        "process.stdout.write(JSON.stringify(require('./src/question-bank').buildQuestionBank().map(q => q.prompt)))",
    ],
    cwd=ROOT,
    check=True,
    capture_output=True,
    text=True,
)
snippets = [
    source
    for prompt in json.loads(node.stdout)
    for source in re.findall(r"```python\n(.*?)\n```", prompt, flags=re.DOTALL)
]
assert snippets
for source in snippets:
    ast.parse(source)

print(f"Python semantics audit: all assertions and {len(snippets)} fenced snippets passed")
