FUNCTION IS BLOCK OF CODE WHICH HELPS TO SATISFY DRY CODING PRINCIPLE BY PROMOTING REUSABILITY OF CODE.

index.html contains enough basic implementation of how function must have one job and specific name describing the work which is a ideal real world practice 

LOCAL VARIABLE ARE VARIABLE DECLARED INSIDE FUNCTION AND GLOBAL VARIABLE ARE VARIABLE DECLARED OUTSIDE THE FUNCTION

IF LOCAL AND GLOBAL VARIABLE HAS SAME NAME THAN LOCAL VARIABLE SHADOWS GLOBAL INSIDE FUNCTION BUT DOESNT HAVE ANY REAL CHANGES ON GLOBAL VARIABLE 

BUT GLOBAL VARIABLE CAN BE MANIPULATED INSIDE THE FUNCTION AND CAN HAVE GLOBAL LEVEL CHANGES IN IT 

DEFAULT PARAMETERS ARE USED IN CASE OF ABSENCE OF PARAMENTER 

return ALONE IS USED TO TEMRINATE THE FUNCTION BUT IT CAN BE USED TO RETURN A REAL VALUE TOO AS WE HAVE DONE IN index.html

FUNCTION EXPRESSION IS VARIABLE USED TO DECLARE FUNCTION 
example-
let sayHi = function() {
  alert( "Hello" );
};
sayHi();

ARROW FUNCTION IS ANOTHER SYNTAX FOR FUNCTION JUST LIKE FUNCTION EXPRESSION BUT IT IS CONSIDERED BETTER THAN EXPRESSION FUNCTION

SYNTAX-
let functionName=(arg1,arg2,...,argN) => expression;

ex-
1.
let sum=(a,b) => alert(a+b);
sum(1,2); // 3 in modal window pop up

2.
let hello= () => alert("hello");
hello(); // hello in modal window pop up

3.
let ageVerification = (age) => {
    if(age>=18){
        alert("Adult verified");
    }
    else if(age<18){
        alert("Minor verified");
    }
    else{
        alert("Invalid age.");
    }
}
ageVerification(17); // Minor verified

