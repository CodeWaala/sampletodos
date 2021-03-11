import React, { Component } from 'react';
import styles from './TodoItem.module.css';
import { FaTrash } from 'react-icons/fa';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          editing: false
        }
        this.handleUpdateDone = this.handleUpdateDone.bind(this);
    }

    handleEditing = () => {
        this.setState({
            editing: true,
       })
    }

    handleUpdateDone = event => {
        if (event.key === "Enter") {
            this.setState({ editing: false })
        }
    }

    render() {
    let viewMode = {}
    let editMode = {}
        
    if (this.state.editing) {
          viewMode.display = "none"
    } else {
          editMode.display = "none"
    }

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }
    const {todo,onChangeHandler,onDeleteClick, onUpdateItem} = this.props;
    return (
        <li className={styles.item} key={todo.id}>
            <div onDoubleClick={this.handleEditing} style={viewMode}>
                <input type="checkbox" 
                className={styles.checkbox}
                checked={todo.completed}
                onChange={() => onChangeHandler(todo.id)}
                />
                <button type="button" 
                value="Delete"
                className={styles.delete}
                onClick={() => onDeleteClick(todo.id)}
                >
                <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
                </button>
                <span style={todo.completed ? completedStyle : null }>{todo.title}</span>  
            </div>  
            <input type="text" style={editMode} className={styles.textInput} value={todo.title} 
            onChange={(e) => onUpdateItem(e.target.value, todo.id)} onKeyDown={this.handleUpdateDone}/>
        </li>
    )
    }
}

export default TodoItem;
