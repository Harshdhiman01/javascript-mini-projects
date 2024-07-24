let users = {};

document.addEventListener('DOMContentLoaded', () => {
    renderUserList();
    renderTasks();
});

function renderUserList() {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';

    for (const user of Object.keys(users)) {
        const userItem = document.createElement('li');
        userItem.innerText = user;

        const editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.onclick = () => editUser(user);

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = () => deleteUser(user);

        userItem.appendChild(editButton);
        userItem.appendChild(deleteButton);
        userList.appendChild(userItem);
    }
}

function renderTasks() {
    const tasksContainer = document.getElementById('tasks');
    tasksContainer.innerHTML = '';

    for (const [user, tasksList] of Object.entries(users)) {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user-tasks');
        
        const userTitle = document.createElement('h3');
        userTitle.innerText = `Tasks for ${user}:`;
        userDiv.appendChild(userTitle);
        
        tasksList.forEach((task, index) => {
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task');
            taskDiv.innerText = task;

            const editButton = document.createElement('button');
            editButton.innerText = 'Edit';
            editButton.onclick = () => editTask(user, index);

            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete';
            deleteButton.onclick = () => deleteTask(user, index);

            taskDiv.appendChild(editButton);
            taskDiv.appendChild(deleteButton);
            userDiv.appendChild(taskDiv);
        });

        const addTaskInput = document.createElement('input');
        addTaskInput.type = 'text';
        addTaskInput.placeholder = `Add task for ${user}`;
        addTaskInput.id = `new-task-${user}`;

        const addTaskButton = document.createElement('button');
        addTaskButton.innerText = 'Add Task';
        addTaskButton.onclick = () => addTask(user);

        userDiv.appendChild(addTaskInput);
        userDiv.appendChild(addTaskButton);

        tasksContainer.appendChild(userDiv);
    }
}

function addUser() {
    const newUser = document.getElementById('new-user').value.trim();
    if (newUser && !users[newUser]) {
        users[newUser] = [];
        document.getElementById('new-user').value = '';
        renderUserList();
        renderTasks();
    }
    else {
        alert('Please enter a valid user name or already exist.');
    }
}

function editUser(user) {
    const newUser = prompt('Edit user name:', user);
    if (newUser && newUser !== user && !users[newUser]) {
        users[newUser] = users[user];
        delete users[user];
        renderUserList();
        renderTasks();
    }
}

function deleteUser(user) {
    if (confirm(`Are you sure you want to delete user ${user}?`)) {
        delete users[user];
        renderUserList();
        renderTasks();
    }
}

function addTask(user) {
    const newTask = document.getElementById(`new-task-${user}`).value.trim();
    if (newTask && !users[user].includes(newTask)) {
        users[user].push(newTask);
        document.getElementById(`new-task-${user}`).value = '';
        renderTasks();
    } else if (users[user].includes(newTask)) {
        alert(`Task '${newTask}' already exists for user ${user}.`);
    }
}

function editTask(user, taskIndex) {
    const newTask = prompt('Edit task:', users[user][taskIndex]);
    if (newTask && newTask !== users[user][taskIndex] && !users[user].includes(newTask)) {
        users[user][taskIndex] = newTask;
        renderTasks();
    } else if (users[user].includes(newTask)) {
        alert(`Task '${newTask}' already exists for user ${user}.`);
    }
}

function deleteTask(user, taskIndex) {
    if (confirm(`Are you sure you want to delete this task?`)) {
        users[user].splice(taskIndex, 1);
        renderTasks();
    }
}
