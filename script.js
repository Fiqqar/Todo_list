const form = document.getElementById('form');
const input = document.getElementById('input');
const todosul = document.getElementById('todos');
const todos = JSON.parse(localStorage.getItem('todos'));
const btnadd = document.getElementById('add_btn');
const btnreset = document.getElementById('reset_btn');

if (todos) {
  todos.forEach(todo => addtodo(todo)); 
}
form.addEventListener('submit',(e) => {
    e.preventDefault();
    addtodo();
});
function addtodo(todo) {
    let todotext = input.value;
    if (todo) {
        todotext = todo.text;
    }
    if (todotext) {
        const todoel = document.createElement('li');
        if (todo && todo.completed) {
            todoel.classList.add('completed');
        }
        todoel.addEventListener('click', () => {
            todoel.classList.toggle('completed');
            updatels();
        });
        todoel.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todoel.remove();
            updatels();
        });
        todoel.innerText = todotext;
        todosul.appendChild(todoel);
        input.value = '';
        updatels();
        
        }
}
function updatels() {
    todosel = document.querySelectorAll('li');
    const todos = [];
    todosel.forEach(todo => todos.push(
        {
            text: todo.innerText,
            completed: todo.classList.contains('completed')
        }
    ));
    localStorage.setItem('todos', JSON.stringify(todos));
}