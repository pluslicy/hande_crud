// import { delay } from 'redux-saga'
import { call,takeEvery } from 'redux-saga/effects'
import axios from 'axios'
// 定义常量
import {
  COMMIT_EDU
} from './action'

function saveEdu(param){
  let url = 'http://127.0.0.1:8888/edu';
  return axios.post(url,param);
}

export function* commitEdu(action) {
  console.log('...',action.payload);
  // yield call(delay,2000);
  let result = yield call(saveEdu,action.payload);
  console.log('saga-commit:',result);
  // yield put({type:'TO_ADD_EDU'})
}

function* rootSaga() {     // 在store.js中，执行了 sagaMiddleware.run(rootSaga)
  yield takeEvery(COMMIT_EDU, commitEdu)   // 如果有对应type的action触发，就执行goAge()函数
}

export default rootSaga;