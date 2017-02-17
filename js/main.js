var taskData = {
  todoTasks: [],
  doneTasks: []
};

// user clicked on the add button
document.getElementById('add').addEventListener('click', function(){
  var value = document.getElementById('item').value;

  if(value) {
    //taskData.newTasks.push(value);
    addTaskTodo(value);
    document.getElementById('item').value = '';
  }
});

// delete task from a list
function deleteTask(e) {
  var task = this.parentNode.parentNode;
  var parent = task.parentNode;
  parent.removeChild(task);
}

// move task from new-tasks list to done-tasks list
function doneTask(e) {
  var task = this.parentNode.parentNode;
  var parent = task.parentNode;
  var id = parent.id;
  console.log(id);
  var target;

  // toggle between todo and redo lists
  if (id === 'todo') {
    // task to be completed
    target = document.getElementById('done');
    this.innerText = "Re-Do";
  } else {
    // re-do a task that is completed
    target = document.getElementById('todo');
    this.innerText = "Done";
  }

  parent.removeChild(task);
  target.insertBefore(task, target.childNodes[0]);
}

// add task to the list - new tasks
function addTaskTodo(text) {
  var list = document.getElementById('todo');

  var task = document.createElement('li');
  task.innerText = text;

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  var del = document.createElement('button');
  del.classList.add('remove');
  del.innerText = 'Delete';

  //add click-event for deleting task
  del.addEventListener('click', deleteTask);

  var done = document.createElement('button');
  done.classList.add('complete');
  done.innerText = 'Done';

  //add click-event for completing task & moving it to doneTasks lists
  done.addEventListener('click', doneTask);

  buttons.appendChild(del);
  buttons.appendChild(done);
  task.appendChild(buttons);

  //list.appendChild(item);
  list.insertBefore(task, list.childNodes[0]);
}
