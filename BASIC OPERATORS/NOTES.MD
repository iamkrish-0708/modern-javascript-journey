OPERATORS ARE APPLIED TO OPERAND
EX- 4+5 (HERE LEFT OPERAND IS 4 AND RIGHT OPERAND IS 5 WHERE + IS OPERATOR)

UNARY OPERATOR HAS ONLY ONE OPERAND

BINARY OPERATOR HAS TWO OPERANDS

REGARDLESS OF THESE BASIC OPERATORS LIKE +,-,*,/,%
EXPONENTIATION( ** ) IS SOMETHING WE MUST TALK BIT ABOUT
EX- 2**3 OR 2³ = 8
EX- WE CAN TAKE SQUARE ROOT AND CUBE ROOT USING THIS 2**(1/2) AND 2**(1/3)

WE CAN PERFORM STRING CONCATENATION USING +
EX- "HELLO "+"WORLD"=HELLO WORLD
*
NOTE- 1+"2"="12"
    ANY OF THE OPERAND IS STRING THEN THE OTHER ONE IS ALSO CONVERTED TO STRING
    2 + 2 + '1' GIVES "41" AS OPERATOR WORK ONE AFTER ANOTHER
    *ONLY BINARY + WORKS LIKE THIS WITH STRING*

    6 - '2' gives 4
    '6' / '2' gives 3
    *HENCE REST ALL OPERATORS DEALS IN NUMBERS ONLY*
*

*
SO FAR WE SEEN HOW BINARY + DEALS IF STRING IS INVOLVED 
BUT UNARY + IS KINDA A SHORTED VERSION FOR TYPE CONVERSION Number(value)
EX- AGE=''
    alert(+age) //gives 0 as output

*WE CAN USE THIS FOR AVOIDING LONGER VARIANT OF TYPE CONVERSIONT TO NUMBER*
EX-
let apples = "2";
let oranges = "3";

alert( +apples + +oranges ); // 5
OR
alert( Number(apples) + Number(oranges) ); // 5

*
*CHAINING ASSIGNMENTS*
let a, b, c;

a = b = c = 2 + 2; ALL GIVES 4

*INCREMENT/DECREMENT*
LET COUNT=0;
COUNT++;
alert(COUNT); // gives old value 0

or 
++COUNT;
alert(COUNT); // gives 1 latest value

SO BOTH DO SAME THING INCREASED VALUE BY ONE BUT DIFFERS IN REUTRN VALUE
WHEN WE NEED TO INCREMENT VALUE AND USE IMMEDIATE GO FOR PREFIX INCREMENT(++VARIABLE)
WHEN WE NEED TO INCREMWNT VALUE AND USE THE PREVIOUS VALUE GO FOR POSTFIX INCREMENT(VARIABLE++)

*INCREMENT/DECREMENT HAVE HIGHER HIGH PRECEDENCE THAN MOST ARITHMETICAL OPERATORS*
example-
->let counter = 1;
alert( 2 * ++counter ); // 4

->let counter = 1;
alert( 2 * counter++ ); // 2,

*Bitwise operators*
Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

These operators are not JavaScript-specific. They are supported in most programming languages.

The list of operators:

AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )

*Comma*
The comma operator , is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on.

The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.
*PARENTHESIS ARE IMP IN COMMA OPERATOR AS IT HAS VERY LOW PRECIDENCE*
EX-
let a = (1 + 2, 3 + 4);
alert( a ); // 7 (the result of 3 + 4)