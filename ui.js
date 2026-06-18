
const taskList =  document.getElementById('task-list');
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
    const isCompletedClass = t.isCompleted? 'opacity-60 bg-gray-50':'';
    const textStrikeClass = t.isCompleted? 'line-through text-gray-400': 'text-gray-800';
    const buttonText = t.isCompleted? 'Undo': 'Done';

    return `
  <li class= "bg-white p-4 mb-3 rounded-lg shadow-md flex justify-between items-start transition-all ${isCompletedClass} "  >
  
<div class="flex-1 pr-4" >
<h3 class="font-bold text-lg ${textStrikeClass} " >
${t.title}
</h3>
<p class= "text-gray-600 text-sm mt-1 whitespace-pre-wrap" >
${t.description || 'No description provided'}
</p>

</div>

<div class="flex gap-2 shrink-0" >

<button data-action="complete" data-id="${t.id}" class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm font-medium transition  " >
${buttonText}
</button>

<button data-action="delete" data-id= "${t.id}" class= "bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm font-medium transition  ">
Delete
</button>

</div>
  </li>
  `;
}).join('');

taskList.innerHTML = taskHTML;

}