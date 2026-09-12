const decrease=document.getElementById("dec");
const increase=document.getElementById("inc");
const reset=document.getElementById("res");
const countLabel=document.getElementById("count");
let count=0;

decrease.onclick=function(){
    count--;
    countLabel.textContent=count;
}
increase.onclick=function(){
    count++;
    countLabel.textContent=count;
}
reset.onclick=function(){
    count=0;
    countLabel.textContent=count;
}
