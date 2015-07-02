$(function() {
  
  var nice = [{name:"shopping", desc: "buy notebooks and pencils"},
  {task:"exercise", desc:"sweat it out!"},
  {task:"vet", desc:"doggy needs her vaccines!"}];

  var Todo = function(task, desc){
    this.task = task;
    this.desc = desc;
    this.all = []
  }

Todo.prototype.save = function(){
  this.all.push(this)
}

Todo.prototype.render= function(todo){
  _.each(todo.all, function (todo, index) {
  console.log("Here!")
  var $toDo = toDoTemplate(todo);
  $toDoList.append($toDo);
  console.log("Here!", $toDo)

}

  var toDoTemplate = _.template($('#toDos-template').html());
    console.log($('#toDos-template').html());
  var toDos = [
    {name: "shopping", desc: "buy notebooks and pencils!"},
    {name: "exercise", desc: "sweat it out!"},
    {name: "vet", desc: "doggy needs her vaccines!"},
  ];

  var $newToDo = $('#new-todo');
  
  var $toDoList = $('#todo-list');

_.each(toDos, function (todo, index) {
  console.log("Here!")
  var $toDo = toDoTemplate(todo);
  $toDoList.append($toDo);
  console.log("Here!", $toDo)
});

  $newToDo.on('submit', function(event) {
    event.preventDefault();

    var toDoName = $('#todo-name').val();
    var toDoDesc = $('#todo-desc').val();
    var toDoData = {name: toDoName, desc: toDoDesc};

  toDos.push(toDoData);

    $toDoList.append('<li class="todo">' + toDoData.name + ' - ' + toDoData.desc + '</li>');

    $newToDo[0].reset();
    $('#todo-name').focus();
  });

  $toDoList.on('click', '.todo', function() {
    $(this).addClass('done');
  });
});