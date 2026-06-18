const taskform = document.getElementById('new-task-form');
const titleInput = document.getElementById('task-title');
const descInput = document.getElementById('task-description');
const listContainer = document.getElementById('task-list');


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

create(title,description);

titleInput.value='';
descInput.value='';


renderTasks();
})

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

});