function todo_submit(){
  var input = document.getElementById('userInput').value;
  document.getElementById('userInput').value="";
  var todo_list = document.getElementById('list');
  var node = document.createElement("LI");
  var textnode = document.createTextNode(input);
  node.appendChild(textnode);
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("X");
  span.className = "close";
  span.onclick = function(){
    this.parentElement.parentElement.removeChild(this.parentElement);
  }
  span.appendChild(txt);
  node.appendChild(span);
  todo_list.appendChild(node);
}

var app = {};
app.todos = [];

//init todo object
app.todo = function(name){
  this.name = name;
  this.isCompleted = false;
  this.created = Date.now();
  app.addToHTML(this);
}

//inserts the html of a todo item
app.addToHTML = function(todo){
  var userInput = todo.name;
  var closeButton = $('<span>')
                      .addClass('close')
                      .html('X')
                      .on('click', function(){
                        $(this).parent().remove()
                      });

  var $todoListItem = $('<li>')
                    .append($('<div>')
                    .append(userInput)
                    .append(closeButton))
                    .append($('<div>')
                    .append("Is completed:" + todo.isCompleted));

  $('#list').append($todoListItem);
}

//creates a todo object
app.todoSubmit = function() {
  var userInput = $('#userInput').val();
  $('#userInput').val("");
  app.todos.push(new app.todo(userInput));
}

//removes completed todo list items
app.removeCompleted = function() {
  for(var todo in todos){
    if(todo.isCompleted == true){
      app.removeChild(todo);
    }
  }
}
