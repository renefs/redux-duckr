import React from 'react'
import ReactDOM from 'react-dom'
import getRoutes from 'config/routes'
import users from 'redux/modules/users'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { checkIfAuthed } from 'helpers/auth'

const store = createStore(users, applyMiddleware(thunk))

function checkAuth (nextState, replace) {
  const isAuthed = checkIfAuthed(store)
  console.log('Is authed: ', isAuthed)
  const nextPathName = nextState.location.pathname
  console.log('Nex path name: ', nextPathName)
  if (nextPathName === '/' || nextState === '/auth') {
    if (isAuthed === true) {
      replace('/feed')
    } else {
      if (isAuthed !== true) {
        replace('/auth')
      }
    }
  }

}

ReactDOM.render(
  <Provider store={store}>
    {getRoutes(checkAuth)}
  </Provider>,
  document.getElementById('app'))

