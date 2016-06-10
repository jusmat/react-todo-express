import React, { PropTypes } from 'react'

const TodoField = ({ editing, text, edit, save }) => {
  let input

  if (editing) {
    return (
      <div className='title'>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          save(input.value)
        }}>
          <input className='editable' defaultValue={text} ref={node => {
            input = node
          }} />
        </form>
      </div>
    )
  }
  return (
      <div className='title' onClick={edit}>{text}</div>
  )
}

TodoField.propTypes = {
  editing: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  edit: PropTypes.func.isRequired
}

export default TodoField
