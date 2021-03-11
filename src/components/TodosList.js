import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodosList extends Component {
    render() {
        let {todos, onChange, onDelete, setUpdate} = this.props;
            return(
                    <ul className="list-container">
                        {todos.map((item,i) => {
                            return(
                              <TodoItem onChangeHandler={onChange} onDeleteClick={onDelete} onUpdateItem={setUpdate}
                               key={i} todo={item} />
                            )
                        })}
                    </ul>
                 )
        }
}

export default TodosList;

