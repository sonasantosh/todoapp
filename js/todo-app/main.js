console.log("Carzso Todo");
let myTodo = [];
let todoForm = document.querySelector("#todoForm");
let todoItem = document.getElementById("todoItem");
let desc = document.getElementById("desc");
let ul = document.querySelector(".showTodoList");
const taskDone = document.getElementsByClassName("taskDone");
const taskDelete = document.getElementsByClassName("taskDelete");
let key;
todoForm.addEventListener("submit", function(e){
    e.preventDefault();
    if(todoItem.value == "" || desc.value == ""){
        todoItem.style.border = "1px solid red";
        desc.style.border = "1px solid red";
        // console.log("Todo Item can not be null!");
        alert("Todo Item or Description can not be null!");
    }
    else{
        const todoTitle = todoItem.value;
        const todoDesc = desc.value;
        if(todoTitle.replace(/\s/g, "").length === 0 || todoDesc.replace(/\s/g, "").length === 0){
            alert("Todo title can not be Blank!")
            todoItem.style.border = "1px solid red";
            desc.style.border = "1px solid red";
        }
        else{
            key = myTodo.push(todoTitle);
            localStorage.setItem(`${key}`,todoTitle);
            console.log(localStorage.getItem(key));
            ul.innerHTML += `<li>
                    <span class="left todoText">${localStorage.getItem(key)} - ${todoDesc}</span>
                    <span class="right">
                        <button type="button" class="btn btn-primary btn-sm me-2 taskDone"> Done </button>
                        <button type="button" class="btn btn-secondary btn-sm taskDelete"> Delete </button>
                    </span>
                </li>`;
            todoItem.style.border = "1px solid #c0c0c0";
        }
        
        todoItem.value = "";
        
    }
    
});

console.log(localStorage.getItem(key));

ul.addEventListener("click", (e)=>{
    
    if(e.target.classList.contains("taskDone")){
        // console.log("Task Done");
        if(e.target.parentNode.previousElementSibling.style.textDecoration == "line-through"){
            alert("Current Task has been Done Already.");
        }
        else{
            e.target.parentNode.previousElementSibling.style.textDecoration="line-through";
        }
    }
    if(e.target.classList.contains("taskDelete")){
        // console.log("Task Delete");
        if(e.target.parentNode.previousElementSibling.style.textDecoration == "line-through"){
            e.target.parentNode.parentNode.remove();
            localStorage.removeItem(key);
        }
        else{
            alert("Current Task is not Done Yet!");
        }
    }
});

// localStorage.setItem("key","value");

// console.log(localStorage.getItem("key"));
// localStorage.clear();