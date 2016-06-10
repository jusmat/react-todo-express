import expect from 'expect'
import reducer from '../src/reducers/todos'

describe('todos reducer', () => {
  describe('ADD_TODO', () => {
    it('inserts todo into state', () => {
      expect(
        reducer([], {
          type: 'ADD_TODO',
          text: 'Watch game of thrones',
          id: 0
        })
      ).toEqual(
        [
          {
            text: 'Watch game of thrones',
            completed: false,
            editing: false,
            id: 0
          }
        ]
      )
    })
  })

  describe('TOGGLE_TODO', () => {
    it('togles complete flag', () => {
      expect(
        reducer([
          {
            text: 'Watch game of thrones',
            completed: false,
            editing: false,
            id: 0
          }
        ], {
          type: 'TOGGLE_TODO',
          id: 0
        })
      ).toEqual(
        [
          {
            text: 'Watch game of thrones',
            completed: true,
            editing: false,
            id: 0
          }
        ]
      )
    })
  })

  describe('EDIT_TODO', () => {
    it('it marks todo as being edited', () => {
      expect(
        reducer([
          {
            text: 'Watch game of thrones',
            completed: false,
            editing: false,
            id: 0
          }
        ], {
          type: 'EDIT_TODO',
          id: 0
        })
      ).toEqual(
        [
          {
            text: 'Watch game of thrones',
            completed: false,
            editing: true,
            id: 0
          }
        ]
      )
    })
  })
  describe('SAVE_TODO', () => {
    it('it marks todo as not being edited anymore', () => {
      expect(
        reducer([
          {
            text: 'Watch game of thrones',
            completed: false,
            editing: true,
            id: 0
          }
        ], {
          type: 'SAVE_TODO',
          id: 0,
          text: 'Watch game of thrones'
        })
      ).toEqual(
        [
          {
            text: 'Watch game of thrones',
            completed: false,
            editing: false,
            id: 0
          }
        ]
      )
    })

    it('it changes name of todo', () => {
      expect(
        reducer([
          {
            text: 'Watch game of thrones',
            completed: false,
            editing: true,
            id: 0
          }
        ], {
          type: 'SAVE_TODO',
          id: 0,
          text: 'Watch Home alone series'
        })
      ).toEqual(
        [
          {
            text: 'Watch Home alone series',
            completed: false,
            editing: false,
            id: 0
          }
        ]
      )
    })
  })
})
