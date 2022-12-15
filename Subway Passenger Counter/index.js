// document.getElementById("count-el").innerText=5

let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("count-el")
let count=0;
function increment()
{
count=count+1;
countEl.textContent=count

}

function save()
{
let entry=count +" - ";
saveEl.textContent=saveEl.textContent+entry;

 count=0;
 countEl.textContent=count

console.log(count)
}



