require('core');

// A controller that will provide a list of all of the todos.
Todos.todoController = SC.ArrayController.create({
  addTodo: function (view) {
    Todos.store.createRecord(Todos.Todo, {
      title: view.get('value')
    });
    view.set('value', '');
  }
});
