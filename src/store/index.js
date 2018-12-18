import {createStore ,combineReducers} from 'redux';
import edus from './reducers'

const rootReducer = combineReducers({
  edus
})

let store = createStore(rootReducer);
export default store;