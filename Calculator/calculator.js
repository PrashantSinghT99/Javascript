let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumel=document.getElementById("sum-el")

function onAdd()
{
let sum= num1+num2;


sumel.textContent="Sum:"+sum;



}

function onSub()
{
    let sub= num1-num2;
    sumel.textContent="Sum:"+sub;



}

function onDivide()
{
    let div= num1/num2;
    sumel.textContent="Sum:"+div;


}

function onMul()
{
    let mul= num1*num2;
    sumel.textContent="Sum:"+mul;


}