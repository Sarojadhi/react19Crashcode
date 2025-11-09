# 1️⃣ What is JSON?

Answer:
JSON (JavaScript Object Notation) is a lightweight data-interchange format.
It stores data as key-value pairs (objects) and lists of data (arrays).

# 2️⃣ What is the use of JSON?

Answer:

JSON is used to store and transfer data between server ↔ client.

It is language-independent but easy to use in JavaScript and React.

Common use cases: APIs, configuration files, and passing data as props in React.


# 3️⃣ Rules of JSON

Data is in key-value pairs:
Keys must be strings in double quotes "key"

Values can be:

String "Hello"

Number 123

Boolean true/false

Null null

Object { ... }

Array [ ... ]

Objects {} hold multiple key-value pairs

Arrays [] hold multiple values (strings, numbers, objects, etc.)

No trailing commas after the last item

Nested objects and arrays are allowed

# 5️⃣ Why use JSON?

Lightweight & readable → easy to transfer data over networks

Language independent → can be used with JavaScript, Python, Java, etc.

Structured → supports objects, arrays, and nested data

Widely used in APIs → most REST & modern web APIs return JSON

Compatible with React → can easily map arrays and pass as props

# 6️⃣ Common Mistakes / JSON Pitfalls

Using single quotes 'key' instead of double quotes "key"

Trailing commas after last item

Not wrapping nested objects properly . 