require('controllers/todo');

// The todo manager is a list of all todo items that have `isCompleted` set to `YES`.
Todos.completedTodosController = SC.ArrayController.create({

  // The total number of Todos
  totalTodosBinding: SC.Binding.oneWay('Todos.todoController.length'),

  // Whether all items in the Todo list are completed
  areAllCompleted: function (k, v) {
    if (v !== undefined) {
      Todos.todoController.setEach('isCompleted', v);
    }
    return this.get('length') === this.get('totalTodos');
  }.property('length', 'totalTodos').cacheable()

});
