const checkbox=document.getElementById("check");
const radio1=document.getElementById("r1");
const radio2=document.getElementById("r2");
const radio3=document.getElementById("r3");
const radio4=document.getElementById("r4");
const submit=document.getElementById("btn");
const o1=document.getElementById("RESULT1");
const o2=document.getElementById("RESULT2");

submit.onclick=function(){
    if(checkbox.checked){
        o1.textContent="You are a student.";
    }
    else{
        o1.textContent="You are not a student.";
    }
    if(radio1.checked){
        o2.textContent="You like mathematics.";
    }
    else if(radio2.checked){
        o2.textContent="You like physics.";
    }
    else if(radio3.checked){
        o2.textContent="You like chemistry.";
    }
    else if(radio4.checked){
        o2.textContent="None of the listed subject are of you'r liking.";
    }
}
