

const STORAGE_KEY = "tastManager: tasks"

function getTasks() {
const data = localStorage.getItem(STORAGE_KEY);
if(!data){
    return [];
}
return JSON.parse(data);

}
function saveTasks(tasks){
localStorage.setItem(STORAGE_KEY,JSON.stringify(tasks));

}

