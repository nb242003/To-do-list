const inputBox= document.getElementById("input_box");
const listcon=document.getElementById("list");
const addButton = document.getElementById("addButton");
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        list.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

listcon.addEventListener("click" ,function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listcon.innerHTML);
}

function showTask(){
    listcon.innerHTML = localStorage.getItem("data");
}
showTask();