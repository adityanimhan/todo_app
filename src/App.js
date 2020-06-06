import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';



class App extends Component{
  
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'buy some flowers'},
      {id: 3, content: 'make bed'}
    ]
  }

  deleteTodo = (id) =>{
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });    
  }

  addTodo = (todo) =>{
    var updTodo = [...this.state.todos]
    updTodo.push(todo)

    this.setState({
      todos: updTodo
    })

  }

  
  render(){
    return (
      <div className="todo=app container">
        
          <h1 className="center  blue-text">Todo List</h1>
          <Todos todolist={this.state.todos} deleteTodo={this.deleteTodo}/>
          <AddTodo addtodo={this.addTodo} />
      </div>
    );
  }
 
}

export default App;
