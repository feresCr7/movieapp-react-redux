import {createStore} from 'redux'
import rootReducers from './Reducers'
let Store = createStore (rootReducers ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default Store ;