Todos.TodoItemView = SC.View.extend({

  childViews: ['todo', 'checkbox'],

  // The label of the todo item
  todo: SC.LabelView.design({
    contentBinding: SC.Binding.oneWay('.parentView.content'),
    layout: { left: 47 }
  }),

  // The checkbox that shows whether this todo item is complete
  checkbox: SC.CheckboxView.design({
    layout: { zIndex: 2 },
    valueBinding: '.parentView.content.isCompleted'
  })

});
