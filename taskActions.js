
import {getTasks,saveTasks} from '/.storage.js';

function generateId(){
return Date.now().toString(36) + Math.random().toString(36).slice(2,9);

}

function create(title, description){
const newTask = {

id: generateId(),
title: title,
description: description,
createdAt: new Date().toISOString(),
isCompleted: false

};

const tasks = getTasks();
tasks.push(newTask);
saveTasks(tasks);

return newTask; 

}

function deleteTask(id){

    const tasks= getTasks();
    const remainingTasks = tasks.filter(task => task.id !== id);
    saveTasks(remainingTasks);
    return remainingTasks;
}

function markComplete(id){

    const tasks = getTasks();
    const updateTasks = tasks.map(task => 
        task.id === id ?{...task,isCompleted: !task.isCompleted}:task
    );
saveTasks(updateTasks);
return updateTasks;

}