import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoToggle, onTodoRemove, onTodoEdit, onTodoSave }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        toggle={() => onTodoToggle(todo.id)}
        remove={() => onTodoRemove(todo.id)}
        edit={() => onTodoEdit(todo.id)}
        save={(text) => onTodoSave(todo.id, text)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    editing: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoToggle: PropTypes.func.isRequired,
  onTodoRemove: PropTypes.func.isRequired,
  onTodoEdit: PropTypes.func.isRequired,
  onTodoSave: PropTypes.func.isRequired
}

export default TodoList
