import React, { Component } from 'react';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends Component {
    constructor(props) {
      super(props) ;
      this.state = {
        todos: [
            {
              id: uuidv4(),
              title: "Setup development environment",
              completed: true
            },
            {
              id: uuidv4(),
              title: "Develop website and add content",
              completed: false
            },
            {
              id: uuidv4(),
              title: "Deploy to live server",
              completed: false
            }
          ]
      }
      this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        // fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
        // .then(response => response.json())
        // .then(data => this.setState({todos: data}))

        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if (loadedTodos) {
          this.setState({
            todos: loadedTodos
          })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.todos !== this.state.todos){
          const temp = JSON.stringify(this.state.todos);
          localStorage.setItem("todos", temp);
        }
    }

    componentWillUnmount() {
        console.log("unmounting");
    }

    onChange = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
              if (todo.id === id) {
                return {
                    ...todo,
                    completed : !todo.completed
                }
              }
              return todo
            }),
        }))
    }

    onDelete = (id) => {
       this.setState({
           todos : [
               ...this.state.todos.filter(todo => {
                   return todo.id !== id;
               })
           ]
       })
    }

    handleAddTodoItem = (title) => {
       const newTodo = {
           id: uuidv4(),
           title: title,
           completed: false
       };

       this.setState({
           todos : [...this.state.todos, newTodo]
       });
    }

    setUpdate= (updatedTitle,id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
              if (todo.id === id) {
                todo.title = updatedTitle
              }
              return todo
            }),
          })
    }

    render() {
        let {todos} = this.state;
        return (
          <div className="main-container">
           <div className="inner-container">
            <Header/>
            <InputTodo addTodoItem={this.handleAddTodoItem} />
            <TodosList onChange={this.onChange} onDelete={this.onDelete} todos={todos} setUpdate={this.setUpdate}/>
           </div>
          </div>
        )
    }
}

export default TodoContainer;
