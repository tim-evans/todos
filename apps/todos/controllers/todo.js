require('core');

// A controller that will provide a list of all of the todos.
Todos.todoController = SC.ArrayController.create({
  addTodo: function (view) {
    var todo = (view.get('value') || '').trim();
    if (todo !== '') {
      Todos.store.createRecord(Todos.Todo, {
        title: todo,
        timestamp: SC.DateTime.create()
      });
      view.set('value', '');
    }
  }
});
