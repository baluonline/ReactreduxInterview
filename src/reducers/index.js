import currentUser from './currentUser'
import counter from './counter'
import usersReducers from './userReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    currentUser,
    counter,
    usersReducers
})

export default rootReducer