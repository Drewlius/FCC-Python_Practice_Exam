(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.PythonQuestionBank = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const BANK_VERSION = 2;
  const TOPIC_QUOTAS = Object.freeze({
    basics: 3, tooling: 1, sequences: 2, mappings: 2, errors: 1,
    classes: 2, oop: 2, linear: 2, algorithms: 2, graphs: 2, dynamic: 1
  });
  const TOPIC_LABELS = Object.freeze({
    basics: 'Python basics', tooling: 'Installation & modules', sequences: 'Loops & sequences',
    mappings: 'Dictionaries & sets', errors: 'Error handling', classes: 'Classes & objects',
    oop: 'Object-oriented programming', linear: 'Linear data structures',
    algorithms: 'Searching & sorting', graphs: 'Graphs & trees', dynamic: 'Dynamic programming'
  });

  const bank = [];
  const code = source => `\n\n\`\`\`python\n${source}\n\`\`\``;
  function add(topic, slug, objective, difficulty, prompt, choices, answer, explanation) {
    bank.push({
      id: `v2-${topic}-${slug}`, revision: BANK_VERSION, topic, objective, difficulty,
      prompt, choices, answer, explanation
    });
  }

  // Python basics — 30 independently written items.
  add('basics', 'type-check', 'Identify runtime types', 'foundation',
    'A validator must accept every `int` instance or subclass—including `bool`—but reject `1.0` and `"1"`. Which test meets that contract?',
    ['`type(value) == int`', '`isinstance(value, int)`', '`value is int`', '`int(value) == value`'], 1,
    '`isinstance(value, int)` follows the class hierarchy, accepting `int` and `bool` while rejecting the float `1.0` and string `"1"`. Conversion-and-equality also accepts `1.0` and may raise for values that cannot be converted.');
  add('basics', 'f-string-syntax', 'Format strings with expressions', 'application',
    '`name` is a string and `score` is an integer. Which expression produces a string containing both values without converting `score` manually?',
    ['`"{name}: {score}"`', '`f"{name}: {score}"`', '`"{name}: {score}".format(name, score)`', '`name + ": " + score`'], 1,
    'The `f` prefix evaluates the expressions in braces. Plain braces remain literal; positional arguments do not fill named `format` fields and raise `KeyError`; concatenating a string with an integer raises `TypeError`.');
  add('basics', 'string-length', 'Use built-in functions', 'foundation',
    'You need the number of characters in `"freeCodeCamp"`. Which expression returns it?',
    ['`"freeCodeCamp".length`', '`len("freeCodeCamp")`', '`"freeCodeCamp".count("e")`', '`len(["freeCodeCamp"])`'], 1,
    '`len("freeCodeCamp")` counts all 12 characters. `count("e")` counts three matching characters, while `len` of the one-item list is 1; Python strings have no `.length` attribute.');
  add('basics', 'endswith-case', 'Use string predicate methods', 'application',
    'What value is assigned to `matches`?' + code("course = 'Python'\nmatches = course.endswith('thon')"),
    ['`True`', '`False`', '`"thon"`', '`None`'], 0,
    '`str.endswith` tests the actual suffix and returns a Boolean. Since `Python` ends with the exact, case-sensitive text `thon`, the result is `True`.');
  add('basics', 'numeric-promotion', 'Reason about numeric types', 'foundation',
    'Python evaluates `8 + 0.5`. What type does the resulting value have?',
    ['`int`', '`float`', '`complex`', '`str`'], 1,
    'Combining an integer with a floating-point operand produces a floating-point result, `8.5`. Python does not truncate the fractional part back to an integer.');
  add('basics', 'function-return', 'Define and call functions', 'application',
    'Which version makes `area(4, 3)` evaluate to `12`?',
    ['`def area(w, h): print(w * h)`', '`def area(w, h): return w * h`', '`def area(w, h): w * h`', '`def area(w, h): yield w * h`'], 1,
    'A function gives its caller a value with `return`. Printing or evaluating a bare expression leaves the return value as `None`, while `yield` makes the call return a generator.');
  add('basics', 'implicit-none', 'Understand implicit returns', 'analysis',
    'What complete output is displayed when this code runs?\n\n```python\ndef record(message):\n    if message:\n        print(message)\n\nresult = record(\'saved\')\nprint(result)\n```',
    ['`saved` only', '`None` only', '`saved` followed by `None`', 'Nothing, because `record` has no `return`'], 2,
    'The function first prints `saved`. Because execution reaches the end without `return`, it then returns `None`, which the outer `print` displays on the next line.');
  add('basics', 'valid-name', 'Apply identifier rules', 'foundation',
    'Which name is a valid Python identifier?',
    ['`2nd_place`', '`class`', '`user-name`', '`user_name2`'], 3,
    '`user_name2` starts with a letter and contains only letters, digits, and underscores. A name cannot start with a digit, contain a hyphen, or be a reserved keyword.');
  add('basics', 'uppercase-copy', 'Transform strings', 'application',
    'After `title = "Python basics"`, which line creates an uppercase string while leaving `title` unchanged?',
    ['`loud = title.upper()`', '`loud = title.isupper()`', '`loud = title.capitalize()`', '`loud = title.swapcase()`'], 0,
    '`upper()` returns a new uppercase string because strings are immutable. `isupper()` only tests casing and returns a Boolean rather than transformed text.');
  add('basics', 'input-type', 'Read console input', 'analysis',
    'A user types `42` at this prompt. Why does `age + 1` fail immediately afterward?' + code("age = input('Age: ')\nprint(age + 1)"),
    ['`input` returns the text `"42"`, so adding an integer is invalid', '`input` returns `None` until Enter is pressed', '`42` is outside Python’s integer range', '`print` can display strings or integers, but not both'], 0,
    '`input` always returns a string, even when the user enters digits. Convert with `int(age)` before arithmetic; the problem is not the range or `print`.');
  add('basics', 'slice-stop', 'Slice strings', 'application',
    'Which value is printed?' + code("language = 'Python'\nprint(language[1:4])"),
    ['`Pyt`', '`yth`', '`ytho`', '`tho`'], 1,
    'Slicing includes index 1 (`y`) and stops before index 4 (`o`), producing `yth`. Treating the stop index as inclusive leads to the tempting `ytho`.');
  add('basics', 'split-result', 'Split strings into lists', 'foundation',
    'A comma-separated color string is split with `"red,green,blue".split(",")`. Which data structure is returned?',
    ['A tuple of three colors', 'A list containing three strings', 'One string with the commas removed', 'An iterator over individual characters'], 1,
    '`split` returns a list of substrings separated at each matching delimiter. It neither creates a tuple nor removes delimiters while keeping one combined string.');
  add('basics', 'join-contract', 'Apply the string-only join contract', 'application',
    'Which expression produces the string `"2026-7-19"` from the integer list `[2026, 7, 19]`?',
    ['`"-".join([2026, 7, 19])`', '`"-".join(map(str, [2026, 7, 19]))`', '`"-".join(str([2026, 7, 19]))`', '`str([2026, 7, 19]).replace(",", "-")`'], 1,
    '`join` requires string elements, so `map(str, ...)` converts each integer before joining. Joining the list directly raises `TypeError`; joining its representation separates individual characters; replacing commas leaves brackets and spaces.');
  add('basics', 'translation-table', 'Create translation tables', 'foundation',
    '`source` and `target` are equal-length strings. Which call builds their character mapping table for `str.translate`?',
    ['`str.maketrans(source, target)`', '`source.translate(target)`', '`dict.fromkeys(source, target)`', '`dict(zip(source, target))`'], 0,
    '`str.maketrans` builds a table with the integer character keys expected by `translate`. Calling `translate` applies a table, while the two dictionary expressions use string keys and do not build the required mapping.');
  add('basics', 'power-operator', 'Use arithmetic operators', 'application',
    'A program needs three raised to the fourth power. Which Python expression evaluates to `81`?',
    ['`3 ^ 4`', '`3 ** 4`', '`3 * 4`', '`pow[3, 4]`'], 1,
    '`**` is the exponentiation operator. `^` performs bitwise XOR, multiplication gives 12, and the built-in `pow` would require parentheses.');
  add('basics', 'find-missing', 'Search within strings', 'foundation',
    'A string search evaluates `"python".find("z")`. Which sentinel reports that the character was not found?',
    ['`None`', '`0`', '`-1`', 'It raises `ValueError`'], 2,
    '`find` reports a missing substring with `-1`. This differs from `index`, which raises `ValueError` when it cannot find the requested text.');
  add('basics', 'count-substring', 'Count string occurrences', 'application',
    'What value does `"mississippi".count("ss")` produce?',
    ['`1`', '`2`', '`4`', '`0`'], 1,
    'The non-overlapping substring `ss` appears twice. Counting individual `s` characters instead would produce four, which is a different operation.');
  add('basics', 'negative-floor', 'Reason about floor division', 'analysis',
    'What is the value of `-7 // 2`?',
    ['`-3`', '`-3.5`', '`-4`', '`4`'], 2,
    'Floor division rounds the mathematical quotient down toward negative infinity. Since `-3.5` floors to `-4`, truncating toward zero would give the wrong answer.');
  add('basics', 'equality-identity', 'Distinguish equality and identity', 'analysis',
    'Two separate lists contain the same elements. Which statement can be true?',
    ['`a == b` is true while `a is b` is false', '`a is b` is true only because their values match', '`is` compares list contents recursively', '`==` checks whether both names point to one object'], 0,
    '`==` compares the list values, while `is` asks whether both names reference the same object. Equal contents do not require shared identity.');
  add('basics', 'mutable-default', 'Recognize persistent default objects', 'analysis',
    'What do the two `print` calls display?' + code("def remember(value, items=[]):\n    items.append(value)\n    return items\n\nprint(remember('first'))\nprint(remember('second'))"),
    ["`['first']` then `['first', 'second']`", "`['first']` then `['second']`", "`['first']` both times", '`TypeError`, because mutable defaults are forbidden'], 0,
    'The default list is created once when the function is defined, so both omitted calls reuse it. A `None` sentinel would let the function create a fresh list per call.');
  add('basics', 'round-half-even', 'Apply numeric rounding', 'analysis',
    'Python uses ties-to-even behavior for ordinary floating-point rounding. What does `round(2.5)` return?',
    ['`2`', '`3`', '`2.5`', '`25`'], 0,
    '`2.5` lies exactly halfway between 2 and 3, so ties-to-even chooses the even integer 2. Assuming every half value rounds away from zero would incorrectly produce 3.');

  add('basics', 'ordered-immutable', 'Recognize ordered immutable collections', 'foundation',
    'Which built-in collection is both ordered and immutable?',
    ['list', 'tuple', 'set', 'dictionary'], 1,
    'A tuple preserves element order but cannot have elements added, removed, or reassigned after construction. Lists and dictionaries are mutable, while sets are mutable and unordered.');
  add('basics', 'shortcircuit-and-right', 'Recognize and returning its right operand', 'analysis',
    'After this assignment runs, what value and type does `result` contain?' + code('result = True and 5'),
    ['The integer 5', 'The Boolean True', 'The Boolean False', 'The value None'], 0,
    'Python `and` returns an operand rather than always producing a Boolean. Because `True` is truthy, `and` returns the right operand, so the integer 5 is assigned to `result`.');
  add('basics', 'shortcircuit-or-default', 'Trace or past a falsy first operand', 'analysis',
    'A lookup falls back through `or` when the first operand is falsy. After the assignment, what value and type does `result` hold?' + code('result = 0 or "default"'),
    ['The string `"default"`', 'The Boolean True', 'The integer 0', 'The value None'], 0,
    'Python `or` returns an operand rather than always producing a Boolean. Because `0` is falsy, `or` returns the right operand, so the string `"default"` is assigned to `result`. That string is truthy, but it is not the Boolean `True`.');
  add('basics', 'shortcircuit-or-list', 'Identify or picking a falsy second operand', 'analysis',
    'The expression picks a list fallback when the first operand is falsy. After the assignment, what value and type does `result` contain?' + code('result = None or []'),
    ['An empty list', 'The value None', 'The Boolean False', 'An empty tuple'], 0,
    'Because `None` is falsy, Python `or` returns the right operand, so an empty list is assigned to `result`. The list is itself falsy, but `result` contains a list rather than the Boolean `False`.');
  add('basics', 'shortcircuit-chain', 'Evaluate a multi-operand and chain', 'analysis',
    'This chain returns one of its operands instead of a Boolean. After the assignment, what value and type does `result` contain?' + code('result = 3 and "x" and []'),
    ['An empty list', 'The string `"x"`', 'The integer 3', 'The Boolean False'], 0,
    'Python `and` evaluates from left to right and returns the first falsy operand. Both `3` and `"x"` are truthy, so evaluation reaches `[]` and assigns that empty list to `result`.');
  add('basics', 'filter-lambda-even', 'Sum values kept by an even filter', 'analysis',
    'A tuple of integers passes through a filter that keeps only even values, and the survivors are summed. What is printed?' + code('values = (2, 4, 8, 16, 31, 42, 67)\nresult = sum(filter(lambda x: x % 2 == 0, values))\nprint(result)'),
    ['72', '170', '98', '5'], 0,
    'The lambda returns True only for even values, so filter yields 2, 4, 8, 16, and 42. `sum` consumes that iterator and returns 72.');
  add('basics', 'filter-lambda-odd', 'Sum values kept by a non-even filter', 'analysis',
    'The predicate below keeps the values that are not even. Which total reaches the console?' + code('values = (3, 6, 9, 12, 15)\nresult = sum(filter(lambda x: x % 2 != 0, values))\nprint(result)'),
    ['27', '18', '45', '3'], 0,
    'The predicate keeps the odd values 3, 9, and 15. `sum` consumes those filtered values and returns 27.');
  add('basics', 'filter-lambda-greater', 'Apply a numeric filtering predicate', 'application',
    'Only values greater than 10 survive this filter before the remaining numbers are added. Which number is printed?' + code('values = (4, 10, 11, 20, 25)\nresult = sum(filter(lambda x: x > 10, values))\nprint(result)'),
    ['56', '70', '66', '3'], 0,
    'The predicate `x > 10` keeps 11, 20, and 25 but excludes 10. Their sum is 56.');
  add('basics', 'filter-lambda-once', 'Recognize filter iterator consumption', 'analysis',
    'The same filter object is converted to a list twice, and both conversions are printed together. What is the output?' + code('values = (1, 2, 3, 4)\nselected = filter(lambda x: x > 2, values)\nfirst = list(selected)\nsecond = list(selected)\nprint(first, second)'),
    ['[3, 4] []', '[3, 4] [3, 4]', '[] [3, 4]', '[1, 2] [3, 4]'], 0,
    '`filter` returns an iterator. The first list call consumes its remaining values, 3 and 4, so the second list call receives an exhausted iterator and produces an empty list.');

  // Installation and interactive Python — 6 independently written items.
  add('tooling', 'official-download', 'Install Python safely', 'foundation',
    'Which site provides the standard CPython installers distributed by the Python Software Foundation?',
    ['python.org', 'pypi.org', 'anaconda.com', 'docs.python.org'], 0,
    'The Python Software Foundation distributes standard installers through python.org. Package indexes such as PyPI distribute libraries, not the official interpreter installer.');
  add('tooling', 'terminal-role', 'Understand command-line tools', 'foundation',
    'In a programming workflow, what is a terminal?',
    ['A text input/output interface through which a user can interact with a shell', 'The shell program that interprets every command', 'A Python process that accepts only expressions', 'A debugger that is built into the interpreter'], 0,
    'A terminal or terminal emulator provides text input and output. A shell running through it interprets commands; the terminal and shell are related but distinct.');
  add('tooling', 'run-script', 'Run Python source files', 'application',
    'On a system where the `python` command launches the intended interpreter, which command executes `report.py` from the current directory?',
    ['`python report.py`', '`python -c report.py`', '`pip install report.py`', '`python report`'], 0,
    'Passing the filename to the interpreter executes it as a script. `-c` expects Python source text, `pip install` manages packages, and omitting the `.py` filename asks Python to open a different path. Some systems call the interpreter `python3` or `py`; the premise specifies `python` here.');
  add('tooling', 'repl-purpose', 'Use the interactive shell', 'analysis',
    'When is Python’s interactive shell more useful than creating a script file?',
    ['When quickly checking a small expression and seeing its result immediately', 'When maintaining a multi-file application', 'When preserving a program in version control', 'When repeatedly running an automated test suite'], 0,
    'The read-evaluate-print loop is ideal for short experiments and immediate feedback. Persistent, multi-file programs belong in source files rather than an ephemeral REPL session.');
  add('tooling', 'prompt-meaning', 'Recognize REPL prompts', 'application',
    'Python has started successfully and displays `>>>`. What is it waiting for?',
    ['A Python statement or expression', 'The indented continuation of an unfinished block', 'A shell command such as `cd`', 'A module name without an `import` statement'], 0,
    'The primary `>>>` prompt means the interpreter is ready for Python input. An unfinished multi-line construct instead uses the continuation prompt `...`.');
  add('tooling', 'module-entry', 'Distinguish imports from direct execution', 'analysis',
    'Why place demo code under `if __name__ == "__main__":`?',
    ['So the demo runs when the file is executed but not when it is imported', 'So names created in the block become private to it', 'So importing the module reloads it on every access', 'So the file can use relative imports without a package'], 0,
    'A directly executed module receives `__name__ == "__main__"`; an imported module receives its module name. The guard therefore prevents entry-point work during import.');

  // Loops and sequences — 15 independently written items.
  add('sequences', 'negative-index', 'Index sequences from the end', 'application',
    'What does `cities[-1]` select when `cities` is a non-empty list?',
    ['The first element', 'The last element', 'A copy of the entire list', 'The element before the last one'], 1,
    'Index `-1` addresses the final element of a sequence. The next value toward the front would use `-2`, while index `0` selects the first item.');
  add('sequences', 'iterable-meaning', 'Recognize iterables', 'foundation',
    'Which description best fits an iterable?',
    ['An object that can provide its members one at a time', 'Any object whose values are sorted', 'A container that supports only numeric indexes', 'A function that must return a list'], 0,
    'An iterable can produce an iterator, allowing its members to be visited in sequence. It need not be sorted, indexable, or represented as a list.');
  add('sequences', 'list-from-string', 'Construct lists from iterables', 'application',
    'What is produced by `list("cat")`?',
    ['`["cat"]`', '`["c", "a", "t"]`', '`("c", "a", "t")`', '`{"c", "a", "t"}`'], 1,
    'The `list` constructor iterates over the string, so each character becomes one list element. It does not preserve the whole string as a single item.');
  add('sequences', 'bounds-error', 'Handle invalid indexes', 'foundation',
    'A list contains three elements. What happens when code evaluates `items[3]`?',
    ['It returns the last element', 'It returns `None`', 'It raises `IndexError`', 'It extends the list by one position'], 2,
    'Valid positive indexes are 0, 1, and 2. Direct access beyond that range raises `IndexError`; Python does not silently return `None` or grow the list.');
  add('sequences', 'slice-copy', 'Read sequence slices', 'application',
    'What does the final line display?' + code("desserts = ['cake', 'cookies', 'ice cream', 'pie']\nprint(desserts[1:3])"),
    ["['cookies', 'ice cream']", "['cake', 'cookies', 'ice cream']", "['cookies', 'ice cream', 'pie']", "['ice cream', 'pie']"], 0,
    'The slice starts at index 1 and stops before index 3, so it contains `cookies` and `ice cream`. The stop position itself is excluded.');
  add('sequences', 'append-versus-extend', 'Distinguish append from extend', 'application',
    'A list `numbers` should gain the individual values `6`, `8`, and `10`. Which operation avoids adding a nested list?',
    ['`numbers.append([6, 8, 10])`', '`numbers.extend([6, 8, 10])`', '`numbers.extend([[6, 8, 10]])`', '`numbers.append(*[6, 8, 10])`'], 1,
    '`extend([6, 8, 10])` adds the three integers individually. `append` and `extend` with a nested list add one list element; unpacking three values into `append` supplies too many arguments.');
  add('sequences', 'insert-position', 'Insert list elements', 'foundation',
    'Which call places `"new"` at index 2 of `items` without replacing the existing element?',
    ['`items.insert(2, "new")`', '`items[2] = "new"`', '`items.append("new")`', '`items.extend("new")`'], 0,
    '`list.insert(index, value)` shifts later elements and places the value at that position. Assignment replaces, `append` targets the end, and `extend` would add the string’s characters individually.');
  add('sequences', 'remove-first-match', 'Remove list values', 'analysis',
    'Starting with `[5, 1, 5, 2]`, what remains after `values.remove(5)`?',
    ['`[1, 5, 2]`', '`[1, 2]`', '`[5, 1, 2]`', '`[5, 1, 5]`'], 0,
    '`remove(value)` deletes only the first matching value, not every occurrence and not an item by position. The second `5` therefore remains.');
  add('sequences', 'tuple-delete', 'Understand tuple immutability', 'application',
    'What happens when `del point[0]` is attempted on `point = (4, 9)`?',
    ['The tuple becomes `(9,)`', 'Python raises `TypeError`', 'The tuple becomes `[9]`', 'The name `point` is deleted'], 1,
    'Tuple elements cannot be deleted or reassigned because tuples are immutable. `del point` could delete the whole name, but indexed deletion is not supported.');
  add('sequences', 'tuple-unpack', 'Unpack fixed-length sequences', 'application',
    'Which assignment binds the three integers from `rgb = (12, 40, 90)` directly to `r`, `g`, and `b`?',
    ['`r, g, b = rgb`', '`r = g = b = rgb`', '`r, g, *b = rgb`', '`r, g = rgb`'], 0,
    '`r, g, b = rgb` binds one integer to each name. Chained assignment gives every name the whole tuple, starred unpacking makes `b` a list, and two targets cannot unpack three values.');
  add('sequences', 'sorted-copy', 'Distinguish sorted from list.sort', 'analysis',
    'You need a sorted result but must preserve the current order of `scores`. Which expression is appropriate?',
    ['`scores.sort()`', '`sorted(scores)`', '`scores.reverse()`', '`scores = scores.sort()`'], 1,
    '`sorted(scores)` returns a new list and leaves the input unchanged. `list.sort()` mutates the list in place and returns `None`.');
  add('sequences', 'range-stop', 'Generate integer ranges', 'application',
    'What values are visited by `for n in range(2, 8, 2)`?',
    ['`2, 4, 6`', '`2, 4, 6, 8`', '`0, 2, 4, 6`', '`2, 3, 4, 5, 6, 7`'], 0,
    '`range` begins at 2, repeatedly adds 2, and stops before 8. Including the stop value is the common off-by-one mistake here.');
  add('sequences', 'zip-shortest', 'Iterate over sequences in parallel', 'analysis',
    'What does plain `zip(names, scores)` do if `names` contains four items and `scores` contains three?',
    ['It raises `IndexError`', 'It repeats the last score', 'It stops after three pairs', 'It adds `None` to the missing pair'], 2,
    'Without special handling, `zip` stops when the shortest input is exhausted. It neither pads missing positions nor treats the unequal lengths as an error.');
  add('sequences', 'continue-effect', 'Control loop iterations', 'application',
    'The loop skips one iteration. Which sequence appears in the output?' + code("for n in range(5):\n    if n == 2:\n        continue\n    print(n, end=' ')"),
    ['`0 1 2 3 4`', '`0 1`', '`0 1 3 4`', '`2 3 4`'], 2,
    '`continue` skips the rest of only the iteration where `n` is 2. The loop then proceeds with 3 and 4 rather than terminating.');
  add('sequences', 'loop-else', 'Reason about loop else clauses', 'analysis',
    'When does the `else` attached to a `for` loop execute?',
    ['Whenever the loop body runs at least once', 'When iteration finishes without a `break`', 'Only when the iterable is empty', 'Immediately after a `continue`'], 1,
    'A loop `else` runs after normal exhaustion, including an empty iterable, but is skipped when `break` exits the loop. It is not tied to `continue`.');

  // Dictionaries and sets — 12 independently written items.
  add('mappings', 'dictionary-model', 'Understand key-value mappings', 'foundation',
    'Which description distinguishes a dictionary from a list?',
    ['A dictionary retrieves values through unique hashable keys', 'A dictionary can contain only strings', 'A dictionary always keeps its keys sorted', 'A dictionary permits the same key multiple times'], 0,
    'A dictionary maps unique, hashable keys to values. Its values may have any type, and assigning an existing key replaces that key’s previous value.');
  add('mappings', 'hashable-key', 'Choose valid dictionary keys', 'analysis',
    'Which value can be used directly as a dictionary key?',
    ['`[1, 2]`', '`{"x": 1}`', '`{1, 2}`', '`(1, 2)`'], 3,
    'A tuple containing hashable elements is hashable and can be a key. Lists, dictionaries, and sets are mutable and therefore unhashable.');
  add('mappings', 'update-value', 'Update dictionary entries', 'application',
    'Given `prices = {"tea": 3}`, which statement changes the tea price to 4?',
    ['`prices["tea"] = 4`', '`prices["tea"] == 4`', '`prices.get("tea", 4)`', '`prices.setdefault("tea", 4)`'], 0,
    'Bracket assignment replaces the value at an existing key. `==` only compares, `get` only reads, and `setdefault` leaves the existing value 3 unchanged.');
  add('mappings', 'get-default', 'Retrieve optional keys', 'application',
    'Given `settings = {"theme": "dark"}`, what does `settings.get("theme", "light")` return, and what happens to `settings`?',
    ['It returns `"dark"`; `settings` is unchanged.', 'It returns `"light"`; `settings` is unchanged.', 'It returns `"dark"`; `settings` gains `"theme": "light"`.', 'It raises `KeyError` and leaves `settings` unchanged.'], 0,
    '`dict.get` returns the value stored for an existing key and never modifies the dictionary. The default is consulted only for a missing key, and inserting that default would require `setdefault`, not `get`. Bracket lookup would still raise `KeyError` for an absent key.');
  add('mappings', 'view-object', 'Understand dictionary views', 'analysis',
    'Why can a variable holding `inventory.keys()` reflect a key added later?',
    ['Dictionary views are dynamic windows onto the dictionary', '`keys()` returns a detached list that the dictionary also edits', 'Reading the variable automatically executes its original assignment again', '`keys()` returns a one-use generator rather than a view'], 0,
    'The object returned by `keys()` is a live view rather than a detached list copy, so later dictionary changes are visible through that same view.');
  add('mappings', 'items-unpack', 'Iterate over key-value pairs', 'application',
    'Which loop gives `name` and `score` separately for each dictionary entry?',
    ['`for name, score in results.items():`', '`for entry in results.items():`', '`for name in results:`', '`for score in results.values():`'], 0,
    '`items()` yields two-element key-value pairs that can be unpacked into two loop variables. The other headers bind one name to a pair, key, or value instead of separating both fields.');
  add('mappings', 'empty-set', 'Construct empty sets', 'foundation',
    'Which expression creates an empty set?',
    ['`{}`', '`[]`', '`set()`', '`{None}`'], 2,
    '`set()` creates an empty set. Empty braces create a dictionary, while `{None}` is a non-empty set containing one element.');
  add('mappings', 'set-duplicate', 'Apply set uniqueness', 'application',
    'After `tags = {"py", "web"}` and `tags.add("py")`, what is `len(tags)`?',
    ['`1`', '`2`', '`3`', 'It raises `ValueError`'], 1,
    'Sets keep at most one element equal to a given value. Adding `py` again has no effect, so the two distinct members remain.');
  add('mappings', 'subset-check', 'Compare set inclusion', 'foundation',
    'Which expression tests whether every member of `required` is also in `provided`?',
    ['`required.issubset(provided)`', '`required.isdisjoint(provided)`', '`required.symmetric_difference(provided)`', '`required.union(provided)`'], 0,
    '`issubset` asks whether all members of the first set occur in the second. The other operations test separation or construct different sets.');
  add('mappings', 'disjoint-check', 'Recognize disjoint sets', 'application',
    'What does `{1, 3}.isdisjoint({2, 4})` return?',
    ['`True`', '`False`', '`{}`', '`None`'], 0,
    'The sets share no members, so they are disjoint and the predicate returns `True`. Predicate methods return Booleans, not a new set.');
  add('mappings', 'symmetric-difference', 'Use set operations', 'analysis',
    'Which result comes from `{1, 2, 3} ^ {3, 4}`?',
    ['`{3}`', '`{1, 2, 3, 4}`', '`{1, 2, 4}`', '`{4}`'], 2,
    'Symmetric difference keeps values found in exactly one operand. The shared 3 is removed, leaving 1, 2, and 4.');
  add('mappings', 'regex-module', 'Use standard-library modules', 'foundation',
    'Which standard-library module provides regular-expression matching?',
    ['`re`', '`fnmatch`', '`glob`', '`string`'], 0,
    'Python’s regular-expression API is in `re`. `fnmatch` and `glob` handle shell-style wildcard patterns, while `string` supplies text-related constants and helpers.');

  // Error handling — 9 independently written items.
  add('errors', 'zero-division', 'Catch specific exceptions', 'application',
    'A matching handler catches the failed division. Which text reaches the console?' + code("try:\n    print(22 / 0)\nexcept ZeroDivisionError:\n    print('cannot divide')"),
    ['`cannot divide`', '`0`', '`None`', 'Nothing; the program stops before the handler'], 0,
    'Division raises `ZeroDivisionError`, which matches the handler. The failed `print` never displays a numeric value, and execution continues inside `except`.');
  add('errors', 'pdb-purpose', 'Use Python debugging tools', 'foundation',
    'Which standard-library module supplies Python’s interactive debugger?',
    ['`trace`', '`pdb`', '`unittest`', '`logging`'], 1,
    '`pdb` is Python’s built-in interactive debugger. Logging and print statements can expose state, but they do not provide the same stepping debugger interface.');
  add('errors', 'attribute-error', 'Identify exception categories', 'application',
    'What exception is raised by `"hello".append("!")`?',
    ['`TypeError`', '`KeyError`', '`AttributeError`', '`IndexError`'], 2,
    'A string has no `append` attribute, so attribute lookup fails with `AttributeError`. The call never reaches an argument-type or indexing operation.');
  add('errors', 'manual-raise', 'Raise exceptions deliberately', 'foundation',
    'A function detects an invalid negative amount. Which statement deliberately signals the problem?',
    ['`ValueError("negative")`', '`raise ValueError("negative")`', '`return ValueError("negative")`', '`raise "negative"`'], 1,
    '`raise ValueError(...)` signals the exception. Merely constructing or returning an exception object does not raise it, and Python requires raised objects to derive from `BaseException`, so a string cannot be raised.');
  add('errors', 'syntax-error', 'Recognize syntax errors', 'application',
    'What kind of error is caused by `print("hello"` with the closing parenthesis missing?',
    ['`SyntaxError`', '`NameError`', '`ValueError`', '`RuntimeWarning`'], 0,
    'Python cannot parse the incomplete call, so it reports `SyntaxError` before normal execution. No name lookup or value conversion has occurred.');
  add('errors', 'exception-alias', 'Inspect caught exceptions', 'foundation',
    'What does `as err` provide in `except ValueError as err:`?',
    ['The exception object raised by the failed operation', 'The source line converted to a string', 'A Boolean showing whether the handler ran', 'A new exception class named `err`'], 0,
    'The alias binds the caught exception instance, allowing its message and attributes to be inspected. It does not define a class or merely store a Boolean.');
  add('errors', 'else-clause', 'Use try statement clauses', 'analysis',
    'When does the `else` suite of a `try` statement run?',
    ['When the `try` suite reaches its end without an exception or an early control-flow exit', 'Immediately before the `try` suite begins', 'After a matching `except` suite handles an exception', 'Whenever a `finally` suite is also present'], 0,
    '`else` is the normal-success path after `try`. It is skipped after an exception and when `return`, `break`, or `continue` exits the `try` suite early; unconditional cleanup belongs in `finally`.');
  add('errors', 'finally-return', 'Reason about finally execution', 'analysis',
    'A function returns from inside its `try` suite and also has a `finally` suite with a `print`. What occurs first?',
    ['The function returns before `finally` can run', 'The `finally` suite runs before control actually returns to the caller', 'Python raises `SyntaxError` because `return` is forbidden in `try`', 'The return value is always replaced with `None`'], 1,
    '`finally` executes as control leaves the `try`, including on a pending return. The original return normally continues afterward unless `finally` itself changes control flow.');
  add('errors', 'narrow-handler', 'Avoid masking unrelated failures', 'analysis',
    'Why is `except ValueError:` usually preferable to a bare `except:` when conversion is the expected failure?',
    ['It handles the anticipated problem without hiding unrelated exceptions', 'It catches more exception types than a bare handler', 'It converts the exception into a return value automatically', 'It prevents the failed conversion from producing a traceback anywhere'], 0,
    'A narrow handler documents and recovers from the failure you expect while allowing unexpected defects to remain visible. A bare handler can conceal bugs or interrupts.');

  // Classes and objects — 12 independently written items.
  add('classes', 'class-syntax', 'Define Python classes', 'foundation',
    'Which header correctly begins a class named `Playlist`?',
    ['`class Playlist:`', '`class Playlist`', '`def Playlist():`', '`class playlist:`'], 0,
    'A class header uses `class`, the exact requested name, and a trailing colon. The other choices omit the colon, define a function, or use a differently cased name.');
  add('classes', 'init-purpose', 'Initialize object state', 'foundation',
    'What is the usual job of `__init__`?',
    ['Initialize an instance after it has been created', 'Allocate the instance before initialization begins', 'Choose the instance’s display string', 'Run automatically when the instance is garbage-collected'], 0,
    '`__init__` receives a newly created instance and establishes its initial state. Object creation itself begins before this initializer is called.');
  add('classes', 'attribute-scope', 'Distinguish class and instance attributes', 'analysis',
    'A balance should be stored independently on each `Account` object. Where should it normally be assigned?',
    ['To `self.balance` inside an instance initializer or method', 'To `Account.balance` once in the class body', 'To a module-level name called `balance`', 'To local `balance` inside `__init__`, without `self`'], 0,
    'State that varies per object belongs on the instance through `self`. A class attribute is shared through class lookup unless an instance shadows it.');
  add('classes', 'bound-method', 'Call instance methods', 'application',
    '`Menu.add_item` is defined as `def add_item(self): ...`, and `menu` is a `Menu` instance. Which expression invokes the bound method?',
    ['`menu.add_item()`', '`menu.add_item`', '`Menu.add_item()`', '`menu.add_item(self)`'], 0,
    '`menu.add_item()` binds `menu` as `self` and invokes the method. The bare attribute only retrieves the bound method, the class call omits an instance, and `self` is not supplied explicitly at the call site.');
  add('classes', 'print-protocol', 'Customize object string output', 'foundation',
    'Which special method does `print(obj)` prefer when it needs a human-readable string?',
    ['`__str__`', '`__init__`', '`__call__`', '`__len__`'], 0,
    '`print` converts the object with `str`, which uses `__str__` when defined and can fall back to `__repr__`. The other methods serve different protocols.');
  add('classes', 'class-attribute', 'Access class attributes', 'application',
    'What is displayed?' + code("class Menu:\n    special = 'soup'\n\nprint(Menu.special)"),
    ['`soup`', '`Menu`', '`None`', '`AttributeError`'], 0,
    '`special` is stored in the class namespace and can be read through the class as `Menu.special`. No instance is required for this lookup.');
  add('classes', 'missing-self', 'Define instance methods', 'analysis',
    'Which replacement header correctly binds the new instance, `"Pinky"`, and `3` before these assignments run?' + code("class Dog:\n    def __init__(name, age):\n        self.name = name\n        self.age = age\n\ndog = Dog('Pinky', 3)"),
    ['`def __init__(self, name, age):`', '`def __init__(name, age, self):`', '`def __init__(self):`', '`def __init__(name, age):`'], 0,
    'Python supplies the new instance as the first argument, followed by the two explicit arguments. The header therefore needs three parameters in the order `self, name, age`.');
  add('classes', 'instantiate', 'Create class instances', 'foundation',
    'Given `class Person: ...`, which expression asks the class to create an instance?',
    ['`Person()`', '`Person`', '`type(Person)`', '`object()`'], 0,
    'Calling the class with `Person()` creates and initializes a `Person`. `Person` is the class itself, `type(Person)` returns its metaclass, and `object()` creates a plain `object`.');
  add('classes', 'instance-lookup', 'Read instance attributes', 'application',
    'An object was created with `dog = Dog("Pinky")`, and `__init__` assigned `self.name`. How is the value read?',
    ['`dog.name`', '`Dog.name`', '`dog.name()`', '`self.name`'], 0,
    'Outside a method, normal instance-attribute lookup uses `dog.name`. The value was not stored on the class, is not a callable method, and `self` is only the conventional parameter name inside methods.');
  add('classes', 'classmethod', 'Use class methods', 'foundation',
    'Which decorator creates a method that receives the class as its first automatic argument?',
    ['`@classmethod`', '`@staticmethod`', '`@property`', 'No decorator; naming the first parameter `cls` is enough'], 0,
    '`@classmethod` binds the function to the class and conventionally passes it as `cls`. A static method receives no automatic `self` or `cls`.');
  add('classes', 'staticmethod', 'Use static methods', 'analysis',
    'When is `@staticmethod` a reasonable choice inside a class?',
    ['When an operation belongs conceptually with the class but needs no instance or class state', 'When the operation mutates instance state through `self`', 'When the operation needs class state through `cls`', 'When Python should pass the class automatically'], 0,
    'A static method is namespaced by the class but receives neither `self` nor `cls`. Operations that need object or class state should use the corresponding bound method type.');
  add('classes', 'repr-fallback', 'Implement object representations', 'analysis',
    'A class defines `__repr__` but not `__str__`. What can `print(instance)` use?',
    ['The result of `__repr__` as a fallback', 'Only the source code of the class', 'The return value from `__init__`', 'Nothing; `print` raises `TypeError`'], 0,
    '`str(instance)` falls back to the object’s `__repr__` when no custom `__str__` exists. Initializers are unrelated and normally return `None`.');

  // Object-oriented programming — 15 independently written items.
  add('oop', 'abstract-module', 'Use abstract base classes', 'foundation',
    'Which standard-library module defines both `ABC` and `abstractmethod`?',
    ['`abc`', '`typing`', '`dataclasses`', '`inspect`'], 0,
    'Python provides `ABC` and `abstractmethod` through `abc`. The other choices are real standard-library modules, but they do not define that abstract-base-class API.');
  add('oop', 'single-inheritance', 'Recognize inheritance forms', 'foundation',
    'What makes a class hierarchy an example of single inheritance?',
    ['Each subclass lists one direct base class', 'A subclass lists two direct base classes', 'One object owns another object as a component', 'Unrelated classes respond to the same interface'], 0,
    'Single inheritance means each subclass lists one direct base, even though that base may itself inherit elsewhere. It does not limit how many subclasses a base can have or require a one-branch hierarchy.');
  add('oop', 'principles', 'Identify OOP principles', 'application',
    'Which item is not one of the four commonly taught OOP principles?',
    ['Encapsulation', 'Inheritance', 'Polymorphism', 'Iteration'], 3,
    'The usual four are encapsulation, abstraction, inheritance, and polymorphism. Iteration is a control-flow technique rather than an OOP principle.');
  add('oop', 'underscore-convention', 'Interpret non-public naming conventions', 'foundation',
    'What does a single leading underscore in `_cache` normally communicate?',
    ['It is intended for internal use by convention', 'Attribute access from outside the class raises `AttributeError`', 'Python applies class-name mangling to it', 'It can be accessed only through a property'], 0,
    'A single underscore is a non-public convention, not enforced privacy. External access remains possible, unlike the name transformation triggered by two leading underscores.');
  add('oop', 'abstraction', 'Apply abstraction', 'foundation',
    'Which OOP principle most directly describes exposing `charge(amount)` while hiding the network and retry steps that implement it?',
    ['Abstraction', 'Inheritance', 'Polymorphism', 'Composition'], 0,
    'Abstraction presents an essential operation while suppressing implementation details callers do not need. The other choices describe type reuse, substitutable interfaces, and has-a relationships.');
  add('oop', 'property-setter', 'Define managed attributes', 'application',
    'A class already defines `@property def temperature(self): ...`. Which decorator attaches its setter?',
    ['`@temperature.setter`', '`@temperature.getter`', '`@property`', '`@staticmethod`'], 0,
    'A setter is registered through the existing property object with `@temperature.setter`. The property name must match the getter being extended.');
  add('oop', 'encapsulation', 'Apply encapsulation', 'analysis',
    'Why might an account expose `deposit(amount)` instead of asking callers to modify its balance attribute directly?',
    ['The method can enforce rules while controlling changes to internal state', 'The method makes the balance immutable after construction', 'Using a method automatically makes all account data private', 'The method moves the balance from each instance to the class'], 0,
    'A controlled operation can validate amounts and preserve invariants before mutating state. Encapsulation is about protecting behavior and consistency, not banning numeric attributes.');
  add('oop', 'getter-property', 'Expose computed state', 'foundation',
    'What is a getter responsible for?',
    ['Reading or computing a value through a controlled interface', 'Validating and storing a replacement value', 'Deleting the managed backing value', 'Constructing the object’s initial state'], 0,
    'A getter controls access to a value and may compute it. Mutation belongs to a setter, while inheritance and exception handling are separate concerns.');
  add('oop', 'property-deleter', 'Delete managed attributes', 'application',
    'Which decorator defines behavior for `del obj.name` when `name` is a property?',
    ['`@name.deleter`', '`@name.setter`', '`@name.getter`', '`@property`'], 0,
    '`@name.deleter` adds deletion behavior to the existing property. It parallels `@name.getter` and `@name.setter` rather than using a standalone `del` decorator.');
  add('oop', 'inheritance-syntax', 'Write subclass declarations', 'foundation',
    'Which header declares `ElectricCar` as a subclass of `Car`?',
    ['`class ElectricCar(Car):`', '`class ElectricCar:`', '`ElectricCar = Car`', '`class Car(ElectricCar):`'], 0,
    'Python lists base classes in parentheses after the subclass name. Omitting the base defines no explicit `Car` inheritance, assignment creates an alias, and reversing the names declares `Car` as the subclass.');
  add('oop', 'name-mangling', 'Understand name mangling', 'analysis',
    'Inside class `Vault`, an attribute is assigned as `self.__code`. Which transformed name is normally stored?',
    ['`_Vault__code`', '`__Vault_code`', '`Vault.code`', '`_code__Vault`'], 0,
    'Python prefixes a double-leading-underscore name with an underscore and the class name. This reduces accidental clashes; it does not provide absolute privacy.');
  add('oop', 'super-call', 'Reuse parent behavior', 'application',
    'Inside an override of a no-argument instance method named `save`, which call continues to the next implementation in the method-resolution order?',
    ['`super().save()`', '`self.save()`', '`super.save()`', '`object.save(self)`'], 0,
    '`super()` creates a proxy that continues lookup after the current class in the MRO. Calling `self.save()` would recurse, while the other expressions do not create or use that proxy correctly.');
  add('oop', 'polymorphism', 'Recognize polymorphic interfaces', 'foundation',
    'A function calls `shape.area()` for circles and rectangles without branching on their concrete classes. What enables this design?',
    ['Polymorphism through a shared operation', 'Encapsulation of every attribute', 'Single inheritance from one required base class', 'Composition of each shape inside the function'], 0,
    'Polymorphism lets different object types respond to the same operation with their own implementations, so client code can use a common interface.');
  add('oop', 'composition', 'Choose composition relationships', 'analysis',
    'A `Car` creates and owns an `Engine` component, then delegates starting behavior to it. Which relationship is represented?',
    ['Composition: a car has an engine', 'Inheritance: a car is an engine', 'Polymorphism: either object can replace the other', 'Dependency injection: an engine is supplied temporarily to one method'], 0,
    'Owning another object as a component is composition and models a has-a relationship. Inheritance would assert is-a, and a temporary supplied dependency would have a different lifetime.');
  add('oop', 'abstract-contract', 'Enforce abstract interfaces', 'analysis',
    'What happens when a subclass of an `ABC` leaves an inherited abstract method unimplemented?',
    ['The subclass can be defined, but instantiating it raises `TypeError` while the method remains abstract', 'The subclass definition itself always raises `SyntaxError`', 'The inherited abstract method becomes concrete automatically', 'The object is created, and failure occurs only when that method is called'], 0,
    'An unimplemented abstract method keeps the subclass abstract, so ordinary instantiation raises `TypeError`. Defining the required concrete method satisfies the contract.');

  // Linear data structures — 15 independently written items.
  add('linear', 'big-o-purpose', 'Interpret Big O notation', 'foundation',
    'What does Big O notation primarily describe?',
    ['How resource use grows as the input grows', 'The exact running time on one computer', 'The number of lines in the source file', 'Whether an algorithm returns the correct type'], 0,
    'Big O captures an asymptotic growth bound for time or space. It abstracts away machine speed, small constants, and source-code length.');
  add('linear', 'clarify-problem', 'Approach algorithmic problems', 'analysis',
    'Before choosing a data structure for a new problem, what should you establish first?',
    ['The required inputs, outputs, and constraints', 'The implementation language’s fastest built-in container', 'A target complexity without considering memory limits', 'A recursive or iterative implementation strategy'], 0,
    'Clarifying the contract and constraints determines which operations matter. Selecting an implementation before understanding the problem often optimizes the wrong thing.');
  add('linear', 'dynamic-array', 'Compare array designs', 'foundation',
    'What distinguishes a dynamic array from a fixed-size array?',
    ['It can allocate a larger backing store as it grows', 'It stores every element in a linked node', 'It guarantees all insertions are constant time', 'It accepts only numeric elements'], 0,
    'A dynamic array resizes its contiguous storage when capacity is exhausted. It is not a linked list, and insertions away from the end may still require shifts.');
  add('linear', 'append-amortized', 'Analyze dynamic-array append', 'application',
    'A dynamic array grows its capacity geometrically when full. What is the amortized time for appending one item?',
    ['`O(1)`', '`O(log n)`', '`O(n)` for every append', '`O(n²)`'], 0,
    'Occasional resizing costs linear time, but many inexpensive appends spread that cost out, giving constant amortized time rather than constant worst-case time.');
  add('linear', 'linked-index', 'Analyze linked-list traversal', 'analysis',
    'Why is retrieving an arbitrary indexed item from an `n`-node singly linked list `O(n)` in the worst case?',
    ['The links must be followed from the head until that position', 'An index can be converted directly into a contiguous memory offset', 'Traversal can always begin at whichever end is closer', 'Every singly linked list maintains a separate array of node addresses'], 0,
    'A singly linked list has no direct address calculation for an index. Reaching a later position requires sequentially following `next` links from the head.');
  add('linear', 'doubly-linked', 'Compare linked-list variants', 'foundation',
    'What additional connection does a doubly linked node normally have?',
    ['A reference to the previous node', 'A cached numeric index for the node', 'A reference that skips directly to the tail', 'A second reference to the next node'], 0,
    'Doubly linked nodes store both next and previous references, enabling traversal in either direction at the cost of extra memory and link updates.');
  add('linear', 'stack-order', 'Use stack semantics', 'application',
    'A parser pushes `(`, `[`, then `{` onto a stack. Which symbol is popped first?',
    ['`(`', '`[`', '`{`', 'No symbol; mixed bracket types cannot share a stack'], 2,
    'A stack is last in, first out. The most recently pushed symbol, `{`, is therefore the first one removed.');
  add('linear', 'queue-operation', 'Use queue semantics', 'application',
    'Using `collections.deque` as a FIFO queue, which expression efficiently removes and returns the item that has waited longest?',
    ['`queue.popleft()`', '`queue.pop()`', '`queue[0]`', '`queue.appendleft(item)`'], 0,
    'FIFO means first in, first out. The oldest item sits at the left end, so `popleft()` removes and returns it in O(1) time. `queue[0]` only reads the front, `queue.pop()` takes the newest item from the right end, and `appendleft` adds at the front.');
  add('linear', 'hash-average', 'Analyze hash maps', 'application',
    'With a well-distributed hash function and controlled load factor, what is average key lookup time in a hash map?',
    ['`O(1)`', '`O(log n)`', '`O(n log n)`', '`O(n²)`'], 0,
    'A good hash usually identifies a small bucket directly, giving expected constant-time lookup. Severe collisions can still produce a worse case.');
  add('linear', 'set-guarantee', 'Understand set semantics', 'foundation',
    'Which guarantee is fundamental to a set?',
    ['Equal elements are represented at most once', 'Elements are always returned in sorted order', 'Every element has a numeric index', 'Insertion order can never change'], 0,
    'A set models membership without duplicates. Sorting and positional indexing are not part of the abstract set contract.');
  add('linear', 'array-middle-insert', 'Analyze array insertion', 'analysis',
    'Why is insertion near the front of a dynamic array usually `O(n)`?',
    ['Later elements may need to shift to make room', 'The insertion must first search every value for duplicates', 'The array must sort its contents after every insertion', 'Allocating one unused slot always takes linear time'], 0,
    'Contiguous order requires moving the suffix when a gap is opened near the front. Capacity alone does not eliminate those shifts.');
  add('linear', 'linked-head-insert', 'Analyze linked-list insertion', 'application',
    'If the head reference is known, what is the time complexity of inserting a new node at the head of a singly linked list?',
    ['`O(1)`', '`O(log n)`', '`O(n)`', '`O(n²)`'], 0,
    'The new node can point to the old head and then become the head using a fixed number of reference changes, independent of list length.');
  add('linear', 'hash-collision', 'Recognize hash collisions', 'foundation',
    'What is a hash collision?',
    ['Two distinct keys map to the same bucket or hash position', 'An existing key is assigned a replacement value', 'Two equal keys compare as the same key', 'The table resizes after crossing its load threshold'], 0,
    'A collision occurs when different keys produce the same placement. Hash maps must resolve that condition through strategies such as chaining or probing.');
  add('linear', 'rehash-reason', 'Reason about load factor', 'analysis',
    'Why does a hash map commonly resize and rehash as it fills?',
    ['To reduce crowding and preserve expected fast operations', 'To sort keys alphabetically for binary search', 'To convert all keys into integers', 'To guarantee collisions become impossible'], 0,
    'A lower load factor reduces crowded buckets or probe sequences, preserving expected constant-time behavior. Resizing reduces collisions but cannot make them impossible.');
  add('linear', 'space-complexity', 'Interpret space complexity', 'foundation',
    'What does auxiliary space complexity measure?',
    ['How extra working memory used by the algorithm grows', 'How input storage plus working memory grows', 'How execution time grows with input size', 'How the serialized input size grows'], 0,
    'Auxiliary space excludes storage already occupied by the input and measures only extra working memory. Total space includes both the input and that working memory.');

  // Searching and sorting — 22 independently written items.
  add('algorithms', 'linear-search', 'Recognize linear search', 'foundation',
    'Which search checks items from the beginning until the target is found or the input ends?',
    ['Linear search', 'Binary search', 'Merge sort', 'Heapify'], 0,
    'Linear search examines candidates sequentially and needs no sorted input. Binary search instead uses ordering to discard large portions.');
  add('algorithms', 'divide-conquer', 'Recognize divide and conquer', 'foundation',
    'Which paradigm recursively divides a problem into independent smaller instances of the same problem, solves them, and combines their results?',
    ['Divide and conquer', 'Dynamic programming', 'Greedy choice', 'Backtracking'], 0,
    'Divide and conquer separates a problem into independent same-form subproblems and combines their answers. Dynamic programming emphasizes overlapping states, while greedy and backtracking use different decision strategies.');
  add('algorithms', 'linear-space', 'Analyze search space', 'application',
    'An iterative linear search stores only its loop index and target. What auxiliary space does it use?',
    ['`O(1)`', '`O(log n)`', '`O(n)`', '`O(n²)`'], 0,
    'The algorithm uses a fixed amount of extra state regardless of input length, so its auxiliary space is constant even though its running time can be linear.');
  add('algorithms', 'binary-choice', 'Choose a search algorithm', 'analysis',
    'You will perform thousands of lookups on a large list that is already sorted. Which search is generally the better fit?',
    ['Binary search', 'Linear scan from the beginning', 'Linear scan from the end', 'Alternating linear scan outward from the midpoint'], 0,
    'Binary search takes advantage of the existing order and reduces the search interval by half. Repeated linear scans waste that useful structure.');
  add('algorithms', 'binary-space', 'Analyze iterative binary search', 'application',
    'What auxiliary space does an iterative binary search normally require?',
    ['`O(1)`', '`O(log n)`', '`O(n)`', '`O(2ⁿ)`'], 0,
    'The iterative version keeps a few boundary and midpoint variables, so extra storage does not grow with the list. A recursive version uses call-stack space.');
  add('algorithms', 'search-return', 'Interpret search contracts', 'foundation',
    'A search function is documented to return an index. What should a successful search for the first element return?',
    ['`0`', '`1`', '`True` only', 'The element’s value instead of its position'], 0,
    'Python indexes begin at zero, so the first position is index 0. A Boolean or value would violate this stated function contract.');
  add('algorithms', 'not-found-sentinel', 'Design search results', 'analysis',
    'A custom search returns successful indexes only in `0..len(items)-1`. Why can it use `-1` to report no match?',
    ['It lies outside the function’s successful-result range', 'It means the last element matched', 'It raises `IndexError` automatically', 'It tells Python to repeat the search'], 0,
    '`-1` is outside this function’s documented successful-result range. It remains a valid Python negative index—`items[-1]` accesses the last item—so callers must test the sentinel before indexing.');
  add('algorithms', 'merge-process', 'Understand merge sort', 'foundation',
    'Which description matches merge sort?',
    ['Split the input, sort the parts recursively, then merge sorted parts', 'Repeatedly swap adjacent inversions until no swaps occur', 'Choose the minimum and put it at the next front position', 'Build a heap and repeatedly remove its root into final position'], 0,
    'Merge sort recursively divides the input and combines sorted halves with a linear merge step. The other descriptions correspond to bubble sort, selection sort, and heap sort.');
  add('algorithms', 'binary-prerequisite', 'Apply binary search conditions', 'application',
    'Which condition does ordinary binary search require?',
    ['The values are sorted using the same comparison used by the search', 'Every value is unique', 'The list length is even', 'All values are nonnegative'], 0,
    'The ordering invariant is what justifies discarding one half after each midpoint comparison. Duplicate, negative, and odd-count inputs can still be searched when they are ordered consistently.');
  add('algorithms', 'merge-aux-space', 'Analyze merge sort space', 'analysis',
    'What auxiliary space does a conventional array-based merge sort normally require?',
    ['`O(1)`', '`O(log n)`', '`O(n)`', '`O(n log n)`'], 2,
    'A conventional array merge sort uses temporary storage proportional to the input while merging, so its auxiliary space is `O(n)`. Specialized in-place variants are not the model assumed here.');
  add('algorithms', 'selection-first-pass', 'Trace selection sort', 'analysis',
    'After the first outer pass of ascending selection sort on `[7, 5, 3, 2]`, what is the list?',
    ['`[2, 5, 3, 7]`', '`[2, 3, 5, 7]`', '`[5, 7, 3, 2]`', '`[7, 5, 3, 2]`'], 0,
    'Selection sort finds the minimum 2 and swaps it with the first element 7. The first position is now final, but the suffix `[5, 3, 7]` still needs later passes.');
  add('algorithms', 'quicksort-worst', 'Analyze quicksort', 'analysis',
    'What causes quicksort to approach `O(n²)` time?',
    ['Repeatedly choosing pivots that create extremely unbalanced partitions', 'Always splitting into two nearly equal partitions', 'Merging two sorted halves in linear time', 'Using a constant number of index variables'], 0,
    'If each pivot leaves a partition of size `n - 1`, recursion becomes deep and total comparisons become quadratic. Balanced partitions yield the expected `O(n log n)` shape.');
  add('algorithms', 'stable-sort', 'Understand sorting stability', 'foundation',
    'What does it mean for a sort to be stable?',
    ['Records with equal keys keep their original relative order', 'Every record remains at its original index', 'The same output order appears for every permutation of the input', 'The algorithm performs no swaps between records with different keys'], 0,
    'Stability concerns only the relative order of equal-key records. It does not keep every record at its old index or prescribe a sort’s operations or output for differently ordered inputs.');
  add('algorithms', 'merge-complexity', 'Analyze merge sort complexity', 'application',
    'What is merge sort’s standard worst-case time complexity?',
    ['`O(log n)`', '`O(n)`', '`O(n log n)`', '`O(n²)`'], 2,
    'There are logarithmically many split levels, and merging across each level processes `n` items, producing `O(n log n)` worst-case time.');
  add('algorithms', 'luhn-purpose', 'Understand checksum algorithms', 'foundation',
    'What is the Luhn algorithm designed to do?',
    ['Detect many common transcription mistakes in identification numbers', 'Prove that an identifier was issued by a trusted organization', 'Correct any mistyped digit automatically', 'Encrypt the identifier so it cannot be read'], 0,
    'Luhn is a checksum that detects many accidental entry errors. A passing checksum neither authenticates an issuer nor corrects errors, and it provides no encryption.');
  add('algorithms', 'merge-step', 'Merge sorted sequences', 'application',
    'Which list is the correct merge of `[1, 4, 9]` and `[2, 3, 8]`?',
    ['`[1, 2, 3, 4, 8, 9]`', '`[1, 4, 9, 2, 3, 8]`', '`[2, 3, 8, 1, 4, 9]`', '`[9, 8, 4, 3, 2, 1]`'], 0,
    'The merge repeatedly takes the smaller front value from the two sorted inputs, preserving all six values in ascending order.');
  add('algorithms', 'recursive-space', 'Analyze recursive algorithms', 'analysis',
    'An index-based recursive binary search passes low and high bounds without slicing the input. Why does it use `O(log n)` auxiliary space?',
    ['The active call stack can contain one frame per halving level', 'The full list is copied into each call despite using index bounds', 'All recursive calls reuse one stack frame, making the space `O(1)`', 'The recursion stores one frame for every input element, making the space `O(n)`'], 0,
    'Each recursive call waits for the next and adds a stack frame. Since the range halves each time, the maximum recursion depth grows logarithmically.');
  add('algorithms', 'linear-unsorted', 'Choose searches based on constraints', 'analysis',
    'You have a short unsorted stream that will be searched only once. Why may linear search be preferable to sorting first?',
    ['A direct scan avoids paying the sorting cost for one lookup', 'Linear search requires the values to be sorted first', 'Binary search retains its logarithmic guarantee on unsorted data', 'Sorting a stream for one lookup has no time or memory cost'], 0,
    'For a single lookup, an `O(n)` scan can be cheaper and simpler than first spending `O(n log n)` to sort. The trade-off changes with many later searches.');

  add('algorithms', 'simplify-complexity-quadratic', 'Simplify quadratic growth with Big-O', 'application',
    'A profiler reports that an algorithm runs 20n² + 15n + 7 primitive operations for an input of size n. After dropping constant factors and lower-order terms, which classification describes its growth?',
    ['`O(n²)`', '`O(n)`', '`O(n³)`', '`O(1)`'], 0,
    'Constant coefficients and lower-order terms do not affect asymptotic growth. The n² term grows fastest, so the conventional simplified classification is O(n²).');
  add('algorithms', 'simplify-complexity-cubic', 'Classify cubic growth with Big-O', 'application',
    'A function’s cost is 7n³ + 400n² + 2 steps. Which Big-O class represents its asymptotic growth?',
    ['`O(n³)`', '`O(n²)`', '`O(n⁴)`', '`O(n)`'], 0,
    'After ignoring coefficients and lower-order terms, n³ is the fastest-growing term, so the conventional simplified classification is O(n³).');
  add('algorithms', 'simplify-complexity-linearithmic', 'Simplify linearithmic growth with Big-O', 'application',
    'A merge-based routine performs 12n log n + 30n + 4 operations for n items. Which standard Big-O class matches that growth?',
    ['`O(n log n)`', '`O(n)`', '`O(log n)`', '`O(n²)`'], 0,
    'n log n grows faster than n and constants but slower than n². It is the dominant term, so the simplified classification is O(n log n).');
  add('algorithms', 'simplify-complexity-logarithmic', 'Classify logarithmic growth with Big-O', 'application',
    'A lookup benchmark’s work is 8 log n + 500 steps for n entries. Which Big-O class best describes how it scales?',
    ['`O(log n)`', '`O(1)`', '`O(n)`', '`O(n log n)`'], 0,
    'The coefficient 8 and constant 500 are ignored asymptotically. The remaining growth term is log n, producing O(log n).');

  // Graphs and trees — 22 independently written items.
  add('graphs', 'graph-model', 'Recognize graph structures', 'foundation',
    'Which structure directly models entities with arbitrary pairwise relationships rather than only a linear or hierarchical order?',
    ['Graph', 'Stack', 'Queue', 'Binary tree'], 0,
    'A graph represents entities as vertices and arbitrary relationships as edges. Stacks and queues impose linear access orders, while a binary tree restricts relationships to a hierarchy.');
  add('graphs', 'vertex-term', 'Identify graph vocabulary', 'foundation',
    'What is an individual entity in a graph called?',
    ['Vertex', 'Pivot', 'Bucket', 'Frame'], 0,
    'A vertex, also called a node, represents an entity or state. Edges are the connections between vertices.');
  add('graphs', 'edge-term', 'Identify graph relationships', 'foundation',
    'What graph component represents a connection between two vertices?',
    ['Edge', 'Path', 'Component', 'Label'], 0,
    'An edge is one direct connection. A path is a sequence of edges, a component is a connected region, and a label is data attached to a graph element.');
  add('graphs', 'undirected', 'Distinguish graph direction', 'application',
    'In an undirected friendship graph, what does an edge between A and B imply?',
    ['A is connected to B and B is connected to A', 'Only A can reach B', 'Only B can reach A', 'A and B must be the same vertex'], 0,
    'An undirected edge has no orientation, so the relationship is mutual. A one-way relationship would require a directed graph.');
  add('graphs', 'labeled-graph', 'Understand graph labels', 'foundation',
    'What application-specific information can a labeled graph associate with vertices or edges?',
    ['Names, categories, or other descriptive values', 'A guarantee that no cycles exist', 'A fixed traversal order for every algorithm', 'A requirement that every edge have a numeric cost'], 0,
    'Labels attach application data to graph elements. They do not by themselves determine cycles, traversal order, or whether edges carry numeric weights.');
  add('graphs', 'cyclic-directed', 'Recognize directed cycles', 'application',
    'A directed graph contains `A → B`, `B → C`, and `C → A`. How is it classified?',
    ['Cyclic', 'A directed acyclic graph', 'Disconnected', 'A binary tree'], 0,
    'Following the directed edges returns to A, so the graph contains a directed cycle. That rules out both a DAG and a tree.');
  add('graphs', 'weighted', 'Interpret edge weights', 'foundation',
    'In a road network, what might an edge weight represent?',
    ['Distance or travel cost', 'The direction of the road without any numeric cost', 'The number of vertices in the entire graph', 'The order in which the road was added'], 0,
    'Weights quantify the cost, distance, capacity, or another property of a particular connection. They are not global graph or environment metadata.');
  add('graphs', 'dag', 'Recognize directed acyclic graphs', 'foundation',
    'What is a directed acyclic graph?',
    ['A directed graph with no directed cycles', 'An undirected graph where every node has degree two', 'Any graph stored as a matrix', 'A graph containing exactly one vertex'], 0,
    'A DAG combines directed edges with the absence of directed cycles. Its storage representation and number of vertices are independent properties.');
  add('graphs', 'disconnected', 'Identify connected components', 'application',
    'An undirected graph has two groups of vertices with no path between the groups. What is true?',
    ['The graph is disconnected', 'A traversal from one group reaches every vertex', 'The graph is complete', 'The two groups together form one cycle'], 0,
    'Separate components with no connecting path make the graph disconnected. A traversal from one component cannot reach the other unless started again there.');
  add('graphs', 'bfs-queue', 'Understand breadth-first search', 'analysis',
    'Why does breadth-first search on an unweighted graph normally use a queue?',
    ['FIFO order processes vertices by increasing edge distance from the start', 'A queue sorts vertices by their labels', 'A queue removes the need to track visited vertices', 'FIFO order follows one branch to its deepest vertex first'], 0,
    'The queue preserves discovery order, so vertices one edge away are handled before deeper vertices. Visited tracking is still needed; following one branch first describes depth-first search.');
  add('graphs', 'dfs-stack', 'Understand depth-first search', 'application',
    'Which structure naturally supports an iterative depth-first traversal?',
    ['Stack', 'FIFO queue', 'Priority queue ordered by vertex label', 'Set with no frontier ordering'], 0,
    'A stack keeps the newest frontier vertex on top, allowing traversal to continue down a branch before backtracking. Recursion uses the call stack similarly.');
  add('graphs', 'adjacency-matrix', 'Represent graphs with matrices', 'foundation',
    'What does cell `[i][j]` commonly indicate in an adjacency matrix?',
    ['Whether an edge from vertex i to vertex j exists, or its weight', 'The shortest-path distance between i and j in every graph', 'The required traversal order of i and j', 'The sum of the degrees of i and j'], 0,
    'Rows and columns correspond to vertices, and their intersection records the associated edge or weight. Traversal order is not encoded by that cell alone.');
  add('graphs', 'adjacency-list', 'Represent sparse graphs', 'application',
    'In a directed graph, what does an adjacency-list entry for vertex `A` normally contain?',
    ['The immediate neighbors reached by outgoing edges from A', 'Every vertex reachable through any-length path from A', 'The graph’s total edge count', 'All vertices with incoming edges to A and no others'], 0,
    'A directed adjacency list commonly stores immediate outgoing neighbors. Vertices farther away require traversal, and incoming neighbors need a reverse representation or separate scan.');
  add('graphs', 'representation-choice-sparse', 'Choose a representation for a sparse graph', 'analysis',
    'A road network has 100,000 intersections, each connected to only a few nearby intersections. The program frequently runs BFS and iterates through each intersection’s actual neighbors. Which representation is the better fit?',
    ['An adjacency list, because it stores only existing edges and visits only actual neighbors', 'An adjacency matrix, because every possible edge receives a cell', 'An adjacency matrix, because scanning a full row is O(degree)', 'An adjacency list, because it always uses O(V²) space'], 0,
    'This graph is sparse: E is much smaller than V². An adjacency list uses O(V + E) space and neighbor iteration costs O(degree), while a matrix allocates O(V²) cells and scans an entire row of V cells.');
  add('graphs', 'representation-choice-dense', 'Choose a representation for a dense graph', 'analysis',
    'A graph has 200 vertices and is nearly complete. The program repeatedly asks whether a particular edge `(u, v)` exists, and O(V²) memory is acceptable. Which representation is the better fit?',
    ['An adjacency matrix, because one cell answers an edge-existence query in O(1) time', 'An adjacency list, because every edge query is automatically O(1)', 'An adjacency matrix, because it uses only O(V + E) memory', 'An adjacency list, because dense graphs contain very few edges'], 0,
    'For a small dense graph, most matrix cells represent real edges and the O(V²) space is acceptable. Looking up matrix[u][v] checks a specific edge directly in O(1) time.');
  add('graphs', 'representation-choice-memory', 'Minimize memory in a sparse graph', 'analysis',
    'A graph has 10,000 vertices but only 20,000 edges, and minimizing memory use is the primary concern. Which standard representation is more appropriate?',
    ['An adjacency list, because its space grows as O(V + E)', 'An adjacency matrix, because its space grows as O(E)', 'An adjacency matrix, because unused edge cells require no memory', 'An adjacency list, because its space always stays O(1)'], 0,
    'With far fewer edges than V², the graph is sparse. An adjacency list records the vertices and existing edges in O(V + E) space instead of allocating a 10,000 by 10,000 matrix.');
  add('graphs', 'representation-choice-weights', 'Access weights in a dense graph', 'analysis',
    'A small graph is dense, and an algorithm repeatedly updates and reads the weight for arbitrary vertex pairs. Which representation gives the most direct access to each pair’s weight?',
    ['An adjacency matrix, because the weight can be stored directly in cell `(u, v)`', 'An adjacency list, because arbitrary pair lookup never examines neighbors', 'An adjacency matrix, because it avoids allocating entries for absent edges', 'An adjacency list, because it guarantees every pair occupies one fixed cell'], 0,
    'A weighted adjacency matrix stores the weight, or a sentinel for no edge, at matrix[u][v]. This gives direct O(1) access and is reasonable when the graph is small and dense.');
  add('graphs', 'tree-definition', 'Distinguish trees from general graphs', 'analysis',
    'Which conditions characterize a finite undirected tree?',
    ['Connected and acyclic', 'Disconnected and weighted', 'Cyclic and complete', 'Directed with at least two roots'], 0,
    'A tree connects every vertex while containing no cycles. Either a disconnection or a cycle means the undirected graph is not a tree.');
  add('graphs', 'binary-tree', 'Recognize binary trees', 'foundation',
    'What restriction defines a binary tree?',
    ['Each node has at most two children', 'Every node has exactly two children', 'All values are binary digits', 'The tree must have two roots'], 0,
    'Binary means each node has no more than two child positions. Nodes may have zero or one child, and stored values need not be 0 or 1.');
  add('graphs', 'trie-purpose', 'Understand tries', 'foundation',
    'Which task is a trie especially suited for?',
    ['Prefix lookup among strings', 'Removal by numeric priority', 'First-in, first-out message handling', 'Finding arbitrary substrings inside one long string'], 0,
    'A trie shares paths for common prefixes, making autocomplete and prefix membership efficient. Priority queues, numeric-range structures, and graph traversals serve the other tasks.');
  add('graphs', 'priority-queue', 'Compare queue priorities', 'analysis',
    'How does a priority queue differ from a regular FIFO queue?',
    ['Removal is based on priority rather than arrival time alone', 'Removal remains strictly FIFO regardless of priority', 'Removal becomes strictly LIFO whenever priorities differ', 'Priority controls admission to the queue but never removal order'], 0,
    'A priority queue serves the highest- or lowest-priority item according to its policy. Equal priorities may use arrival order, but priority controls removal generally.');
  add('graphs', 'heap-complexity', 'Analyze binary heaps', 'application',
    'For a min-heap or max-heap, what are the usual worst-case time complexities of insertion and removing the root-priority item?',
    ['Both are `O(log n)`', 'Insertion is `O(1)` and removal is `O(log n)`', 'Insertion is `O(log n)` and removal is `O(1)`', 'Both are `O(n)`'], 0,
    'Either operation may move an element along the heap height, which is logarithmic. Reading the root is constant time, but removing it requires restoring the heap property.');

  // Dynamic programming — 9 independently written items.
  add('dynamic', 'two-properties', 'Recognize dynamic-programming problems', 'foundation',
    'Which pair most strongly suggests that dynamic programming may help?',
    ['Overlapping subproblems and optimal substructure', 'Independent subproblems and a greedy-choice property', 'A sorted input and constant auxiliary space', 'Unique states and no reusable recurrence'], 0,
    'Dynamic programming reuses answers to recurring subproblems and builds larger optimal answers from smaller ones. Without those traits, caching may offer little benefit.');
  add('dynamic', 'memo-vs-table', 'Compare memoization and tabulation', 'foundation',
    'What is the primary difference between memoization and tabulation?',
    ['Memoization is usually top-down caching; tabulation is usually bottom-up iteration', 'Memoization works bottom-up; tabulation follows recursive calls top-down', 'Memoization stores only base cases; tabulation stores only the final result', 'Memoization requires dictionaries; tabulation requires two-dimensional lists'], 0,
    'Both reuse results, but memoization commonly follows recursive demand from the target while tabulation fills known states upward in a chosen order.');
  add('dynamic', 'naive-recursion', 'Analyze repeated subproblems', 'analysis',
    'Why does naive recursive Fibonacci perform far more work than necessary?',
    ['The recursion tree recomputes the same Fibonacci states many times', 'Its linear recursion depth guarantees linear running time', 'Each branch computes a completely disjoint set of Fibonacci states', 'Looking up either base case takes exponential time'], 0,
    'Calls such as `fib(k)` appear in many branches and are recomputed without a cache. Storing each state once changes the amount of work dramatically.');
  add('dynamic', 'optimal-substructure', 'Understand optimal substructure', 'foundation',
    'What does optimal substructure mean?',
    ['An optimal solution can be composed from optimal solutions to related subproblems', 'The same subproblem necessarily appears along many branches', 'A locally best choice is always globally best without reconsideration', 'Every subproblem has exactly one feasible solution'], 0,
    'Optimal substructure connects the best full solution to best solutions of smaller states. Overlap is a separate DP signal, a greedy-choice property is stronger and different, and subproblem solutions need not be unique.');
  add('dynamic', 'memo-hit', 'Use memoization caches', 'application',
    'A memoized function is called with a state already present in its cache. What should it normally do?',
    ['Return the cached result without solving that state again', 'Recompute the state and overwrite the cached result', 'Remove that entry so later calls can recompute it', 'Append a second result under the same cache key'], 0,
    'A cache hit is the mechanism that removes duplicate work: the stored answer is returned directly. Recomputing would discard the main benefit of memoization.');
  add('dynamic', 'tabulation-advantage', 'Choose bottom-up solutions', 'analysis',
    'What can be an advantage of tabulation over a deeply recursive memoized solution?',
    ['It avoids recursion-depth limits and call-stack overhead', 'It usually evaluates only states demanded by top-down recursion', 'It always stores fewer states than memoization', 'It can start without defining any base state'], 0,
    'Bottom-up iteration can avoid a deep Python call stack. It may still use substantial table memory and still requires correctly initialized base states.');
  add('dynamic', 'base-first', 'Initialize recurrence base cases', 'application',
    'Why are base cases filled before later states in a bottom-up table?',
    ['Later recurrence values depend on those already-known starting values', 'They reduce the allocated table to constant size', 'They eliminate the need for a recurrence', 'They allow all remaining states to be filled in any order'], 0,
    'A bottom-up recurrence reads solutions to smaller states, so its initial dependencies must exist first. The ordering is algorithmic, not a Python indexing rule.');
  add('dynamic', 'time-space-tradeoff', 'Evaluate dynamic-programming costs', 'analysis',
    'Relative to naive repeated recursion, what trade-off does dynamic programming commonly make?',
    ['More storage in exchange for less repeated work', 'Less storage in exchange for more repeated work', 'The same storage with less work in every case', 'More storage together with more repeated work'], 0,
    'Caching or tabulation spends memory on subproblem answers to reduce time. Space can sometimes be optimized, but reused results must be represented somehow.');
  add('dynamic', 'poor-fit', 'Decide when not to use dynamic programming', 'analysis',
    'Which situation is least likely to benefit from dynamic programming?',
    ['Each recursive branch leads to distinct subproblems that are never revisited', 'The same state appears throughout a large recursion tree', 'A best solution combines best solutions to smaller states', 'Many calls ask for results already computed'], 0,
    'When subproblems never overlap, caching them does not prevent repeated work because there is none. The other situations describe exactly where reuse can help.');

  function buildQuestionBank() {
    return bank.map(question => ({ ...question, choices: question.choices.slice() }));
  }

  return { BANK_VERSION, TOPIC_QUOTAS, TOPIC_LABELS, buildQuestionBank };
});
