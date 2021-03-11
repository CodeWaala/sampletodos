import React, { Component } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

class InputTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange = (e) => {
      const {value} = e.target;
      this.setState({
          title: value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      //console.log(this.state.title);
      //pass this information to TodoContainer to handle and update the state
      const {addTodoItem} = this.props;
      const {title} = this.state;
      addTodoItem(title);
    }

    render() {
        let {title} = this.state;
        return (
                <form className="input-form" onSubmit={this.handleSubmit}>
                    <input className="input-text" type="text" placeholder="Add Todo..." value={title} onChange ={this.onChange}/>
                    <button className="input-submit" type="submit" value="Submit">
                    <FaPlusCircle
                         style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}/>
                    </button>
                </form>
        )
    }
}

export default InputTodo;
