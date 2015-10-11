angular.module('todoApp', [])
	.controller('todoListCtrl', function(){
		
		var todoList = this;
		
		todoList.todos = [
			{ text: 'learn angular', done:true},
			{ text: 'google maps API', done: false}
			];
		todoList.addTodo = function(){
			todoList.todos.push({text:todoList.todos.text, done:false});
			todoList.todos.text = '';
		};
		todoList.archive = function(){
			var finTodos = todoList.todos;
				todoList.todos= [];
				angular.forEach(finTodos, function(todo){
					if (!todo.done) todoList.todos.push(todo);
				})
		};
		todoList.clear = function(){
			var sure = confirm("Are you sure you want to clear all entries?");
			if (sure == true){todoList.todos = [];}
			
		};
		todoList.undo = function(){
			todoList.todos.pop();

		};

	});