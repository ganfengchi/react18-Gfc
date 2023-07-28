import { legacy_createStore, combineReducers, compose, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
// import reducer from './reducer'
import handleNum from './NumStates/reducer'
import handleArr from './ArrStatus/reducer'

const reducer = combineReducers({
    handleNum,
    handleArr
})
// //创建数据仓库
// const store = legacy_createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//异步
//判断有没有 __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 模块
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const store =legacy_createStore(reducer,composeEnhancers(applyMiddleware(reduxThunk)))

export default store