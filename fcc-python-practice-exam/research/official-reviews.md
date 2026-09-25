# SOURCE https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/curriculum/challenges/english/blocks/review-python-basics/67f39b40deaec81a3e40e0c5.md

---
id: 67f39b40deaec81a3e40e0c5
title: Python Basics Review
challengeType: 31
dashedName: review-python-basics
---

# --description--

## What is Python?

- **Introduction**: Python is a general-purpose programming language known for its simplicity and ease of use. Python is used in many fields like data science and machine learning, web development, scripting and automation, embedded systems and IoT, and much more.
- **Common Use Cases**: Python is used in data science, machine learning, web development, cybersecurity, automation and microcomputers like the Raspberry Pi and MicroPython-compatible boards.

## Variables

- **Declaring Variables**: To declare a variable, you start with the variable name followed by the assignment operator (`=`) and then the value. This can be a number, string, boolean, etc. Here are some examples:

```py
name = 'John Doe'
age = 25
```

- **Naming Conventions for Variables**: Here are the naming conventions you should use for variables:

  - Variable names can only start with a letter or an underscore (_), not a number.
  - Variable names can only contain alphanumeric characters (a-z, A-Z, 0-9) and underscores (_).
  - Variable names are case-sensitive — `age`, `Age`, and `AGE` are all considered unique.
  - Variable names cannot be one of Python’s reserved keywords such as `if`, `class`, or `def`.
  - Variables names with multiple words are separated by underscores. Ex. `snake_case`.


## Comments

- **Single Line Comments**: These types of comments should be used for short notes you wish to leave in your code.

```py
# This is a single line comment
```

- **Multi-line Strings**: These types of strings can be used to leave larger notes or to comment out sections of code.

```py
"""
This is a multi-line string.
Here is some code commented out.

name = 'John Doe'
age = 25
"""
```

- **`print()` Function**: To print data to the console, you can use the `print()` function like this:

```py
print('Hello world!') # Hello world!
```

## Common Data Types in Python

- **Introduction**: Python is a dynamically-typed language like JavaScript, meaning you don't need to explicitly declare types for variables. The language knows what the type of a variable is based on what you assign to the variable. 
- **Integer**: A whole number without decimals:

```py
my_integer_var = 10
print('Integer:', my_integer_var) # Integer: 10
```

- **Float**: A number with decimals:

```py
my_float_var = 4.50
print('Float:', my_float_var) # Float: 4.5
```

- **String**: A sequence of characters wrapped in quotes:

```py
my_string_var = 'hello'
print('String:', my_string_var) # String: hello
```

- **Boolean**: A value representing either `True` or `False`:

```py
my_boolean_var = True
print('Boolean:', my_boolean_var) # Boolean: True
```

- **Set**: An unordered collection of unique elements:

```py
my_set_var = {7, 5, 8}
print('Set:', my_set_var) # Set: {7, 5, 8}
```

- **Dictionary**: A collection of key-value pairs, enclosed in curly braces:

```py
my_dictionary_var = {"name": "Alice", "age": 25}
print('Dictionary:', my_dictionary_var) # Dictionary: {'name': 'Alice', 'age': 25}
```

- **Tuple**: An immutable ordered collection, enclosed in parentheses:

```py
my_tuple_var = (7, 5, 8)
print('Tuple:', my_tuple_var) # Tuple: (7, 5, 8)
```

- **Range**: A sequence of numbers, often used in loops:

```py
my_range_var = range(5)
print(my_range_var) # range(0, 5)
```

- **List**: An ordered collection of elements that supports different data types:

```py
my_list = [22, 'Hello world', 3.14, True]
print(my_list) # [22, 'Hello world', 3.14, True]
```

- **None**: A special value that represents the absence of a value:

```py
my_none_var = None
print('None:', my_none_var) # None: None
```

## Immutable and Mutable Types

- **Immutable Types**: These types cannot change once declared, although you can point their variables at something new, which is called reassignment. They include integer, float, complex, boolean, string, tuple, range, and `None`.
- **Mutable Types**: These types can change once declared. You can add, remove, or update their items. They include collection types such as list, set, and dictionary.
- **`type()` Function**: To see the type for a variable, you can use the `type()` function like this:

```py
greeting = 'Hello there!'
age = 21

print(type(greeting)) # <class 'str'>
print(type(age)) # <class 'int'>
```

- **`isinstance()` Function**: This is used to check if a variable matches a specific data type:

```py
greeting = 'Hello world'
name = 'John Doe'

print(isinstance(greeting, str)) # True
print(isinstance(name, int)) # False
```

## Working with Strings

- **Definition**: As you recall from JavaScript, strings are immutable which means you can not change them after they have been created. In Python, you can use either single or double quotes. It is recommended to choose a rule and stick with it:

```py
developer = 'Jessica'
city = "Los Angeles"
```

- **Accessing Characters from Strings**: You can access characters from strings by using bracket notation like this:

```py
my_str = 'Hello world'

print(my_str[0])  # H
print(my_str[6])  # w

print(my_str[-1])  # d
print(my_str[-2]) # l
```

- **Escaping Strings**: You can use a backslash (`\`) if your string contains quotes like this:

```py
msg = 'It\'s a sunny day'
quote = "She said, \"Hello!\""
```

- **String Concatenation**: To concatenate strings, you can use the `+` operator like this:

```py
developer = 'Jessica'
print('My name is ' + developer + '.') # My name is Jessica.
```

Another way to concatenate strings is by using the `+=` operator. This is used to perform concatenation and assignment in the same step like this:

```py
greeting = 'My name is '
developer = 'Jessica.'

greeting += developer
print(greeting) # My name is Jessica.
```

- **`f-strings`**: This is short for formatted string literals. It allows you to handle interpolation and also do some concatenation with a compact and readable syntax:

```py
developer = 'Jessica'
greeting = f'My name is {developer}.'
print(greeting) # My name is Jessica.
```

- **String Slicing**: This is when you can extract portions of a string. Here is the basic syntax:

```py
str[start:stop:step]
```

The start position represents the index where the extraction should begin. The stop position is where the slice should end. This position is non inclusive. The step position represents the interval to increment for the slicing. Here are some examples:

```py
message = 'Python is fun!'

print(message[0:6])  # Python
print(message[7:])  # is fun!
print(message[::2])  # Pto sfn
```

- **Getting the Length of a String**: The `len()` function is used to return the number of the characters in the string:

```py
developer = 'Jessica'

print(len(developer)) # 7
```

## Working with the `in` operator

- **`in` Operator**: This returns a boolean that specifies whether the character or characters exist in the string or not:

```py
my_str = 'Hello world'

print('Hello' in my_str)  # True
print('hey' in my_str)    # False
print('hi' in my_str)    # False
print('e' in my_str)  # True
print('f' in my_str)  # False
```

## Common String Methods

- **`str.upper()`**: This returns a new string with all characters converted to uppercase:

```py
developer = 'Jessica'

print(developer.upper()) # JESSICA
```

- **`str.lower()`**: This returns a new string with all characters converted to lowercase:

```py
developer = 'Jessica'

print(developer.lower()) # jessica
```

- **`str.strip()`**: This returns a copy of the string with specified leading and trailing characters removed (if no argument is passed to the method, it removes leading and trailing whitespace).

```py
greeting = '  hello world  '

trimmed_my_str = greeting.strip()
print(trimmed_my_str)  # 'hello world'
```

- **`replace()`**: This returns a new string with all occurrences of the old string replaced by a new one.

```py
greeting = 'hello world'

replaced_my_str = greeting.replace('hello', 'hi')
print(replaced_my_str)  # 'hi world'
```

- **`split()`**: This is used to split a string into a list using a specified separator. A separator is a string specifying where the split should happen.

```py
dashed_name = 'example-dashed-name'

split_words = dashed_name.split('-')
print(split_words)  # ['example', 'dashed', 'name']
```

- **`join()`**: This is used to join elements of an iterable into a string with a separator. An iterable is a collection of elements that can be looped over like a list, string or a tuple. 

```py
example_list = ['example', 'dashed', 'name']

joined_str = ' '.join(example_list)
print(joined_str)  # example dashed name
```

- **`str.startswith(prefix)`**: This returns a boolean indicating if a string starts with the specified prefix:

```py
developer = 'Naomi'

result = developer.startswith('N')
print(result)  # True
```

- **`str.endswith(suffix)`**: This returns a boolean indicating if a string ends with the specified suffix:

```py
developer = 'Naomi'

result = developer.endswith('N')
print(result)  # False
```

- **`str.find()`**: This returns the index for the first occurrence of a substring. If one is not found, then `-1` is returned:

```py
developer = 'Naomi'

result = developer.find('N')
print(result)  # 0

city = 'Los Angeles'
print(city.find('New')) # -1
```

- **`str.count(substring)`**: This counts how many times a substring appears in a string:

```py
city = 'Los Angeles'
print(city.count('e')) # 2
```

- **`str.capitalize()`**: This returns a new string with the first character capitalized and the other characters lowercased:

```py
dessert = 'chocolate cake'
print(dessert.capitalize()) # Chocolate cake
```

- **`str.isupper()`**: This returns `True` if all letters in the string are uppercase and `False` if otherwise:

```py
dessert = 'chocolate cake'
print(dessert.isupper()) # False
```

- **`str.islower()`**: This returns `True` if all letters in the string are lowercase and `False` if otherwise:

```py
dessert = 'chocolate cake'
print(dessert.islower()) # True
```

- **`str.title()`**: This returns a new string with the first letter of each word capitalized:

```py
city = 'los angeles'
print(city.title()) # Los Angeles
```

- **`str.maketrans()`**: This method is used to create a table of 1 to 1 character mappings for translation. It is often used with the `translate()` method which applies that table to a string and return the translated result.

```py
trans_table = str.maketrans('abc', '123')
print(trans_table) # {97: 49, 98: 50, 99: 51}

result = 'abcabc'.translate(trans_table)
print(result)  # 123123
```

## Common Operations used with Integers and Floats

- **Basic Math Operations**: In Python, you can do basic math operations with integers and floats including addition, subtraction, multiplication and division:

```py
int_1 = 56
int_2 = 12
float_1 = 5.4
float_2 = 12.0

# Addition

print('Integer Addition:', int_1 + int_2) # Integer Addition: 68
print('Float Addition:', float_1 + float_2) # Float Addition: 17.4

# Subtraction

print('Int Subtraction:', int_1 - int_2) # Int Subtraction: 44
print('Float Subtraction:',  float_2 - float_1) # Float Subtraction: 6.6

# Multiplication

print('Int Multiplication:', int_1 * int_2) # Int Multiplication: 672
print('Float Multiplication:', float_2 * float_1) # Float Multiplication: 64.80000000000001

# Division

print('Division:', int_1 / int_2) # Division: 4.666666666666667
print('Float Division:', float_2 / float_1) # Float Division: 2.222222222222222
```

When you add a float and an integer, the result will be converted to a float like this:

```py
int_1 = 56
float_1 = 5.4

print(int_1 + float_1) # 61.4
```

- **Modulo Operator (`%`)**: This returns the remainder when a number is divided by another number:

```py
int_1 = 56
int_2 = 12

print(int_1 % int_2) # 8
```

- **Floor Division (`//`)**: This operator is used to divide two numbers and round down the result to the nearest whole number:

```py
int_1 = 56
int_2 = 12

print(int_1 // int_2) # 4
```

- **Exponentiation Operator (`**`)**: This operator is used to raise a number to the power of another:

```py
int_1 = 4
int_2 = 2

print(int_1 ** int_2) # 16
```

- **`float()` Function**: You can use this function to convert an integer to float.

```py
num = 4

print(float(num)) # 4.0
```

- **`int()` Function**: You can use this function to convert an float to an integer.

```py
num = 4.0

print(int(num)) # 4
```

- **`round()` Function**: This is used to round a number to the nearest whole integer:

```py
num_1 = 3.4
num_2 = 7.7

print(round(num_1)) # 3
print(round(num_2)) # 8
```

- **`abs()` Function**: This is used to return the absolute value of a number:

```py
num = -13

print(abs(num)) # 13
```

- **`pow()` Function**: This is used to raise a number to the power of another:

```py
result = pow(2, 3) 
print(result)  # 8
```

## Augmented Assignments

- **Definition**: Augmented assignment combines a binary operation with an assignment in one step. It takes a variable, applies an operation to it with another value, and stores the result back into the same variable.

```py
# Addition assignment 
my_var = 10
my_var += 5

print(my_var) # 15

# Subtraction assignment
count = 14
count -= 3

print(count) # 11

# Multiplication assignment 
product = 65
product *= 7

print(product) # 455

# Division assignment 
price = 100
price /= 4

print(price) # 25.0

# Floor Division assignment 
total_pages = 23
total_pages //= 5

print(total_pages) # 4

# Modulo assignment 
bits = 35
bits %= 2

print(bits) # 1

# Exponentiation assignment 
power = 2
power **= 3

print(power) # 8
```

There are other augmented assignment operators too, like those for bitwise operators. They include `&=`, `^=`, `>>=`, and `<<=`.

## Working with Functions

- **Definition**: Functions are reusable pieces of code that take inputs (arguments) and returns an output. To call a function, you need to reference the function name followed by a set of parenthesis:

```py
# Defining a function

def get_sum(num_1, num_2):
    return num_1 + num_2

result = get_sum(3, 4) # function call
print(result) # 7
```

If a function does not explicitly return a value, then the default return value is `None`:

```py
def greet():
    print('hello') 

result = greet() # hello
print(result) # None
```

You can also supply default values to parameters like this:

```py
def get_sum(num_1, num_2=2):
    return num_1 + num_2

result = get_sum(3) 
print(result) # 5
```

If you call the function without the correct number of arguments, you will get a `TypeError`:

```py
def calculate_sum(a, b):
    print(a + b)

calculate_sum()

# TypeError: calculate_sum() missing 2 required positional arguments: 'a' and 'b'
```

## Common Built-in Functions

- **`input()` Function**: This is used to prompt the user for some input:

```py
name = input('What is your name?') # User types 'Kolade' and presses Enter  
print('Hello', name) # Hello Kolade
```

- **`int()` Function**: This is used to convert a number, boolean, or a numeric string into an integer:

```py
print(int(3.14)) # 3
print(int('42')) # 42
print(int(True)) # 1
print(int(False)) # 0 
```

## Scope in Python

- **Local Scope**: This is when a variable declared inside a function or class can only be accessed within that function or class.

```py
def my_func():
    num = 10
    print(num)
```

- **Enclosing Scope**: This is when a function that's nested inside another function can access the variables of the function it's nested within.

```py
def outer_func():
    msg = 'Hello there!'
    
    def inner_func():
        print(msg)
    inner_func()

print(outer_func()) # Hello there!
```

- **Global Scope**: This refers to variables that are declared outside any functions or classes which can be accessed from anywhere in the program.

```py
tax = 0.70 

def get_total(subtotal):
    total = subtotal + (subtotal * tax)
    return total

print(get_total(100))  # 170.0
```

- **Built-in Scope**: Reserved names in Python for predefined functions, modules, keywords, and objects.

```py
print(str(45)) # '45'
print(type(3.14)) # <class 'float'>
print(isinstance(3, str)) # False
```

## Comparison Operators

- **Equal (`==`)**: Checks if two values are equal:

```py
print(3 == 4) # False
```

- **Not equal (`!=`)**: Checks if two values are not equal:

```py
print(3 != 4) # True
```

- **Strictly greater than (`>`)**: Checks if one value is greater than another:

```py
print(3 > 4) # False
```

- **Strictly less than (`<`)**: Checks if one value is less than another:

```py
print(3 < 4) # True
```

- **Greater than or equal(`>=`)**: Checks if one value is greater than or equal to another:

```py
print(3 >= 4) # False
```

- **Less than or equal(`<=`)**: Checks if one value is less than or equal to another:

```py
print(3 <= 4) # True
```

## Working with `if`, `elif` and `else` Statements

- **`if` Statements**: These are conditions used to determine if something is true or not. If the condition evaluates to `True`, then that block of code will run.

```py
age = 18

if age >= 18:
    print('You are an adult') # You are an adult
```

- **`elif` Clause**: These are conditions that come after an `if` statement. An `elif` clause runs only if all previous conditions evaluate to `False` and its own condition evaluates to `True`.

```py
age = 16

if age >= 18:
    print('You are an adult')
elif age >= 13:
    print('You are a teenager')  # You are a teenager
```

- **`else` Clause**: This will run if no other conditions evaluate to `True`.

```py
age = 12

if age >= 18:
    print('You are an adult')
elif age >= 13:
    print('You are a teenager')
else:
    print('You are a child')  # You are a child
```

You can also use nested `if` statements like this:

```py
is_citizen = True
age = 25

if is_citizen:
    if age >= 18:
        print('You are eligible to vote') # You are eligible to vote
else:
    print('You are not eligible to vote')
```

## Truthy and Falsy Values

- **Definition**: In Python, every value has an inherent boolean value, or a built-in sense of whether it should be treated as `True` or `False` in a logical context. Many values are considered truthy, that is, they evaluate to `True` in a logical context. Others are falsy, meaning they evaluate to `False`. Here are some examples of falsy values:

```md
None
False
Integer 0
Float 0.0
Empty strings ''
```

Other values like non-zero numbers, and non-empty strings are truthy.

## Working with the `bool()` Function

- **Definition**: If you want to check whether a value is truthy or falsy, you can use the built-in `bool()` function. It explicitly converts a value to its boolean equivalent and returns `True` for truthy values and `False` for falsy values. Here are a few examples:

```py
print(bool(False)) # False
print(bool(0))  # False
print(bool('')) # False

print(bool(True)) # True
print(bool(1)) # True
print(bool('Hello')) # True
```

## Boolean Operators and Short-circuiting 

- **Definition**: These are special operators that allow you to combine multiple expressions to create more complex decision-making logic in your code. There are three Boolean operators in Python: `and`, `or`, and `not`.
- **`and` Operator**: This operator takes two operands and returns the first operand if it is falsy, otherwise, it returns the second operand. Both operands must be truthy for an expression to result in a truthy value.

```py
is_citizen = True
age = 25

print(is_citizen and age) # 25
```

You can also use the `and` operator in conditionals like this:

```py
is_citizen = True
age = 25

if is_citizen and age >= 18:
    print('You are eligible to vote') # You are eligible to vote
else:
    print('You are not eligible to vote')
```

- **`or` Operator**: This operator returns the first operand if it is truthy, otherwise, it

... [OUTPUT TRUNCATED - 146,510 chars omitted out of 196,435 total] ...

:
        return self.pages

    def __str__(self):
        return f"'{self.title}' has {self.pages} pages"

    def __eq__(self, other):
        return self.pages == other.pages

book1 = Book('Built Wealth Like a Boss', 420)
print(len(book1))        # 420
print(str(book1))        # 'Built Wealth Like a Boss' has 420 pages
```

- **Calling dunder methods indirectly**: You don't need to call dunder methods directly. Instead, Python automatically calls them when certain actions happen. These operations include:

  - **arithmetic operations like addition, subtraction, multiplication, division, and others**. `__add__()` is called for addition, `__sub__()` for subtraction, `__mul__()` for multiplication, and `__truediv__()` for division.
        
  - **string operations like concatenation, repetition, formatting, and conversion to text**. `__add__()` is called for concatenation, `__mul__()` for repetition, `__format__()` for formatting, `__str__()` and `__repr__()` for text conversion, and so on.
        
  - **comparison operations like equality, less-than, greater-than, and others**. `__eq__()` is called for equality checks, `__lt__()` for less-than, `__gt__()` for greater-than, and so on.
        
  - **iteration operations like making an object iterable and advancing through items**. `__iter__()` is called to return an iterator and  `__next__()` to fetch the next item.

## Real World Example: Shopping Cart

- **Cart Class with Dunder Methods**: Allows adding, removing, iterating, and checking contents with built-in behavior.

```python
class Cart:
    def __init__(self):
        self.items = []

    def add(self, item):
        self.items.append(item)

    def remove(self, item):
        if item in self.items:
            self.items.remove(item)
        else:
            print(f'{item} is not in cart')

    def list_items(self):
        return self.items

    def __len__(self):
        return len(self.items)

    def __getitem__(self, index):
        return self.items[index]

    def __contains__(self, item):
        return item in self.items

    def __iter__(self):
        return iter(self.items)

cart = Cart()
cart.add('Laptop')
print(len(cart))        # 1
print('Laptop' in cart) # True
```

## What is Object-Oriented Programming?

- **Object-oriented programming**: A programming style in which developers treat everything in their code like a real-world object. It is popularly called OOP. The four key principles that help you organize and manage code effectively are **encapsulation**, **inheritance**, **polymorphism**, and **abstraction**
- **Classes**: The blueprint for creating objects. Every single object created from a class has attributes that define data and methods that determine the behaviors of the object.

## What is Encapsulation?

- **Encapsulation**: The bundling of the attributes and methods of an object into a single unit. It lets you hide the internal state of the object behind a simple set of public methods and attributes that act like doors. Behind those doors are private attributes and methods that control how the data changes and who can see it.
- **Example of Encapsulation**: If you want to track a wallet balance, you will allow deposit and withdrawal, but you won't want anyone to tamper with the wallet balance itself:

```py
class Wallet:
   def __init__(self, balance):
       self.__balance = balance # Private attribute

   def deposit(self, amount):
       if amount > 0:
           self.__balance += amount # Add to the balance safely

   def withdraw(self, amount):
       if 0 < amount <= self.__balance:
           self.__balance -= amount # Remove from the balance safely

account = Wallet(500)
print(account.__balance) # AttributeError: 'Wallet' object has no attribute '__balance'
```

- **Difference Between Prefixing Attributes with Single and Double Underscore**: Prefixing attributes and methods with a single underscore means they are meant for internal use. This is a convention, and it doesn't enforce accessing attributes from the outside. Prefixing attributes and methods with a double underscore effectively prevents them from being accessed from outside of their class.

## What Are Getters and Setters?

- **Getters and Setters**: Methods that let you control how the attributes of a class are accessed and modified. You retrieve values with getters and you set values with setters.
- **Properties**: They connect getters and setters, and allow access to data. They run extra logic behind the scenes when you get, set, or delete values.
- **Why Properties Instead of Methods**: Properties are used instead of methods for better readability and cleaner code. They let you access values with dot notation, like regular attributes, without parentheses.
- **Creating a Getter**: To create a getter, you use the `@property` decorator. Here's a getter that gets the radius of a circle:

```py
class Circle:
    def __init__(self, radius):
        self.radius = radius # Calling the setter

    @property
    def radius(self): # A getter to get the radius
        return self._radius
  
    @property
    def area(self):  # A getter to calculate area
        return 3.14 * (self._radius ** 2)

my_circle = Circle(3)

print(my_circle.radius) # 3
print(my_circle.area) # 28.26
```

Using self.radius inside `__init__()` ensures the setter runs during object creation, so invalid radius values are caught immediately.

- **Creating a Setter**: To create the setter that will set the radius, you have to define another method with the same name and use `@<property_name>.setter` above it:

```py
class Circle:
    def __init__(self, radius):
        self.radius = radius # Calling the setter

    @property
    def radius(self):  # A getter to get the radius
        return self._radius

    @radius.setter
    def radius(self, value):  # A setter to set the radius
        if value <= 0:
            raise ValueError('Radius must be positive')
        self._radius = value

my_circle = Circle(3)
print('Initial radius:', my_circle.radius) # Initial radius: 3

my_circle.radius = 8
print('After modifying the radius:', my_circle.radius) # After modifying the radius: 8
```

- **How Python Handles Getters and Setters**: Once you define getters and setters, Python automatically calls them under the hood whenever you use normal attribute syntax this way:

```py
my_circle.radius # This will call the getter
my_circle.radius = 4 # This will call the setter
```

Inside the setter, you should not assign to the property name itself because that will cause a `RecursionError`.

- **Deleter**: After setting and getting a value with setter and getter, you can control how it is deleted with a `deleter`. A deleter runs custom logic when you use the `del` statement on a property. To create a deleter, you use the `@<property_name>.deleter` decorator.

```py
  # Deleter
    @radius.deleter
    def radius(self):
        print("Deleting radius...")
        del self._radius
```

## What Is Inheritance and How Does It Promote Code Reuse?

- **Inheritance**: The process by which a child class uses the attributes and methods of a parent class. Inheritance promotes code reuse, provides clear hierarchies, and customizes behavior without rewriting everything. To implement inheritance, a child class takes in the name of a parent class:

```py
class Parent:
    # Parent attributes and methods

class Child(Parent):
    # Child inherits, extends, and/or overrides where necessary
```

- **Single and Multiple Inheritance**: When a child class inherits properties and methods from a single parent, as you can see above, the process is called **single inheritance**. When a child class inherits properties and methods from more than one parent, that is **multiple inheritance**. Here's the syntax for that:

```py
class Parent:
    # Attributes and methods for Parent

class Child:
    # Attributes and methods for Child

class GrandChild(Parent, Child):
    # GrandChild inherits from both Parent and Child
    # GrandChild can combine or override behavior from each
```

- **`super()` Function**: A function that lets you **call** a method from a parent class, when a class has a different implementation of that method, or it extends the method, without duplicating code.

## What Is Polymorphism and How Does It Promote Code Reuse?

- **Polymorphism**: The OOP principle that lets different classes use the same method name, but each class implements it differently when called. Here's the syntax for it:

```py
class A:
   def action(self): ...

class B:
   def action(self): ...

class C:
   def action(self): ...

Class().method()  # Works for A, B, or C
```

- **Inheritance-based polymorphism**: A parent sets up a method, and each child class twists it to their use.

## What is Name Mangling and How Does it Work?

- **Name Mangling**: A process in which Python internally renames an attribute prefixed with a double underscore by adding an underscore and the class name as a prefix, turning `__attribute` into `_ClassName__attribute`.
- **The Purpose of Name Mangling**: The main purpose of name mangling is to prevent accidental attribute and method overriding when you use inheritance. Here's a code that makes that more understandable:

```py
class Parent:
    def __init__(self):
        self.__data = 'Parent data'

class Child(Parent):
    def __init__(self):
        super().__init__()
        self.__data = 'Child data'

c = Child()
print(c.__dict__) # {'_Parent__data': 'Parent data', '_Child__data': 'Child data'}
```

## What Is Abstraction and How Does It Help Keep Complex Systems Organized?

- **Abstraction**: A programming concept in which complex implementation details of object or system are hidden and only the essential features are shown. In Python and other programming languages, abstraction simplifies complex systems by increasing reusability.
- **Example of Abstraction**: A good example of abstraction in everyday life is a car letting you just use the wheel, pedals, and shifter without knowing how the engine or brakes work.
- **How Python Implements Abstraction**: Python implements abstraction through the `abc` module. The module provides the `ABC` class (abstract base class) and the `@abstractmethod` decorator. An abstract base class (ABC) defines the common methods and properties subclasses must implement. It can't be instantiated.
- **How Abstract Method is Defined**: An abstract method is defined with `@abstractmethod` and must be overridden in subclasses, even if it has a default implementation. The basic syntax of abstraction looks like this:

```py
from abc import ABC, abstractmethod

# Define an abstract base class
class AbstractClass(ABC):
    @abstractmethod
    def abstract_method(self):
        pass

# Concrete subclass that implements the abstract method
class ConcreteClassOne(AbstractClass):
    def abstract_method(self):
        print('Implementation in ConcreteClassOne')

# Another concrete subclass
class ConcreteClassTwo(AbstractClass):
    def abstract_method(self):
        print('Implementation in ConcreteClassTwo')
```

## Algorithms and Big O Notation

- **Algorithms**: A set of unambiguous instructions for solving a problem or carrying out a task. Algorithms must finish in a finite number of steps and each step must be precise and unambiguous.

- **Big O Notation**: Describes the worst-case performance, or growth rate, of an algorithm as the input size increases. It focuses on how resource usage grows with input size, ignoring constant factors and lower-order terms.

### Common Time Complexities

- **O(1) - Constant Time**: Algorithm takes the same amount of time regardless of input size.

```python
def check_even_or_odd(number):
    if number % 2 == 0:
        return 'Even'
    else:
        return 'Odd'
```

- **O(log n) - Logarithmic Time**: Time increases slowly as input grows. Common in algorithms that repeatedly reduce problem size by a fraction (like Binary Search).

- **O(n) - Linear Time**: Running time increases proportionally to input size.

```python
for grade in grades:
    print(grade)
```

- **O(n log n) - Log-Linear Time**: Common time complexity of efficient sorting algorithms like Merge Sort and Quick Sort.

- **O(n²) - Quadratic Time**: Running time increases quadratically. Often seen in nested loops.

```python
for i in range(n):
    for j in range(n):
        print("Hello, World!")
```

### Space Complexity

- **O(1) - Constant Space**: Algorithm uses same amount of memory regardless of input size.
- **O(n) - Linear Space**: Memory usage grows proportionally with input size.
- **O(n²) - Quadratic Space**: Memory usage grows quadratically with input size.

## Problem-Solving Techniques

- **Understanding the Problem**: Read the problem statement multiple times. Identify the input, expected output, and how to transform input to output.

- **Pseudocode**: High-level description of algorithm logic that is language-independent. Uses common written language mixed with programming constructs like `IF`, `ELSE`, `FOR`, `WHILE`.

```md
GET original_string
SET reversed_string = ""
FOR EACH character IN original_string:
  ADD character TO THE BEGINNING OF reversed_string
DISPLAY reversed_string
```

- **Edge Cases**: Specific, valid inputs that occur at the boundaries of what an algorithm should handle. Always consider and test edge cases.

## Arrays

- **Static Arrays**: Have a fixed size determined at initialization. Elements stored in adjacent memory locations. Size cannot be changed during program execution.

- **Dynamic Arrays**: Can grow or shrink automatically during program execution. Handle resizing through automatic copying to larger arrays when needed.

### Python Lists (Dynamic Arrays)

```python
numbers = [3, 4, 5, 6]

# Access elements
numbers[0]  # 3

# Update elements
numbers[2] = 16

# Add elements
numbers.append(7)
numbers.insert(3, 15)  # Insert at specific index

# Remove elements
numbers.pop(2)  # Remove at specific index
numbers.pop()   # Remove last element
```

### Time Complexities for Dynamic Arrays

- **Access**: O(1)
- **Insert at end**: O(1) average, O(n) when resizing needed
- **Insert in middle**: O(n)
- **Delete**: O(n) for middle, O(1) for end

## Stacks

- **Stacks**: Last-In, First-Out (LIFO) data structure. Elements added and removed from the top only.

- **Push Operation**: Adding an element to the top of the stack. Time complexity: O(1).

- **Pop Operation**: Removing an element from the top of the stack. Time complexity: O(1).

```python
# Using Python list as stack
stack = []

# Push operations
stack.append(1)
stack.append(2)
stack.append(3)

# Pop operations
top_element = stack.pop()  # Returns 3
```

## Queues

- **Queues**: First-In, First-Out (FIFO) data structure. Elements added to the back and removed from the front.

- **Enqueue Operation**: Adding an element to the back of the queue. Time complexity: O(1).

- **Dequeue Operation**: Removing an element from the front of the queue. Time complexity: O(1).

```python
from collections import deque

# Using deque for efficient queue operations
queue = deque()

# Enqueue operations
queue.append(1)
queue.append(2)
queue.append(3)

# Dequeue operations
first_element = queue.popleft()  # Returns 1
```

## Linked Lists

- **Linked Lists**: Linear data structure where each node contains data and a reference to the next node. Nodes are connected like a chain.

### Singly Linked Lists

- **Structure**: Each node has data and one reference to the next node.
- **Traversal**: Can only move forward from head to tail.
- **Head Node**: First node in the list, usually the only directly accessible node.
- **Tail Node**: Last node in the list, points to `None`.

### Operations and Time Complexities

- **Insert at beginning**: O(1)
- **Insert at end**: O(n) - must traverse to end
- **Insert in middle**: O(n) - must traverse to position
- **Delete from beginning**: O(1)
- **Delete from end**: O(n) - must traverse to find previous node
- **Delete from middle**: O(n) - must traverse to find node

### Doubly Linked Lists

- **Structure**: Each node has data and two references: next node and previous node.
- **Traversal**: Can move in both directions.
- **Memory**: Requires more memory than singly linked lists due to extra reference.

## Hash Maps and Sets

### Maps and Hash Maps

- **Map (Abstract Data Type)**: Manages collections of key-value pairs. Every key must be unique, but values can be repeated.

- **Hash Map**: Concrete implementation of map ADT using hashing technique. Uses hash function to generate hash values for keys, which determine storage location in underlying array.

### Python Dictionaries (Hash Maps)

```python
# Creating dictionaries
my_dictionary = {
    "A": 1,
    "B": 2, 
    "C": 3
}

# Alternative creation
my_dictionary = dict(A=1, B=2, C=3)

# Access and modify
value = my_dictionary["A"]  # 1
my_dictionary["A"] = 4      # Update value
del my_dictionary["A"]      # Remove key-value pair

# Check membership
"C" in my_dictionary

# Get keys, values, items
my_dictionary.keys()
my_dictionary.values()
my_dictionary.items()
```

### Time Complexities for Hash Maps

- **Average case**: O(1) for insert, get, delete
- **Worst case**: O(n) when many hash collisions occur

### Sets

- **Sets**: Unordered collections of unique elements. No duplicates allowed, no specific order maintained.

- **Immutable Elements Only**: Sets can only contain immutable data types (numbers, strings, tuples) because hash values must remain constant.

```python
# Creating sets
numbers = {1, 2, 3, 4}
empty_set = set()  # Must use set(), not {}

# Add and remove elements
numbers.add(5)
numbers.remove(4)      # Raises KeyError if not found
numbers.discard(4)     # No error if not found

# Set operations
set_a = {1, 2, 3, 4}
set_b = {2, 3, 4, 5, 6}

# Union, intersection, difference, symmetric difference
set_a.union(set_b)                    # or set_a | set_b
set_a.intersection(set_b)             # or set_a & set_b
set_a.difference(set_b)               # or set_a - set_b
set_a.symmetric_difference(set_b)     # or set_a ^ set_b

# Subset and superset checks
set_a.issubset(set_b)
set_a.issuperset(set_b)
set_a.isdisjoint(set_b)

# Membership testing
5 in numbers
```

### Time Complexities for Sets

- **Average case**: O(1) for add, remove, membership testing
- **Worst case**: O(n) due to hash collisions

## Hash Collisions

- **Hash Collision**: Occurs when two different keys produce the same hash value.

- **Collision Resolution Strategies**:
  - **Chaining**: Each array index points to a linked list storing all elements with same hash value
  - **Open Addressing**: Search for next available index using predefined sequence

## When to Use Each Data Structure

- **Lists**: When you need ordered, indexed access and don't know size in advance
- **Stacks**: For LIFO operations (undo functionality, expression evaluation, backtracking)
- **Queues**: For FIFO operations (task scheduling, breadth-first search)
- **Linked Lists**: When frequent insertion/deletion at beginning, unknown size, no random access needed
- **Hash Maps**: For fast key-value lookups, counting occurrences, caching
- **Sets**: For uniqueness checking, mathematical set operations, removing duplicates

## Searching Algorithms

Searching algorithms let you search for a target within a certain list of items.

In computer science, there are two searching algorithms you should know about. They are **linear search** and **binary search** algorithms. It is important to understand the differences between the two algorithms and when to use each one.

### Linear Search

- Linear search iterates through a list of items, checking each item from the beginning until the target item is found.
- If the target item is found, the index where it is located in the list is returned.
- If the target is not found, it returns `-1`, which means **invalid index** in most programming languages.
- Because linear search checks each item until it finds the target, it is not efficient for a large list of items.
- The time complexity of linear search is  `O(n)` because the time it takes to search through the list grows linearly with the size of the list.
- The space complexity of linear search is `O(1)` because it doesn't require any additional space to search through the list.

### Binary Search

- Binary search works by dividing a list of items in half, and checking if the target value is in the middle of the list.
- The condition for binary search to work is that the items in the list must be in ascending order.
- Binary search is a more efficient algorithm for searching through a large list of items because it divides the list of items in half and ignores any half where the target is not found.
- If the target item is found in the middle of the list, the index of the target item is returned.
- If the item is not found, the algorithm checks if the target item is in the left or right half of the list.
- It continues to divide the remaining parts of the list into halves until the target item is found.
- If the target item is finally not found in the list, it returns `-1`
- The time complexity of binary search is `O(log n)` because the time it takes to search through the list grows logarithmically with the size of the list.
- The space complexity of binary search is `O(1)` because it doesn't require any additional space to search through the list.

### How Linear Search Differs from Binary Search 

- Binary search is more suitable for a large list of items compared to linear search.
- The time complexity of linear search is  `O(n)` because the time it takes to search through the list grows linearly with the size of the list.
- The time complexity of binary search is `O(log n)` because the time it takes to search through the list grows logarithmically with the size of the list.

## Sorting Algorithms and Divide-and-Conquer

In computer science, divide-and-conquer is a technique used to break down a problem into smaller sub-problems so they are easier to solve. Recursion is the technique often employed in divide-and-conquer, and divide-and-conquer is a powerful strategy used to implement many efficient sorting algorithms like merge sort.

### Merge Sort

- Merge sort is a sorting algorithm that follows the divide-and-conquer approach.
- It works by recursively dividing a list into smaller sub-lists until each sub-list contains only one element.
- It then repeatedly merges the sub-lists back together in a sorted order.
- The time complexity for merge sort is `O(n log n)` because the list is continuously divided in half `(log n)` and then merged together `(O(n))`.
- The space complexity of merge sort is `O(n)` because it is not an in-place sorting algorithm.

## Graphs Overview

A graph is a set of nodes (vertices) connected by edges (connections). Each node can connect to multiple other nodes, forming a network. The different types of graphs include:

- Directed: edges have a direction (from one node to another), often represented with straight lines and arrows.
- Undirected: edges have no direction, represented with simple lines.
- Vertex: each node is associated with a label or identifier.
- Cyclic: contains cycles (a path that starts and ends at the same node).
- Acyclic (DAG): does not contain cycles.
- Edge labeled: each edge has a label usually drawn next to corresponding edge.
- Weighted: edges have weights (values) associated with them, that can be used to perform arithmetic operations. 
- Disconnected: contains two or more nodes that are not connected by any edges.

Graphs are used in various applications such as maps, networks, recommendation systems, dependency resolution.

## Graph Traversals

This involves visiting all the nodes in a graph. The two main algorithms are:

- **Breadth-First Search (BFS)**
  - Uses a queue.
  - Explores level by level.
  - Finds shortest path in unweighted graphs.

- **Depth-First Search (DFS)**
  - Uses a stack (or recursion).
  - Explores a branch fully before backtracking.
  - Useful for cycle detection and path finding.

## Graph Representations

Graphs can be represented in two main ways:

- **Adjacency List**
  - Each node has a list of its neighbors.
  - Space efficient for sparse graphs.
  - Easy to iterate over neighbors.

- **Adjacency Matrix**
  - A 2D array where rows and columns represent nodes.
  - Space intensive for large graphs.
  - Fast to check if an edge exists between two nodes.

## Trees

A tree is a special type of graph that is acyclic and connected. Key properties include:

- They have no loops or cycles (paths where the start and end nodes are the same).
- They must be connected (every node can be reached from every other node).

### Common types of trees

The most common types of trees are:

- Binary Trees
  - Each node has at most two children, a left and a right child.

- Binary Search Trees (BST)
  - A binary tree in which every left child is less than its parent, and every right child is greater than its parent.  


## Tries

Also known as prefix trees, they are used to store sets of strings, where each node represents a character.

Shared prefixes are stored only once, making them efficient for tasks like autocomplete and spell checking.

Search and insertion operations have a time complexity of O(L), where L is the length of the string.

## Priority Queues

A priority queue is an abstract data type where each element has a priority.

Queues and stacks consider only the order of insertion, while priority queues consider the priority of elements. 

Standard queues follow FIFO (First In First Out) and stacks follow LIFO (Last In First Out). However, in a priority queue, elements with higher priority are served before those with lower priority, regardless of their insertion order.

## Heaps

It's a specialized tree-based data structure with a very specific property called the heap property. 

The heap property determines the relationship between parent and child nodes. There are two types of heaps:

- Max-Heap
  - The value of each parent node is greater than or equal to the values of its children.
  - The largest element is at the root.

- Min-Heap
  - The value of each parent node is less than or equal to the values of its children.
  - The smallest element is at the root.

### Python `heapq` module example

```py
import heapq

# Create empty heap
my_heap = []

# Insert elements
heapq.heappush(my_heap, 9)
heapq.heappush(my_heap, 3)
heapq.heappush(my_heap, 5)
print(my_heap) # [3, 9, 5]

# Remove smallest element
print(heapq.heappop(my_heap))  # 3
print(my_heap) # [5, 9]

# Push + Pop in one step
print(heapq.heappushpop(my_heap, 7)) # 5
print(my_heap) # [7, 9]

# Transform list into heap
nums = [5, 7, 3, 1]
heapq.heapify(nums)
```

### Using Priorities

```py
my_heap = []
heapq.heappush(my_heap, (3, "A"))
heapq.heappush(my_heap, (2, "B"))
heapq.heappush(my_heap, (1, "C"))

# Removes lowest number = highest priority
print(heapq.heappop(my_heap))  # (1, "C")
```

## Introduction to Dynamic Programming

- **Definition**: Dynamic programming is an algorithmic technique that solves complex problems by breaking them down into simpler subproblems and storing the results to avoid redundant calculations. 
- **Overlapping Subproblems**: The same smaller problems appear multiple times when solving the larger problem. Instead of recalculating these subproblems repeatedly, we store their solutions.
- **Optimal Substructure**: The optimal solution to the problem contains optimal solutions to its subproblems. This means we can build up the best solution by combining the best solutions to smaller parts.

## Dynamic Programming Solutions

- **Memoization (Top-Down Approach)**: Memoization stores the results of expensive function calls and returns the cached result when the same inputs occur again. 

```py
def climb_stairs_memo(n, memo={}):
    """Dynamic programming with memoization"""
    # Check if we've already calculated this value
    if n in memo:
        return memo[n]  # Return cached result - O(1) lookup!
    
    # Base cases
    if n <= 2:
        return n
    
    # Calculate once and store in memo for future use
    memo[n] = climb_stairs_memo(n-1, memo) + climb_stairs_memo(n-2, memo)
    return memo[n]
```

- **Tabulation (Bottom-Up Approach)**: Tabulation builds the solution from the ground up, filling a table with solutions to subproblems.

```py
def climb_stairs_tabulation(n):
    """Dynamic programming with tabulation"""
    if n <= 2:
        return n
    
    # Create array to store results for all steps from 0 to n
    dp = [0] * (n + 1)
    dp[1] = 1  # 1 way to reach step 1
    dp[2] = 2  # 2 ways to reach step 2
    
    # Build up the solution iteratively
    for i in range(3, n + 1):
        # Ways to reach step i = ways to reach (i-1) + ways to reach (i-2)
        dp[i] = dp[i-1] + dp[i-2]
    
    return dp[n]
```

## Real-World Applications Using Dynamic Programming

- **Route Optimization**: GPS systems use dynamic programming algorithms to find shortest paths between locations.
- **Text Processing**: Spell checkers and autocomplete features often rely on dynamic programming to calculate edit distances between words.
- **Financial Modeling**: Investment strategies and portfolio optimization frequently employ dynamic programming techniques.
- **Resource Allocation**: The knapsack problem and its variants appear in scheduling, budgeting, and resource management.

## When to Use Dynamic Programming

You should consider using dynamic programming in the following scenarios:

- The problem can be broken down into overlapping subproblems.
- The problem exhibits optimal substructure.
- A naive recursive solution would involve repeated calculations.
- You need to optimize for time complexity at the cost of space complexity.

# --assignment--

Review the Python topics and concepts.