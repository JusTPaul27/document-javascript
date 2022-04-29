
const todo1 ={
    name: 'compra il pane',
    priority: 3,
}

const todo2 ={
    name: 'ripassa html',
    priority: 5,
}


const todo3 ={
    name: 'ripassa css',
    priority: 7,
}


const todo4 ={
    name: 'studia Javascript',
    priority: 9,
}

const todo5 ={
    name: 'compra il regalo alla mamma',
    priority: 10,
}

const todoList = [todo1, todo2, todo3, todo4, todo5]

function logTodos(todoArray) {
    for (let i = 0; i < todoArray.length; i++) {
        const todo = todoArray[i];
       console.log(todo.name + ' ' + "priority: " + todo.priority)
    }
}


// const container = document.getElementById("todo-container");

// const par = document.createElement('p');

// const textNode = document.createTextNode('Ciao a tutti');

// par.appendChild(textNode);

// container.appendChild(par);

function writeToDosToDocuments(todoArray) {

    const container = document.getElementById("todo-container");

    for (let i = 0; i < todoArray.length; i++) {
        const todo = todoArray[i];

        const li = document.createElement('li');

        li.classList.add('list-element');

        const node = document.createTextNode(todo.name);

        const priorityNode = document.createTextNode(" Priority " + todo.priority)

        const br = document.createElement('br')

        li.appendChild(node);

        li.appendChild(br);

        li.appendChild(priorityNode);

        container.appendChild(li);
        
    }
}

writeToDosToDocuments(todoList);