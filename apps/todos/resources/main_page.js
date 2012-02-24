// ==========================================================================
// Project:   Todos - mainPage
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Todos */
require('views/todo_item');

// This page describes the main user interface for your application.  
Todos.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: ['completeAll', 'todosList'],

    completeAll: SC.CheckboxView.design({
      layout: { centerX: 0, width: 400, top: 0, height: 30 },
      title: 'Mark All as done',
      valueBinding: 'Todos.completedTodosController.areAllCompleted'
    }),
    
    todosList: SC.ListView.design({
      layout: { centerX: 0, width: 400, top: 30, bottom: 0 },
      contentBinding: SC.Binding.oneWay('Todos.todoController'),
      rowHeight: 36,
      exampleView: Todos.TodoItemView
    })
  })

});
