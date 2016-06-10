import { connect } from 'react-redux'
import { toggleTodo, removeTodo, editTodo, saveTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoToggle: (id) => {
      dispatch(toggleTodo(id))
    },
    onTodoRemove: (id) => {
      dispatch(removeTodo(id))
    },
    onTodoEdit: (id) => {
      dispatch(editTodo(id))
    },
    onTodoSave: (id, text) => {
      dispatch(saveTodo(id, text))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
