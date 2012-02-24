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
    childViews: ['header', 'newTodoField', 'todosList', 'footer'],

    header: SC.ToolbarView.design({
      layout: { centerX: 0, width: 500, top: 0, height: 36 },

      childViews: ['title', 'completeAll'],

      completeAll: SC.CheckboxView.design(SC.AutoResize, {
        autoResizePadding: { width: 47 },
        localize: YES,
        title: '_Mark all as done',
        valueBinding: 'Todos.completedTodosController.areAllCompleted'
      }),

      title: SC.LabelView.design({
        layout: { left: 0, right: 0, top: 0, bottom: 0 },

        totalTodoBinding: SC.Binding.oneWay('Todos.todoController.length'),
        completedTodosBinding: SC.Binding.oneWay('Todos.completedTodosController.length'),

        value: function () {
          var leftTodo = this.get('totalTodo') - this.get('completedTodos');
          return 'Todos (%@)'.loc(leftTodo);
        }.property('totalTodo', 'completedTodos').cacheable()
      })
    }),

    newTodoField: SC.View.design({
      classNames: ['new-todo'],
      layout: { centerX: 0, width: 500, top: 36, height: 36 },
      childViews: ['field', 'submit'],

      field: SC.TextFieldView.design({
        localize: YES,
        hint: '_What needs to be done?'
      }),

      submit: SC.ButtonView.design(SC.AutoResize, {
        controlSize: SC.HUGE_CONTROL_SIZE,
        layout: { right: 12, height: 30, centerY: 0, zIndex: 100 },
        localize: YES,
        title: '_Add',
        target: 'Todos.todoController',
        action: 'addTodo',
        valueBinding: '.parentView.field.value',
        isDefaultBinding: '.parentView.field*focused'
      })
    }),
    
    todosList: SC.ScrollView.design({
      layout: { centerX: 0, width: 500, top: 72, bottom: 36 },
      contentView: SC.ListView.design({
        contentBinding: SC.Binding.oneWay('Todos.todoController'),
        rowHeight: 36,
        exampleView: Todos.TodoItemView
      })
    }),

    footer: SC.ToolbarView.design({
      layout: { centerX: 0, width: 500, bottom: 0, height: 36 },

      childViews: ['clearCompletedTodos'],
      clearCompletedTodos: SC.ButtonView.design(SC.AutoResize, {
        controlSize: SC.HUGE_CONTROL_SIZE,
        layout: { left: 14, height: 30, centerY: 0 },
        isEnabledBinding: SC.Binding.oneWay('Todos.completedTodosController.length').bool(),
        localize: YES,
        title: '_Clear completed todos',
        target: 'Todos.completedTodosController',
        action: 'clearCompletedTodos'
      })
    })
  })

});
