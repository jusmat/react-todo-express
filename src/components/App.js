import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className="container">
      <div className="row">
          <div className="col s12 center">
              <ul className="collection with-header">
                  <li className="collection-header">
                    <AddTodo />
                  </li>
                  <div id='listComponent'>
                    <VisibleTodoList />
                  </div>
              </ul>
              <Footer />
          </div>
      </div>
  </div>
)

export default App
