Todos.TodoItemView = SC.CheckboxView.design({
  // The CSS class names to apply to this view
  classNames: ['todo-item'],

  valueBinding: '.content.isCompleted',

  titleBinding: SC.Binding.oneWay('.content.title')

});
