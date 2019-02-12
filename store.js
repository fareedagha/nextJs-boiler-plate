import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import auth from './store/reducer/auth'


export function initializeStore () {
  return createStore(
    auth,
    {},
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
