import {createStore} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer/index'

const store = createStore(
    rootReducer,
    0,
    composeWithDevTools( //<------------------------------------
        //applyMiddleware(thunk, logger)
    )
)


export default store
