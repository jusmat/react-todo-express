import React, { PropTypes } from 'react'
import TodoField from './TodoField'

const Todo = ({ toggle, remove, edit, save, completed, text, editing }) => (
  <div className="row styled-row">
    <div className="col s3 m4 l2">
      <div className='status'>
        <input type="checkbox" checked={completed} /><label for="item" onClick={toggle}></label>
      </div>
    </div>
    <div className="col s6 m4 l8">
      <TodoField
        text={text}
        edit={edit}
        editing={editing}
        save={save}
      />
    </div>
    <div className="col s3 m4 l2">
      <div className='actions'>
        <i className='material-icons' onClick={remove}>delete</i>
      </div>
    </div>
  </div>
)

Todo.propTypes = {
  toggle: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired
}

export default Todo
