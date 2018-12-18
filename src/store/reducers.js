import {
  TO_ADD_EDU,
  REMOTE_EDU,
  UPDATE_EDU
} from './action'

let initState = {
  num:1,
  list:[{
    index:1
  }]
}
export default function(state=initState,action){
  switch(action.type){
    case TO_ADD_EDU:
    // 添加
      return {
        ...state,
        list:[...state.list,{index:++state.num}]
      }
    case REMOTE_EDU:
    // 删除
      let index = action.index;
      let newList = state.list.filter(item=>{
        return item.index !== index;
      })
      return {
        ...state,
        list:[...newList]
      }
    case UPDATE_EDU: 
      // 更新
      let edu = action.payload;
      let result= state.list.map(item=>{
        if(item.index === edu.index){
          return edu
        }
        return item;
      })
      
      console.log('update....',result);
      return {
        ...state,
        list:[...result]
      }
      
    default :
      return state;
  }
}