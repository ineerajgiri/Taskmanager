
const taskList =  document.getElementById('task-List');
const emptyState = document.getElementById('empty-state');

function renderTasks(){

    const task = getTasks();

// empty state handle
if(task.length===0){
    taskList.innerHTML ='';
    emptyState.classList.remove('hidden');
    return;
}

emptyState.classList.add('hidden');


const taskHTML = task.map(t => {

    // condition check agar complete h to stylling change karenge
    const isCompletedClass = task.isCompleted? 'opacity-60 bg-gray-50':'';
    const textStrikeClass = task.isCompleted? 'Line-through text-gray-400': 'text-gray-800';
    const buttonText = task.isCompleted? 'Undo': 'Done';

    return `
  <li class= "bg-white p-4 mb-3 rounded-lg shadow-md flex justify-between items-start transition-all ${isCompletedClass} "  >
  

  
  </li>


    `


})




}