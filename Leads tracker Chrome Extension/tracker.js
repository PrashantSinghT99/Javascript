

let arrayEl = [];

const input = document.getElementById("input-el");

const inputBtn = document.getElementById("input-btn");

const deleteBtn = document.getElementById("delete-btn");

const ulList = document.getElementById("list");

const saveTab = document.getElementById("tab-btn");



const LeadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))

console.log(LeadsFromLocalStorage)

if (LeadsFromLocalStorage) {
    arrayEl = LeadsFromLocalStorage

    render(arrayEl)

}


inputBtn.addEventListener("click", function () {
    arrayEl.push(input.value);
    input.value = ''
    localStorage.setItem("myLeads", JSON.stringify(arrayEl));
    render(arrayEl)
})

//delete btn event listener

deleteBtn.addEventListener("dblclick", function () {

    console.log("Double Clicked!")
    localStorage.clear();
    arrayEl = [];
    render(arrayEl)
    location.reload();


})
saveTab.addEventListener('click', function () {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        arrayEl.push(tabs[0].url);

        localStorage.setItem("myLeads", JSON.stringify(arrayEl));
        render(arrayEl)
    })

})

function render(arrayEl) {
    // console.log("inside render"+" "+arrayEl)
    let listItems = "";

    for (let i = 0; i < arrayEl.length; i++) {
        // listItems+="<li><a target='_blank' href='"+arrayEl[i]+"'>"+arrayEl[i]+"<a/></li>";

        listItems +=
            `<li>

        <a target='_blank' href='${arrayEl[i]}'>
         ${arrayEl[i]}
         
         <a/>

        </li>`;

        ulList.innerHTML = listItems;

    }
}



/*

const li-el=document.createElement("li")

li-el.textContent= arrayEl[i]

ulList.append(li-el);

*/

