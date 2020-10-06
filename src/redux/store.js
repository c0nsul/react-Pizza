import {createStore, applyMiddleware} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer/index'
import thunk from 'redux-thunk'
//import logger from 'react-logger'

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)


export default store
