import anecdoteReducer from './reducers/anecdoteReducer'
import notifReducer from './reducers/notifReducer'
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers } from 'redux'

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notif: notifReducer
})

const store = createStore(
    reducer,
    composeWithDevTools()
)

export default store

