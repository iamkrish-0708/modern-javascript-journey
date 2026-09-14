const input=document.getElementById("TEMPIO");
const toFah=document.getElementById("toFahrenheit");
const toCel=document.getElementById("toCelsius");
const calc=document.getElementById("SUBMIT");
const output=document.getElementById("RESULT");

calc.onclick=function(){
    let temperature=Number(input.value);

    if(isNaN(temperature) || input.value.trim() === ""){
        output.textContent="ENTER A VALID TEMPERATURE VALUE FOR CONVERSION.";
    }
    else if(toFah.checked){
        temperature=(temperature*(9/5))+32;
        output.textContent=`${Number(input.value)} (in °C) = ${temperature.toFixed(1)} (in  °F)`;
    }
    else if(toCel.checked){
        temperature=(temperature-32)*(5/9);
        output.textContent=`${Number(input.value)} (in °F) = ${temperature.toFixed(1)} (in °C)`;
    }
    else{
        output.textContent="SELECT AT LEAST ONE OPTION OF CONVERSION.";
    }
}