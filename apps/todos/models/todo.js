require('core');

// A simple SproutCore model that describes
// the semantics of something that needs to be done.
Todos.Todo = SC.Record.create({

  // Is the Todo item completed?
  isCompleted: SC.Record.attr(Boolean),

  // What is it that needs to be done?
  title: SC.Record.attr(String)

});
