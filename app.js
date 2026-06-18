const taskform = document.getElementById('new-task-form');
const titleInput = document.getElementById('task-title');
const descInput = document.getElementById('task-description');
const listContainer = document.getElementById('task-list');


let currentEditId = null;

document.addEventListener('DOMContentLoaded',()=>{
    renderTasks();
});

taskform.addEventListener('submit',(e)=>{
    e.preventDefault();

const title = titleInput.value.trim();
const description= descInput.value.trim();

if(!title){
alert('Please Enter a Task Title');
return ;
}

if(currentEditId !==null){

updateTasks(currentEditId,title, description);

currentEditId= null;
taskform.querySelector('button[type="submit"]').textContent='Add Task';

}else{

create(title,description);
}
titleInput.value='';
descInput.value='';


renderTasks();
});

listContainer.addEventListener('click',(e)=>{

const button = e.target.closest('button');

if(!button) return;

const action = button.dataset.action;
const id = button.dataset.id;

if(action === 'delete'){
    deleteTask(id);
    renderTasks();
}
else if(action ==='complete'){
    markComplete(id);
    renderTasks();
}
else if(action ==='duplicate'){
    duplicateTasks(id);
    renderTasks();
}
else if(action === 'edit'){
const tasks = getTasks();
const taskToEdit = tasks.find(t=> t.id === id);

if(taskToEdit){

titleInput.value = taskToEdit.title;
descInput.value = taskToEdit.description;

currentEditId = id;

taskform.querySelector('button[type="submit"]').textContent= 'Update Task';

window.scrollTo({top:0,behavior:'smooth'});

}


}


});