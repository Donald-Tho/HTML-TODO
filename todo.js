var one = 1;

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

function todo_submit2(num) {
  var userInput = $('#userInput').val();
  $('#userInput').val("");

  // callback
  var closeButton = $('<span>')
                      .addClass('close')
                      .html('X')
                      .on('click', function(){
                        $(this).parent().remove()
                      });

  var $todoListItem = $('<li>')
                    .append(userInput)
                    .append(closeButton);

  $('#list').append($todoListItem);
}
