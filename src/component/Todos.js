import React, { Component } from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        return (
            <div>
                { this.props.todos.map( (todo) => (
                    <Todo key={todo.id} todo={todo} markComplete={this.props.markComplete}
                        delTodo={this.props.delTodo}/>
                )
                ) }
            </div>
        );
    }
}

Todos.prototype = {
    todos: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;