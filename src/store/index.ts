import { legacy_createStore, combineReducers } from 'redux'
// import reducer from './reducer'
import handleNum from './NumStates/reducer'
import handleArr from './ArrStatus/reducer'

const reducer = combineReducers({
    handleNum,
    handleArr
})
//创建数据仓库
const store = legacy_createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store