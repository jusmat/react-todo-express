const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
        editing: false,
      }

    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    case 'EDIT_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        editing: !state.editing
      })

    case 'SAVE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        editing: !state.editing,
        text: action.text
      })


    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
      
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )

    case 'REMOVE_TODO':
      return state.filter((t) => t.id != action.id)

    case 'EDIT_TODO':
      return state.map(t =>
        todo(t, action)
      )

    case 'SAVE_TODO':
      return state.map(t =>
        todo(t, action)
      )

    default:
      return state
  }
}

export default todos
