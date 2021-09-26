/*this function gets the task frominput*/
function get_todo() {
    /*This creates an array of tasks that are inputed*/
    var todos=new Array;
    /*This pukks the task that was saved in the web browser memory*/
    var todos_str = localStorage.getItem('todos');
    /*If the input is not null then JSON.parse willcommunicate
    with the web browser to make the task a JavaScript object.*/
    if (todos_str !== null) {
        todos= Json.parse(todos_str);
    }
    return todos;
}
/*This function adds the input task to the get_todos function array*/
function add() {
    /*This tasks the inputed task and creates a variable of it*/
    var task = document.getElementById ('task'). value;

    var todos= get_todo ();
    /*This adds a new task the end of array*/
    todos.push (task);
    /*This converts the task input to JSON string*/
    localStorage.setItem ('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    Show();

    return false;
}

/*this function keeps the tasks permanetly displayed on the screen*/
function show() {
    /*this sets the task that was retrived as a vaiable*/
    var todos=get_todos();

    /*This sets up each task as an unordered list*/
    var html='<ul>';
    /*This displays a task to the list in the order that it is inputed*/
    for (var i= 0; i <todos.length; i++) {
        /*this also displays the task as a list and creates the button with the "x"*/
        html += '<li>' + todos[i] + '<button class="remove" id="'+ i + '">x </button></li>';

    };
    html += '</ul>';
    /*this displays the task as a list*/
    document.getElementById('todos'). innerHTML=html;

    /*this tells the browser how to display the todo array after an item has been removed*/
    var button = document.getElementByClassName ('remove');
    for (var i =0; i<buttons.length; i++) {
        buttons [i]. addEventListener('click', remove);
    }

}
/*This displays the inputed task when the'Add Item' button is clicked*/
document.getElementById('add'). addEventListener('click', add);
/*this will keep the inputs displayed permantaly on the screen*/
show();

/*this creates the functionality of removing a todo item from the array*/
function remove () {
    var id = this.getAttribute ('id');
    var todos = get_todos ();
    todos.splice (id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    /*this looks in the show() how to display a removed item on the screen*/
    show();

    return false;
}