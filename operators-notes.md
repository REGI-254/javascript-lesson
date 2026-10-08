# Operators 

Operand, unary and binary: how many values an operator works on.
Only + joins strings. -, *, / always convert to numbers.
Unary plus (+"5") as a shortcut for Number("5").
Left to right: "$" + 4 + 5 gives "$45", but 4 + 5 + "px" gives "9px".
= returns a value, so assignments can chain: a = b = c = 4.
Assignment runs last: n *= 3 + 5 is n * 8.
++a versus a++ inside other lines of code.
NaN appears when something can't become a number.
