function ajouterTache() {
    const task = document.getElementById('task');
    const taskList = document.getElementById('taskList');
  
    if (!task.value.trim()) {
      alert('Veuillez saisir une tâche.');
      return;
    }
  
    const newTask = document.createElement('li');
    newTask.textContent = task.value; 
  
    taskList.appendChild(newTask);
  
    task.value = '';
  }

  function reinitialiser() { 
    const task = document.getElementById('task');
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    task.value = '';
    task.focus();
  }