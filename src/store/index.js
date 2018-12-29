import {createStore ,combineReducers,applyMiddleware} from 'redux';
import edus from './reducers'
// redux-saga中间件
import createSagaMiddleware from 'redux-saga'; 
import rootSaga from './saga'

const rootReducer = combineReducers({
  edus
})
// 生成saga中间件
const sagaMiddleware = createSagaMiddleware(rootSaga) 

// 创建仓库
let store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);
// 运行saga
sagaMiddleware.run(rootSaga)

export default store;