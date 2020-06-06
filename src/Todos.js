import React from 'react';

//function Todos({todolist, deleteTodo}){
const Todos = ({todolist, deleteTodo}) =>{
    var todoz = todolist.length ? 
   
    (todolist.map(todo =>{
        return (
            <div className="todo-list center" key={todo.id}>
                <span onClick={() => deleteTodo(todo.id)}>{todo.content}</span>
            </div>
        )
    })) : (<p className="center">You have no todo's left, yay!</p>)

    return(
        <div className="todos collection">
            {todoz}
        </div>
    )
}

export default Todos