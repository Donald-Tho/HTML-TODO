
var app = {};
app.todos = [];

app.ui = {};

//init todo object
app.todo = function(name){
  this.name = name;
  this.isCompleted = false;
  this.created = Date.now();
}

app.ui.toDoHtml = function(i) {

    var userInput = app.todos[i].name;
    var closeButton = $('<span>')
                        .addClass('close')
                        .html('X')
                        .on('click', function(){
                          app.ui.removeToDo(i);
                        });

    var $todoListItem = $('<li>')
                      .append($('<div>')
                      .append(userInput)
                      .append(closeButton))
                      .append($('<input>')
                                  .attr('type', "checkbox")
                                  .attr('checked', app.todos[i].isCompleted)
                                  .attr('index', i)
                                  .on("change", function() {
                                    app.ui.toggleToDoComplete(i);
                                })
                      );

    $('#list').append($todoListItem);
}

app.ui.renderToDos = function(){
  $('#list').html('');

  for (var i = 0; i < app.todos.length; i++) {
    app.ui.toDoHtml(i);
  }
}

app.ui.addToDo = function(){
  var userInput = $('#userInput').val();
  $('#userInput').val("");
  app.todos.push(new app.todo(userInput));
  app.ui.renderToDos();

}

app.ui.removeToDo = function(index){
  app.todos.splice(index,1);
  app.ui.renderToDos();
}

app.ui.toggleToDoComplete = function(index){
  app.todos[index].isCompleted = !app.todos[index].isCompleted;
  app.ui.renderToDos();
}

app.ui.clearAllComplete = function(){
  for (var i = app.todos.length - 1; i >= 0; i--) {
    if (app.todos[i].isCompleted) {
      app.todos.splice(i, 1);
    }
  }

  app.ui.renderToDos();
}

// $(function(){
//       app.todos.push(new app.todo("one"))
//       app.todos.push(new app.todo("two"))
//       app.todos.push(new app.todo("three"))
//       app.todos.push(new app.todo("four"))
//       app.todos.push(new app.todo("five"))
//       app.todos.push(new app.todo("six"));
// });

//   span.appendChild(txt);
//   node.appendChild(span);
//   todo_list.appendChild(node);
// }
//
// var app = {};
// app.todos = [];
//
// //init todo object
// app.todo = function(name){
//   this.name = name;
//   this.isCompleted = false;
//   this.created = Date.now();
//   app.addToHTML(this);
// }
//
// //inserts the html of a todo item
// app.addToHTML = function(todo){
//   var userInput = todo.name;
//   var closeButton = $('<span>')
//                       .addClass('close')
//                       .html('X')
//                       .on('click', function(){
//                         $(this).parent().remove()
//                       });
//
//   var $todoListItem = $('<li>')
//                     .append($('<div>')
//                     .append(userInput)
//                     .append(closeButton))
//                     .append($('<div>')
//                     .append("Is completed:" + todo.isCompleted));
//
//   $('#list').append($todoListItem);
// }
//
// //creates a todo object
// app.todoSubmit = function() {
//   var userInput = $('#userInput').val();
//   $('#userInput').val("");
//   app.todos.push(new app.todo(userInput));
// }
//
// //removes completed todo list items
// app.removeCompleted = function() {
//   for(var todo in app.todos){
//     if(todo.isCompleted == true){
//       app.removeChild(todo);
//     }
//   }
// }
