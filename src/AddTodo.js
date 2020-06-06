import React, { Component } from 'react'

class AddTodo extends Component{
    
    state = {
        id:'', content:''
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addtodo(this.state)
        this.setState({
            id:'',
            content: ''
          })
    }

    handleChange =(e) =>{
        this.setState({
            id: Math.random(),
            content: e.target.value
        })
    }

    render()
    {
        return (
            <form className="new-todo" onSubmit={this.handleSubmit}>
            <label>Add a new todo:</label>    
                <input type="text" onChange={this.handleChange} 
                value={this.state.content}
                placeholder="enter todo item"></input>
                <button>Submit</button>
            </form>

        )
    }

}

export default AddTodo