

# SOURCE https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/839daddf08cf132115da8ebf55be1892a26b60d8/curriculum/challenges/english/blocks/quiz-python-basics/67f41242431cbf3db8ca79c7.md

---
id: 67f41242431cbf3db8ca79c7
title: Python Basics Quiz
challengeType: 8
dashedName: quiz-python-basics
---

# --description--

To pass the quiz, you must correctly answer at least 18 of the 20 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

Which of the following functions is used to check if a variable matches a specific data type?

#### --distractors--

`istype()`

---

`isdata()`

---

`isvariable()`

#### --answer--

`isinstance()`

### --question--

#### --text--

Which of the following is NOT a form of string concatenation?

#### --distractors--

```py
greeting = 'My name is '
developer = 'Jessica'

greeting += developer
```

---

```py
developer = 'Jessica'
greeting = 'My name is ' + developer + '.'
```

---

```py
developer = 'Jessica'
age = 30
greeting = 'My name is ' + developer + ' and I am ' + str(age) + ' years old.'
```

#### --answer--

```py
developer = 'Jessica'
greeting = x'My name is {developer}.'
```

### --question--

#### --text--

Which of the following functions is used to return the number of the characters in the string?

#### --distractors--

`counting()`

---

`length()`

---

`iscount()`

#### --answer--

`len()`

### --question--

#### --text--

What will `result` be in this example?

```py
developer = 'Naomi'

result = developer.endswith('N') # ?
```

#### --distractors--

`Undefined`

---

`True`

---

`None`

#### --answer--

`False`

### --question--

#### --text--

What happens when you add a float and an integer?

#### --distractors--

The result will be an error message.

---

The result will be `None`.

---

The result will be an integer.

#### --answer--

The result will be a float.

### --question--

#### --text--

Which of the following is the correct way to define a function?

#### --distractors--

```py
define get_sum(num_1, num_2) {
    return num_1 + num_2 
} 
```

---

```py
set get_sum(num_1, num_2):
    return num_1 + num_2
```

---

```py
function get_sum(num_1, num_2) {
    return num_1 + num_2 
}
```

#### --answer--

```py
def get_sum(num_1, num_2):
    return num_1 + num_2
```

### --question--

#### --text--

What will be printed to the console?

```py
def greet():
    pass
    
print(greet()) # ?
```

#### --distractors--

`TypeError`

---

`RangeError`

---

`Null`

#### --answer--

`None`

### --question--

#### --text--

Which of the following statements is false when naming variables?

#### --distractors--

Variable names can only start with a letter or an underscore (_), not a number.

---

Variable names can only contain alphanumeric characters (a-z, A-Z, 0-9) and underscores (_).

---

Variable names cannot be one of Python's reserved keywords such as `if`, `class`, or `def`.

#### --answer--

Variable names must have a max length of 10 characters, otherwise Python will throw an error.

### --question--

#### --text--

Which of the following is NOT a supported data type in Python?

#### --distractors--

`None`

---

`int`

---

`float`

#### --answer--

`Generic`

### --question--

#### --text--

Which of the following will return a new string with all characters converted to uppercase?

#### --distractors--

```py
developer = 'Jessica'

print(developer.isupper()) # JESSICA
```

---

```py
developer = 'Jessica'

print(developer.up()) # JESSICA
```

---

```py
developer = 'Jessica'

print(developer.toUpper()) # JESSICA
```

#### --answer--

```py
developer = 'Jessica'

print(developer.upper()) # JESSICA
```

### --question--

#### --text--

Which of the following functions is used to get input from a user?

#### --distractors--

`read()`

---

`cout()`

---

`prompt()`

#### --answer--

`input()`

### --question--

#### --text--

What will be the result for the following code?

```py
message = 'Python is fun!'

print(message[0:6])  # ?
```

#### --distractors--

`'Py'`

---

`'fun'`

---

`'is'`

#### --answer--

`'Python'`

### --question--

#### --text--

What does the `split()` method do?

#### --distractors--

This method is used to split a tuple into a list of substrings.

---

This method is used to split a float into a list of substrings.

---

This method is used to split a dictionary into a list of substrings.

#### --answer--

This method is used to split a string into a list of substrings.

### --question--

#### --text--

What will the following print to the console?

```py
example_list = ['example', 'dashed', 'name']

joined_str = ' '.join(example_list)
print(joined_str)  # ?
```

#### --distractors--

`TypeError`

---

`'dashed name'`

---

`None`

#### --answer--

`'example dashed name'`

### --question--

#### --text--

Which of the following functions is used to create a table of 1 to 1 character mappings for translation?

#### --distractors--

`str.translations()`

---

`str.gettranslate()`

---

`str.tran()`

#### --answer--

`str.maketrans()`

### --question--

#### --text--

What will be the result for the following code?

```py
int_1 = 4
int_2 = 2

print(int_1 ** int_2) # ?
```

#### --distractors--

8

---

2

---

4

#### --answer--

16

### --question--

#### --text--

What will be returned from the `find()` method if no substring occurrences are found in a string?

#### --distractors--

-2

---

1

---

0

#### --answer--

-1

### --question--

#### --text--

Which of the following functions is used to count the times a substring appears in a string?

#### --distractors--

`counter()`

---

`hascount()`

---

`counting()`

#### --answer--

`count()`

### --question--

#### --text--

What does floor division do in Python?

#### --distractors--

This operator is used to multiply two numbers and round up the result to the nearest whole number.

---

This operator is used to convert a float to an integer.

---

This operator is used to raise a number to the power of another.

#### --answer--

This operator is used to divide two numbers and round down the result to the nearest whole number.

### --question--

#### --text--

Which of the following functions is used to round a number to the nearest whole integer?

#### --distractors--

`floor()`

---

`ceil()`

---

`float()`

#### --answer--

`round()`



# SOURCE https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/839daddf08cf132115da8ebf55be1892a26b60d8/curriculum/challenges/english/blocks/quiz-python-installation/69fd84e01123960e15bb8455.md

---
id: 69fd84e01123960e15bb8455
title: Python Installation Quiz
challengeType: 8
dashedName: quiz-python-installation
---

# --description--

To pass the quiz, you must correctly answer at least 9 of the 10 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

Where is the best place to download Python for Windows, Mac, and Linux?

#### --distractors--

From GitHub repositories

---

From the npm package manager

---

From pip manager

#### --answer--

From the official Python website

### --question--

#### --text--

What is a terminal in the context of programming?

#### --distractors--

A graphical tool for designing apps.

---

A tool for linting and formatting your code.

---

A Python code editor with autocomplete.

#### --answer--

A text-based interface for running commands.

### --question--

#### --text--

What does IDE stand for?

#### --distractors--

Internet Development Engine

---

Integrated DevOps Environment

---

Internal Debugging Executor

#### --answer--

Integrated Development Environment

### --question--

#### --text--

Which of the following are popular IDEs or code editors for Python?

#### --distractors--

JetBrains, CLion, WindSurf

---

Photoshop, Illustrator, Figma

---

Clang, Pip, Deno

#### --answer--

VS Code, PyCharm, Spyder

### --question--

#### --text--

How do you typically run a Python file named `main.py` from the terminal?

#### --distractors--

`run main.py`

---

`pip main.py`

---

`execute main.py python`

#### --answer--

`python main.py`

### --question--

#### --text--

What is an interactive shell?

#### --distractors--

A program that audits your code for errors.

---

A program that runs tests against your code.

---

A program to lint your code.

#### --answer--

A program that lets you type commands one at a time and see the results.

### --question--

#### --text--

How do you start the Python interactive shell from the terminal?

#### --distractors--

Type `node python` and press `Enter`.

---

Type `run python` and press `Enter`.

---

Type `start python shell` and press `Enter`.

#### --answer--

Type `python` and press `Enter`.

### --question--

#### --text--

What does the `>>>` symbol mean in the Python interactive shell?

#### --distractors--

Python has stopped running.

---

Python is testing your code.

---

Python is installing packages.

#### --answer--

Python is waiting for the user input text.

### --question--

#### --text--

What does REPL stand for?

#### --distractors--

Run Execute Process Loop

---

Read Evaluate Print List

---

Runtime Execution Programming Language

#### --answer--

Read Evaluate Print Loop

### --question--

#### --text--

What happens when you run `print("Hello, world!")` in the Python interactive shell?

#### --distractors--

It prints `"Hello, world!"` on loop until the user stops it.

---

It creates a file and prints `"Hello, world!"` in the terminal.

---

It throws an error because that is not valid Python code.

#### --answer--

It prints `"Hello, world!"` in the terminal.


# SOURCE https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/839daddf08cf132115da8ebf55be1892a26b60d8/curriculum/challenges/english/blocks/quiz-loops-and-sequences/67f41268a129e63f8e071736.md

---
id: 67f41268a129e63f8e071736
title: Loops and Sequences Quiz
challengeType: 8
dashedName: quiz-loops-and-sequences
---

# --description--

To pass the quiz, you must correctly answer at least 18 of the 20 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

Which of the following is the correct syntax for a list?

#### --distractors--

```py
cities = //'Los Angeles', 'London', 'Tokyo'\\
```

---

```py
cities = {'Los Angeles', 'London', 'Tokyo'}
```

---

```py
cities = <'Los Angeles', 'London', 'Tokyo'>
```

#### --answer--

```py
cities = ['Los Angeles', 'London', 'Tokyo']
```

### --question--

#### --text--

What will be printed to the console?

```py
cities = ['Los Angeles', 'London', 'Tokyo']
print(cities[-1])
```

#### --distractors--

`'None'`

---

`'Los Angeles'`

---

`'London'`

#### --answer--

`'Tokyo'`

### --question--

#### --text--

What is an iterable?

#### --distractors--

It is a special type of string that can hold a large amount of characters.

---

It is a special type of number used to represent really large values.

---

It is a special data type mainly used in classes and special functions.

#### --answer--

It is a special type of object that can be looped over one item at a time.

### --question--

#### --text--

What will the following print to the console?

```py
developer = 'Jessica'

print(list(developer))
```

#### --distractors--

`'J', 'e', 's', 's', 'i', 'c', 'a'`

---

`{'J', 'e', 's', 's', 'i', 'c', 'a'}`

---

`<'J', 'e', 's', 's', 'i', 'c', 'a'>`

#### --answer--

`['J', 'e', 's', 's', 'i', 'c', 'a']`

### --question--

#### --text--

Which of the following is used to get the number of elements in a list?

#### --distractors--

`list()`

---

`long()`

---

`length()`

#### --answer--

`len()`

### --question--

#### --text--

What happens if you try to pass in an index (either positive or negative) that is out of bounds for a list?

#### --distractors--

You will receive a `SyntaxError`.

---

You will receive a `RangeError`.

---

You will receive a `TypeError`.

#### --answer--

You will receive an `IndexError`.

### --question--

#### --text--

What will be printed to the console?

```py
desserts = ['Cake', 'Cookies', 'Ice Cream', 'Pie']
print(desserts[1:3])
```

#### --distractors--

`['Cake', 'Cookies', 'Ice Cream', 'Pie']`

---

`['Cake', 'Cookies']`

---

`['Cake', 'Cookies', 'Cookies', 'Ice Cream']`

#### --answer--

`['Cookies', 'Ice Cream']`

### --question--

#### --text--

Which of the following methods is used to add an item to the end of a list?

#### --distractors--

`add()`

---

`pop()`

---

`push()`

#### --answer--

`append()`

### --question--

#### --text--

What will be printed to the console?

```py
numbers = [1, 2, 3, 4, 5]
even_numbers = [6, 8, 10]

numbers.extend(even_numbers)
print(numbers)
```

#### --distractors--

`[2, 3, 4, 5, 6, 8, 10]`

---

`[5, 6, 8, 10]`

---

`[1, 2, 3, 4]`

#### --answer--

`[1, 2, 3, 4, 5, 6, 8, 10]`

### --question--

#### --text--

Which of the following methods is used to insert an element at a specific index in a list?

#### --distractors--

`push()`

---

`add()`

---

`place()`

#### --answer--

`insert()`

### --question--

#### --text--

What will be printed to the console?

```py
numbers = [1, 2, 3, 4, 5, 5, 5]
numbers.remove(5)

print(numbers)
```

#### --distractors--

`[1, 2, 3, 4]`

---

`[1, 2, 3, 4, 5, 5, 5]`

---

`[1, 2, 3, 4, 5]`

#### --answer--

`[1, 2, 3, 4, 5, 5]`

### --question--

#### --text--

Which of the following methods is used to empty a list?

#### --distractors--

`pop()`

---

`empty()`

---

`remove()`

#### --answer--

`clear()`

### --question--

#### --text--

What is a tuple?

#### --distractors--

It is a mutable data type of a random sequence of values.

---

It is a special data type used to represent large numbers.

---

It is a method used to add elements to a list.

#### --answer--

It is an immutable ordered sequence of values.

### --question--

#### --text--

Which of the following is the correct way to unpack items from a tuple?

#### --distractors--

```py
developer = ('Alice', 34, 'Rust Developer')
(name, age, job) <= developer
```

---

```py
developer = ('Alice', 34, 'Rust Developer')
<<name, age, job>> = developer
```

---

```py
developer = ('Alice', 34, 'Rust Developer')
name, age, job == developer
```

#### --answer--

```py
developer = ('Alice', 34, 'Rust Developer')
name, age, job = developer
```

### --question--

#### --text--

What will be the result of the following code?

```py
developer = ('Jane Doe', 23, 'Python Developer')
del developer[1]
```

#### --distractors--

It will produce a `RangeError`.

---

Nothing will happen.

---

It will create an infinite loop.

#### --answer--

It will produce a `TypeError`.

### --question--

#### --text--

What will be the result for the following code?

```py
programming_languages = ('Rust', 'Java', 'Python', 'C++', 'Rust', 'Python')
programming_languages.index('Python', 3)
```

#### --distractors--

`2`

---

`6`

---

`0`

#### --answer--

`5`

### --question--

#### --text--

Which of the following functions is used to create a new list of the sorted values?

#### --distractors--

`has_sort()`

---

`sort()`

---

`is_sorted()`

#### --answer--

`sorted()`

### --question--

#### --text--

Which of the following is the correct way to use a `for` loop?

#### --distractors--

```py
programming_languages = ['Rust', 'Java', 'Python', 'C++']

for language in programming_languages [
    print(language)
]
```

---

```py
programming_languages = ['Rust', 'Java', 'Python', 'C++']

for language of programming_languages:
    print(language)
```

---

```py
programming_languages = ['Rust', 'Java', 'Python', 'C++']

for language in programming_languages {
    print(language)
}
```

#### --answer--

```py
programming_languages = ['Rust', 'Java', 'Python', 'C++']

for language in programming_languages:
    print(language)
```

### --question--

#### --text--

Which of the following functions is used to generate a sequence of integers?

#### --distractors--

`for()`

---

`int()`

---

`sequence()`

#### --answer--

`range()`

### --question--

#### --text--

Which of the following functions is used to iterate over multiple iterables in parallel?

#### --distractors--

`map()`

---

`filter()`

---

`reduce()`

#### --answer--

`zip()`



# SOURCE https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/839daddf08cf132115da8ebf55be1892a26b60d8/curriculum/challenges/english/blocks/quiz-dictionaries-and-sets/67f412ac59601c4151b763da.md

---
id: 67f412ac59601c4151b763da
title: Dictionaries and Sets Quiz
challengeType: 8
dashedName: quiz-dictionaries-and-sets
---

# --description--

To pass the quiz, you must correctly answer at least 18 of the 20 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

What is a dictionary?

#### --distractors--

A data structure that only holds strings and lists.

---

A data structure that is a collection of key-value pairs that only accept large numbers.

---

A data structure that only holds a collection of tuples.

#### --answer--

A data structure that is a collection of key-value pairs.

### --question--

#### --text--

Which of the following is the correct syntax for a dictionary?

#### --distractors--

```py
dictionary = {
    <key1: value1>,
    <key2: value2>
}
```

---

```py
dictionary = {
    (key1: value1),
    (key2: value2)
}
```

---

```py
dictionary = {
    [key1: value1],
    [key2: value2]
}
```

#### --answer--

```py
dictionary = {
    key1: value1,
    key2: value2
}
```

### --question--

#### --text--

Which of the following is true about dictionaries?

#### --distractors--

Keys must be at least two characters in length.

---

Keys must include a special symbol.

---

Keys must include at least one number.

#### --answer--

Keys must be unique.

### --question--

#### --text--

Which of the following constructors can be used to create a dictionary?

#### --distractors--

`diction()`

---

`dic()`

---

`dictionary()`

#### --answer--

`dict()`

### --question--

#### --text--

Which of the following is the correct way to access a value from a dictionary?

#### --distractors--

`dictionary<key>`

---

`dictionary/key/`

---

`dictionary{key}`

#### --answer--

`dictionary[key]`

### --question--

#### --text--

Which of the following is the correct way to update a value in a dictionary?

#### --distractors--

`pizza['name'] >> 'Margherita'`

---

`pizza['name'] << 'Margherita'`

---

`pizza['name'] == 'Margherita'`

#### --answer--

`pizza['name'] = 'Margherita'`

### --question--

#### --text--

Which of the following methods can be used to retrieve a value associated with a key?

#### --distractors--

`access()`

---

`set()`

---

`retrieve()`

#### --answer--

`get()`

### --question--

#### --text--

What is a view object?

#### --distractors--

A special object used to turn strings into dictionaries.

---

A way to view the content of a dictionary only if the dictionary has two or more key-value pairs.

---

A special object used to turn lists into dictionaries.

#### --answer--

A way to see the content of a dictionary without creating a separate copy of the data.

### --question--

#### --text--

Which of the following methods returns a view object with all the key-value pairs in the dictionary?

#### --distractors--

`lists()`

---

`dictionaries()`

---

`collections()`

#### --answer--

`items()`

### --question--

#### --text--

Which of the following methods removes all of the key-value pairs from the dictionary?

#### --distractors--

`empty()`

---

`replace()`

---

`remove()`

#### --answer--

`clear()`

### --question--

#### --text--

What will be the output for the following code?

```py
products = {
    'Laptop': 990,
    'Smartphone': 600,
    'Tablet': 250,
    'Headphones': 70,
}

for product in products.items():
    print(product)
```

#### --distractors--

```py
<'Laptop', 990>
<'Smartphone', 600>
<'Tablet', 250>
<'Headphones', 70>
```

---

```py
'Laptop', 990
'Smartphone', 600
'Tablet', 250
'Headphones', 70
```

---

```py
['Laptop', 990]
['Smartphone', 600]
['Tablet', 250]
['Headphones', 70]
```

#### --answer--

```py
('Laptop', 990)
('Smartphone', 600)
('Tablet', 250)
('Headphones', 70)
```

### --question--

#### --text--

Which of the following is true about sets?

#### --distractors--

Sets are mutable and ordered in reverse.

---

Sets are mutable and ordered.

---

Sets are immutable and unordered.

#### --answer--

Sets are mutable and unordered.

### --question--

#### --text--

Which of the following is the correct way to create a set?

#### --distractors--

`my_set = (1, 2, 3, 4, 5)`

---

`my_set = <1, 2, 3, 4, 5>`

---

`my_set = [1, 2, 3, 4, 5]`

#### --answer--

`my_set = {1, 2, 3, 4, 5}`

### --question--

#### --text--

Which of the following functions is used to create an empty set?

#### --distractors--

`create_set()`

---

`empty_set()`

---

`sets()`

#### --answer--

`set()`

### --question--

#### --text--

What will be output to the terminal?

```py
my_set = {1, 2, 3, 4, 5, 6}
my_set.add(5)

print(my_set)
```

#### --distractors--

`SyntaxError`

---

`RangeError`

---

`{1, 2, 3, 4, 5, 5, 6}`

#### --answer--

`{1, 2, 3, 4, 5, 6}`

### --question--

#### --text--

Which of the following methods checks if a set is a subset? 

#### --distractors--

`issub()`

---

`isset()`

---

`subset()`

#### --answer--

`issubset()`

### --question--

#### --text--

Which of the following methods checks if two sets are disjoint?

#### --distractors--

`joint()`

---

`isjoint()`

---

`disjoint()`

#### --answer--

`isdisjoint()`

### --question--

#### --text--

What does the symmetric difference operator(`^`) do?

#### --distractors--

It returns a new set with only the elements that the sets have in common.

---

It finds the difference between the sets and updates the first set with that result.

---

It returns a new set with the elements of the first set that are not in the other set. 

#### --answer--

It returns a new set with the elements that are either in the first or the second set, but not both.

### --question--

#### --text--

Which of the following built-in modules is used for generating random numbers?

#### --distractors--

`set_random`

---

`get_random`

---

`rand`

#### --answer--

`random`

### --question--

#### --text--

Which of the following modules is used for working with regular expressions?

#### --distractors--

`regex`

---

`reg`

---

`r`

#### --answer--

`re`



# SOURCE https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/839daddf08cf132115da8ebf55be1892a26b60d8/curriculum/challenges/english/blocks/quiz-error-handling/67f412eaf6e68343aab8ea81.md

---
id: 67f412eaf6e68343aab8ea81
title: Error Handling Quiz
challengeType: 8
dashedName: quiz-error-handling
---

# --description--

To pass the quiz, you must correctly answer at least 9 of the 10 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

What will be the output of this code?

  ```py
try:
    print(22 / 0)
except ZeroDivisionError:
    print("You can't divide by zero!")
  ```

#### --distractors--

`22`

---

`10`

---

`0`

#### --answer--

`You can't divide by zero!`

### --question--

#### --text--

Which module of the Python standard library lets you debug your code in an interactive way?

#### --distractors--

ABC

---

numpy

---

debugpy

#### --answer--

pdb

### --question--

#### --text--

Which exception does Python raise when you try to use a method or attribute that does not exist for that type?

#### --distractors--

`SyntaxError`

---

`AttributeBug`

---

`SyntaxBug`

#### --answer--

`AttributeError`

### --question--

#### --text--

Which Python statement can you insert around various points in your code so you can see the values of variables while debugging?

#### --distractors--

`len()`

---

`console()`

---

`log()`

#### --answer--

`print()`

### --question--

#### --text--

Which statement lets you manually raise an exception? 

#### --distractors--

`if`

---

`throw`

---

`from`

#### --answer--

`raise`

### --question--

#### --text--

Which error will the code `print("Hello world"` raise in your Python code?

#### --distractors--

It would not raise any error.

---

`ValueError`

---

`NameError`

#### --answer--

`SyntaxError`

### --question--

#### --text--

What does `try...except` let you do in Python?

#### --distractors--

It provides a way to test your code interactively.

---

It lets you write mathematical expressions.

---

It speeds up testing.

#### --answer--

It lets you execute a block of code that might raise an exception.

### --question--

#### --text--

Which object lets you access the exception itself for better debugging and direct printing of the error message?

#### --distractors--

Debugger Object

---

Traceback Object

---

BugFinder Object

#### --answer--

Exception Object

### --question--

#### --text--

Which of the following optional clauses can be added to a `try...except` statement?

#### --distractors--

`if` and `else`

---

`elif` and `if`

---

`else` and `elif`

#### --answer--

`else` and `finally`

### --question--

#### --text--

Which block of a `try` statement runs whether an error occurs or not?

#### --distractors--

`else`

---

`except`

---

`try`

#### --answer--

`finally`


# SOURCE https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/839daddf08cf132115da8ebf55be1892a26b60d8/curriculum/challenges/english/blocks/quiz-classes-and-objects/67f413038f0f8c452c660dc5.md

---
id: 67f413038f0f8c452c660dc5
title: Classes and Objects Quiz
challengeType: 8
dashedName: quiz-classes-and-objects
---

# --description--

To pass the quiz, you must correctly answer at least 9 of the 10 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

Which of the following is the correct way to define a class?

#### --distractors--

```py
def className(class):
    pass
```

---

```py
self className:
    pass
```

---

```py
class className
    pass
```

#### --answer--

```py
class className:
    pass
```

### --question--

#### --text--

What is the purpose of the special method `__init__`?

#### --distractors--

It sets a shortcut to create an instance of a class.

---

It prevents an object from having duplicate attributes.

---

It sets the value of `self` to the current object.

#### --answer--

It initializes objects' attributes upon instantiation.

### --question--

#### --text--

What is the difference between an instance attribute and a class attribute?

#### --distractors--

Instance attributes define methods that can be accessed from an object; class attributes define methods that can be accessed from a class.

---

Instance attributes are set within the `__init__` method; class attributes are set within the `__class__` method.

---

Instance attributes can be directly accessed from the class; class attributes can only be accessed from an actual instance of the class.

#### --answer--

Instance attributes belong to a specific object; class attributes belong to a class.

### --question--

#### --text--

Which of the following is the correct way to call the `spam` method from the `menu` object?

#### --distractors--

`spam.menu()`

---

`menu[spam]`

---

`spam.menu`

#### --answer--

`menu.spam()`

### --question--

#### --text--

Which of the following special methods is called under the hood when an object is printed to the console?

#### --distractors--

`__print__`

---

`__log__`

---

`__string__`

#### --answer--

`__str__`

### --question--

#### --text--

What is the result of the following code?

```py
class Menu:
    dish_of_the_day = "spam"

print(Menu.dish_of_the_day)
```

#### --distractors--

`None`

---

`AttributeError`

---

`SyntaxError`

#### --answer--

`spam`

### --question--

#### --text--

What does the `self` parameter refer to inside a method?

#### --distractors--

It's a reference to the object initializer.

---

It's a reference to the module where the class is defined.

---

It's a reference to the class being used.

#### --answer--

It's a reference to the instance of the class calling the method.

### --question--

#### --text--

Which of the following correctly creates an instance of a class `Person`?

#### --distractors--

`Person.new()`

---

`new Person()`

---

`new Person`

#### --answer--

`Person()`

### --question--

#### --text--

What will be the result of the following code?

```py
class Dog:
    def __init__(name, age):
        self.name = name
        self.age = age

dog = Dog("Pinky", 3)
print(dog.name)
```

#### --distractors--

`Pinky`

---

`3`

---

`AttributeError`

#### --answer--

`TypeError`

### --question--

#### --text--

Which of the following is the correct way to access the `name` attribute of the `dog` object?

#### --distractors--

`dog().name`

---

`dog.name()`

---

`dog.get('name')`

#### --answer--

`dog.name`


# SOURCE https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/839daddf08cf132115da8ebf55be1892a26b60d8/curriculum/challenges/english/blocks/quiz-object-oriented-programming/67f4131db7777346b1b3dc6f.md

---
id: 67f4131db7777346b1b3dc6f
title: Object Oriented Programming Quiz
challengeType: 8
dashedName: quiz-object-oriented-programming
---

# --description--

To pass the quiz, you must correctly answer at least 18 of the 20 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

What serves as the blueprint for creating objects?

#### --distractors--

Functions

---

Variables

---

Loops

#### --answer--

Classes

### --question--

#### --text--

Which module does Python use to implement abstract classes?

#### --distractors--

`Time`

---

`xyz`

---

`Random`

#### --answer--

`abc`

### --question--

#### --text--

What defines the data and behaviors of an object?

#### --distractors--

Functions and classes.

---

Variables and loops.

---

Seeders and databases.

#### --answer--

Attributes and methods.

### --question--

#### --text--

What is single inheritance?

#### --distractors--

A child class inheriting attributes and methods from a single function.

---

A child class inheriting attributes and methods from multiple functions.

---

A child class inheriting attributes and methods from multiple classes.

#### --answer--

A child class inheriting attributes and methods from a single class.

### --question--

#### --text--

Which of the following is NOT one of the key principles of object-oriented programming?

#### --distractors--

Encapsulation

---

Inheritance

---

Abstraction

#### --answer--

Don't repeat yourself (DRY)

### --question--

#### --text--

What is the difference between prefixing attributes and methods with a double underscore and single underscore?

#### --distractors--

Single underscore hides the attribute completely, double underscore makes it readable only inside methods.

---

Single underscore means private, double underscore means protected.

---

Single underscore makes them public, double underscore makes them static.

#### --answer--

Single underscore is just a convention for internal use, double underscore triggers name mangling to prevent accidental attribute and method overriding.

### --question--

#### --text--

Which OOP concept lets you hide complex implementation details and only shows the essential features of an object or system?

#### --distractors--

Inheritance

---

Polymorphism

---

Encapsulation

#### --answer--

Abstraction

### --question--

#### --text--

Which decorator do you use to create a setter?

#### --distractors--

`@<property_name>.creator`

---

`@<method_name>.creater`

---

`@<method_name>.creator`

#### --answer--

`@<property_name>.setter`

### --question--

#### --text--

Which OOP concept lets you hide the internal state of the object behind a set of public methods and attributes that act like doors?

#### --distractors--

Polymorphism

---

Abstraction

---

Single inheritance

#### --answer--

Encapsulation

### --question--

#### --text--

What is a getter?

#### --distractors--

A method that updates or changes the value of an attribute.

---

A method that deletes an attribute from an object.

---

A method that creates a new attribute in an object.

#### --answer--

A method that retrieves or returns the value of an attribute.

### --question--

#### --text--

What is a setter?

#### --distractors--

A method that retrieves the value of an attribute.

---

A method that deletes the value of an attribute.

---

A method that deletes an attribute from an object.

#### --answer--

A method that sets or updates the value of an attribute.

### --question--

#### --text--

What lets you delete a value you set and get with a setter and getter?

#### --distractors--

Remover

---

Eraser

---

Delayer

#### --answer--

Deleter

### --question--

#### --text--

What promotes code reuse, provides clear hierarchies, and allows customization of behavior without rewriting everything?

#### --distractors--

DRY

---

WET

---

Abstraction

#### --answer--

Inheritance

### --question--

#### --text--

Which of these is the correct syntax of inheritance?

#### --distractors--

```py
class Parent:
    pass
class Child(InheritParent):
    pass
```

---

```py
class Parent:
    pass
class Child(Inheriter):
    pass
```

---

```py
class Child:
   pass
class Parent(Parent):
   pass
```

#### --answer--

```py
class Parent:
   pass
class Child(Parent):
   pass
```

### --question--

#### --text--

What connects setters and getters?

#### --distractors--

Methods

---

Functions

---

Classes

#### --answer--

Properties

### --question--

#### --text--

What is the process by which Python internally renames an attribute prefixed with a double underscore by adding an underscore and the class name as a prefix?

#### --distractors--

Name Mingling

---

Polymorphism

---

Abstraction

#### --answer--

Name Mangling

### --question--

#### --text--

Which function lets you invoke a method from a parent inside a child class?

#### --distractors--

`constructor()`

---

`__init__()`

---

`property()`

#### --answer--

`super()`

### --question--

#### --text--

Which of the following statements best describes polymorphism in OOP?

#### --distractors--

It allows a class to have multiple constructors with different attributes and methods.

---

It allows a class to inherit attributes and methods from another class.

---

It allows creating objects with the `class` keyword.

#### --answer--

It allows different classes to use the same method name while performing different actions when called.

### --question--

#### --text--

Why does Python mangle the name of an attribute prefixed with double underscores?

#### --distractors--

To make the attribute completely private and inaccessible from outside the class.

---

To improve performance by storing attributes more efficiently.

---

To automatically convert attributes into read-only properties.

#### --answer--

To prevent accidental attribute and method overriding in subclasses when using inheritance.

### --question--

#### --text--

Why are properties used instead of methods for getters and setters?

#### --distractors--

To make code longer and more explicit.

---

To prevent access to the value entirely.

---
To automatically log every value change.

#### --answer--

To allow direct attribute-like access with dot notation for better readability.


# SOURCE https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/839daddf08cf132115da8ebf55be1892a26b60d8/curriculum/challenges/english/blocks/quiz-data-structures/67f41341453c2247fb2828f7.md

---
id: 67f41341453c2247fb2828f7
title: Data Structures Quiz
challengeType: 8
dashedName: quiz-data-structures
---

# --description--

To pass the quiz, you must correctly answer at least 18 of the 20 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

What does Big O notation describe in algorithm analysis?

#### --distractors--

The exact runtime in seconds for a specific computer.

---

The percentage of code lines executed during a run.

---

How readable the code is to other developers.

#### --answer--

How the time or space grows relative to input size (an upper bound).

### --question--

#### --text--

When starting an algorithmic challenge, what is the best first step?

#### --distractors--

Begin coding immediately to gain momentum.

---

Optimize for performance before you understand the problem.

---

Write unit tests only after finishing the solution.

#### --answer--

Clarify the problem and constraints with examples and edge cases.

### --question--

#### --text--

What is the key difference between dynamic arrays and static arrays?

#### --distractors--

Dynamic arrays store values of different types; static arrays cannot.

---

Static arrays allow duplicate values; dynamic arrays do not.

---

Dynamic arrays are faster than static arrays for every operation.

#### --answer--

Dynamic arrays can grow or shrink by resizing; static arrays have a fixed size.

### --question--

#### --text--

What is the amortized time complexity of appending an element to the end of a dynamic array?

#### --distractors--

`O(n)`

---

`O(log n)`

---

`O(n log n)`

#### --answer--

`O(1)` amortized.

### --question--

#### --text--

Why does accessing the k-th element by index in a singly linked list take `O(n)` time?

#### --distractors--

The list must be resized before any access.

---

The index is hashed and looked up in a table.

---

Nodes are stored contiguously, so shifting is required.

#### --answer--

You must traverse from the head node to the k-th node one by one.

### --question--

#### --text--

Which feature does a doubly linked list have that a singly linked list does not?

#### --distractors--

Random access to any index in `O(1)` time.

---

A built-in array buffer for faster iteration.

---

Automatic maintenance of the list length as a constant.

#### --answer--

Pointers to both next and previous nodes enabling backward traversal.

### --question--

#### --text--

Which of the following best describes a stack?

#### --distractors--

First In, First Out (`FIFO`) with removals at the front.

---

A structure where any element can be removed in `O(1)` time.

---

A circular buffer with constant-time random access.

#### --answer--

Last In, First Out (`LIFO`) with `push` and `pop` at the top.

### --question--

#### --text--

Which operation removes the element at the front of a queue?

#### --distractors--

`push`

---

`pop`

---

`peek`

#### --answer--

`dequeue`

### --question--

#### --text--

What is the typical average-case time complexity to look up a value by key in a hash map?

#### --distractors--

`O(n)` because all keys must be scanned sequentially.

---

`O(log n)` due to binary search within buckets.

---

`O(n log n)` because keys are sorted during insertion.

#### --answer--

`O(1)` on average with a good hash function and low load factor.

### --question--

#### --text--

Which guarantee is provided by a set data structure?

#### --distractors--

Elements are stored in sorted order by default.

---

Duplicate values are allowed and kept together.

---

Elements are indexed by their insertion position.

#### --answer--

It stores only unique elements (no duplicates).

### --question--

#### --text--

In a dynamic array, what is the worst-case time complexity of inserting an element at index i (not at the end)?

#### --distractors--

`O(1)`

---

`O(log n)`

---

`O(1)` amortized

#### --answer--

`O(n)`

### --question--

#### --text--

What is the time complexity of inserting a new node at the head of a singly linked list?

#### --distractors--

`O(n)`

---

`O(log n)`

---

`O(n log n)`

#### --answer--

`O(1)`

### --question--

#### --text--

Which operation is used to remove an element from a stack?

#### --distractors--

`push`

---

`dequeue`

---

Insert at bottom.

#### --answer--

`pop`

### --question--

#### --text--

Which of the following best describes a queue?

#### --distractors--

Last In, First Out (`LIFO`) with removals at the top.

---

Random access to any index in `O(1)` time.

---

Elements are always kept in sorted order automatically.

#### --answer--

First In, First Out (`FIFO`) with `enqueue` at the back and `dequeue` at the front.

### --question--

#### --text--

What is a hash collision in a hash map?

#### --distractors--

When a key maps to multiple distinct values by design.

---

When two identical keys are stored in different buckets.

---

When the map runs out of memory and must be resized.

#### --answer--

When two different keys produce the same hash index.

### --question--

#### --text--

Why do hash maps resize (rehash) as they grow?

#### --distractors--

To sort keys in ascending order for faster iteration.

---

To compress values and reduce memory fragmentation.

---

To avoid triggering the language's garbage collector.

#### --answer--

To keep the load factor low so that average operations remain `O(1)`.

### --question--

#### --text--

Which statement about sets is true?

#### --distractors--

Sets preserve insertion order by definition.

---

Sets allow duplicate elements and keep counts.

---

Set membership tests are `O(n log n)` on average.

#### --answer--

Membership tests are typically `O(1)` on average.

### --question--

#### --text--

Which time complexity grows faster than `O(n log n)` as n becomes large?

#### --distractors--

`O(n)`

---

`O(log n)`

---

`O(1)`

#### --answer--

`O(n^2)`

### --question--

#### --text--

After implementing a brute-force solution, what is a good next step?

#### --distractors--

Micro-optimize constant factors before measuring.

---

Discard tests and rewrite the solution from scratch.

---

Avoid considering edge cases to keep the code simple.

#### --answer--

Analyze its time/space complexity and optimize identified bottlenecks.

### --question--

#### --text--

What does space complexity measure?

#### --distractors--

How many CPU cores a program uses.

---

The length of a program in lines of code.

---

How long a program takes to compile.

#### --answer--

How memory usage grows relative to input size.



# SOURCE https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/839daddf08cf132115da8ebf55be1892a26b60d8/curriculum/challenges/english/blocks/quiz-searching-and-sorting-algorithms/67f4136110dddb491be2e90a.md

---
id: 67f4136110dddb491be2e90a
title: Searching and Sorting Algorithms Quiz
challengeType: 8
dashedName: quiz-searching-and-sorting-algorithms
---

# --description--

To pass the quiz, you must correctly answer at least 9 of the 10 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

Which search algorithm iterates through a list of items, checking each item from the beginning until the target item is found?

#### --distractors--

Merge search

---

Bubble search

---

Binary search

#### --answer--

Linear search

### --question--

#### --text--

Which technique is used to break down a problem into smaller sub-problems?

#### --distractors--

Break-down-and-solve

---

Divide-and-solve

---

Break-down-and-conquer

#### --answer--

Divide-and-conquer

### --question--

#### --text--

What is the space complexity of the linear search algorithm?

#### --distractors--

`O(n)`

---

`O(log n)`

---

`O(n²)`

#### --answer--

`O(1)`

### --question--

#### --text--

Which is more suitable for a larger list of items between binary search and linear search?

#### --distractors--

Both

---

Linear search

---

None

#### --answer--

Binary search

### --question--

#### --text--

What is the space complexity of binary search?

#### --distractors--

`O(log n)`

---

`O(n)`

---

`O(n log n)`

#### --answer--

`O(1)`

### --question--

#### --text--

What does the binary search algorithm return when it finds the target item?

#### --distractors--

The value of the target item.

---

The size of the list searched.

---

A boolean value of the target.

#### --answer--

The index of the target item.

### --question--

#### --text--

What does the linear search algorithm return if it doesn't find the target item?

#### --distractors--

`0`

---

`Null`

---

`Undefined`

#### --answer--

`-1`

### --question--

#### --text--

How does the merge sort algorithm work?

#### --distractors--

It searches for an element by checking each item one by one.

---

It builds a sorted list by repeatedly finding the smallest element.

---

It swaps adjacent elements until the list is sorted.

#### --answer--

It recursively splits the list into smaller items, then merges them in sorted order.

### --question--

#### --text--

What is the condition for a binary search to work?

#### --distractors--

The list must contain only unique values.

---

The list must have an even number of elements.

---

The list must contain no negative numbers.

#### --answer--

The list must be sorted.

### --question--

#### --text--

Which computer science approach is used to implement the merge sort algorithm?

#### --distractors--

Dynamic programming

---

Greedy algorithm

---

Tracing

#### --answer--

Divide-and-conquer 


# SOURCE https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/839daddf08cf132115da8ebf55be1892a26b60d8/curriculum/challenges/english/blocks/quiz-graphs-and-trees/67f4138c34cd9c4ac783ceef.md

---
id: 67f4138c34cd9c4ac783ceef
title: Graphs and Trees Quiz
challengeType: 8
dashedName: quiz-graphs-and-trees
---

# --description--

To pass the quiz, you must correctly answer at least 18 of the 20 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

What is a graph?

#### --distractors--

A linear data structure that follows the Last-In, First-Out principle. 

---

A data structure that stores multiple values of the same type that are contiguous in memory. 

---

A linear data structure that follows the First-In, First-Out principle. 

#### --answer--

A data structure used to represent the connections or relationships between objects or entities.

### --question--

#### --text--

Which of the following is NOT a typical scenario that can be represented using a graph?

#### --distractors--

social networks

---

transportation networks

---

communications networks

#### --answer--

temperature measurement over time

### --question--

#### --text--

Which of the following terms describes an object or entity that is part of the network depicted by a graph?

#### --distractors--

Cookie

---

Endpoint

---

CPU

#### --answer--

Node

### --question--

#### --text--

Which of the following terms describes the connections between nodes in a graph?

#### --distractors--

Gates

---

Connectors

---

Vertices

#### --answer--

Edges

### --question--

#### --text--

What is an undirected graph?

#### --distractors--

A graph where the nodes are undirected but the edges are directed.

---

A graph where the edges have a specific direction.

---

A graph where the nodes and edges connect at the midpoint.

#### --answer--

A graph where the edges don't have a specific direction.

### --question--

#### --text--

Which of the following refers to a graph in which each node is associated with a label or identifier in addition to its data?

#### --distractors--

Version labeled graph

---

Virtual labeled graph

---

Vertical labeled graph

#### --answer--

Vertex labeled graph

### --question--

#### --text--

Which of the following refers to a directed graph with at least one cycle?

#### --distractors--

Cycling graph

---

Circulating graph

---

Circular graph

#### --answer--

Cyclic graph

### --question--

#### --text--

What is a weighted graph?

#### --distractors--

A specific type of edge labeled graph that shows only the direction of connections between nodes.

---

A specific type of edge labeled graph that assigns categories instead of numerical values to edges.

---

A specific type of edge labeled graph that treats all edge weights as equal regardless of label.

#### --answer--

A specific type of edge labeled graph in which the labels on the edges represent values that can be compared and used to perform arithmetic operations.

### --question--

#### --text--

What is a directed acyclic graph?

#### --distractors--

A directed graph with one cycle.

---

A directed graph with three cycles.

---

A directed graph with two cycles.

#### --answer--

A directed graph with no cycles.

### --question--

#### --text--

Which of the following refers to a graph with two or more groups of nodes that are not connected by any edges?

#### --distractors--

Disconnect graph

---

Disconnecting graph

---

Disconnection graph

#### --answer--

Disconnected graph

### --question--

#### --text--

What is the Breadth-first search algorithm?

#### --distractors--

An algorithm that visits two nodes in one direction before moving another direction in the graph.

---

An algorithm that visits all nodes in one direction before moving another direction in the graph.

---

An algorithm that visits four nodes at a time before moving to the next level in the graph.

#### --answer--

An algorithm that visits all neighboring nodes before moving to the next level in the graph.

### --question--

#### --text--

Which of the following algorithms will follow each branch as deep as possible before it backtracks?

#### --distractors--

Data-First Search

---

Dock-First Search

---

Daemon-First Search

#### --answer--

Depth-First Search

### --question--

#### --text--

Which of the following terms represents a two-dimensional list in which the rows and columns represent the graph's vertices?

#### --distractors--

Array matrix

---

Depth matrix

---

Vertex matrix

#### --answer--

Adjacency matrix

### --question--

#### --text--

Which of the following terms represents an array or dictionary that stores all the neighbors of each node?

#### --distractors--

Cyclic list

---

Tuple list

---

Breadth list

#### --answer--

Adjacency list

### --question--

#### --text--

What must be true for a graph to be classified as a tree?

#### --distractors--

It must have at least one loop or cycle.

---

It must have at least two loops or cycles.

---

It must have three loops or cycles.

#### --answer--

It cannot have loops or cycles.

### --question--

#### --text--

Which of the following is a type of tree in which each node can have at most two child nodes?

#### --distractors--

Depth tree

---

Spatial tree

---

Linear tree

#### --answer--

Binary tree

### --question--

#### --text--

What is a Trie?

#### --distractors--

A tree data structure used to store a set of numbers.

---

A tree data structure used to store a set of dictionaries.

---

A tree data structure used to store a set of lists.

#### --answer--

A tree data structure used to store a set of strings.

### --question--

#### --text--

How does the priority queue data structure differ from a regular queue data structure?

#### --distractors--

A priority queue automatically removes duplicates before insertion.

---

A priority queue always processes elements in the order they were added.

---

A priority queue only stores elements of the same data type.

#### --answer--

A priority queue processes elements based on their priority.

### --question--

#### --text--

What are the two types of heaps?

#### --distractors--

Wide-heap and Tall-heap

---

Horizontal-heap and Vertical-heap

---

Breadth-heap and Depth-heap

#### --answer--

Max-heap and Min-heap

### --question--

#### --text--

What are the average and worst case time complexities for inserting and extracting the minimum or maximum value from a heap?

#### --distractors--

`O(n log n)`

---

`O(1)`

---

`O(n)`

#### --answer--

`O(log n)`



# SOURCE https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/839daddf08cf132115da8ebf55be1892a26b60d8/curriculum/challenges/english/blocks/quiz-dynamic-programming/67f413a2abe9894c52e15c6e.md

---
id: 67f413a2abe9894c52e15c6e
title: Dynamic Programming Quiz
challengeType: 8
dashedName: quiz-dynamic-programming
---

# --description--

To pass the quiz, you must correctly answer at least 9 of the 10 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

What are the two essential properties that must be present in a problem for dynamic programming to be an effective solution approach?

#### --distractors--

Fast execution time and minimal memory usage

---

Recursion capability and iterative loops

---

Sequential processing and parallel computation

#### --answer--

Overlapping subproblems and optimal substructure

### --question--

#### --text--

What is the primary difference between the memoization and tabulation approaches in dynamic programming?

#### --distractors--

Memoization uses hash tables while tabulation uses arrays, making it more efficient.

---

Memoization is faster but uses more memory and CPU cycles than tabulation.

---

Memoization can only solve simpler problems than tabulation.

#### --answer--

Memoization is a top-down approach using recursion, while tabulation is a bottom-up approach using iteration.

### --question--

#### --text--

Why do naive recursive solutions to dynamic programming problems typically have exponential time complexity?

#### --distractors--

Because they use exponential amounts of memory to store variables.

---

Because they require sorting data in exponential time.

---

Because they must check all possible permutations of the input.

#### --answer--

Because each recursive call branches multiple times, causing the same subproblems to be recalculated repeatedly.

### --question--

#### --text--

What does optimal substructure mean in the context of dynamic programming?

#### --distractors--

The algorithm must use the most efficient data structure available.

---

The solution must minimize both time and space complexity simultaneously.

---

The problem must have a unique, single optimal solution.

#### --answer--

The optimal solution can be constructed from optimal solutions to its subproblems.

### --question--

#### --text--

When implementing memoization, what happens when a function is called with arguments that have already been computed?

#### --distractors--

The function recalculates the result to ensure accuracy.

---

The function averages the old and new results for better precision.

---

An error is thrown because duplicate calculations are not allowed.

#### --answer--

The cached result is returned immediately without recomputation.

### --question--

#### --text--

What is a key advantage of using tabulation instead of memoization?

#### --distractors--

Tabulation always requires less memory than memoization.

---

Tabulation can solve a broader class of problems.

---

Tabulation is always easier to implement and understand.

#### --answer--

Tabulation avoids recursion overhead and provides predictable sequential execution.

### --question--

#### --text--

In a bottom-up dynamic programming solution, why are base cases initialized first?

#### --distractors--

To allocate memory for the data structure efficiently.

---

To prevent infinite loops in the algorithm.

---

To improve the time complexity of the algorithm.

#### --answer--

To provide foundational values upon which all larger subproblems are built.

### --question--

#### --text--

How does dynamic programming transform the time complexity of problems that exhibit overlapping subproblems?

#### --distractors--

From polynomial to logarithmic by dividing the problem efficiently.

---

From quadratic to linear by optimizing loop structures.

---

From linear to constant by using hash tables.

#### --answer--

From exponential to polynomial by storing and reusing subproblem solutions.

### --question--

#### --text--

What trade-off does dynamic programming typically make to achieve better time complexity?

#### --distractors--

It sacrifices code readability for faster execution.

---

It requires more complex algorithms that are harder to maintain.

---

It limits the size of problems that can be solved.

#### --answer--

It uses additional space to store intermediate results.

### --question--

#### --text--

In which scenario would dynamic programming NOT be the appropriate algorithmic approach?

#### --distractors--

When the problem requires finding an optimal solution.

---

When the problem can be broken into smaller subproblems.

---

When space complexity must be minimized.

#### --answer--

When subproblems are independent and don't overlap.
