import React, { Component } from 'react';
import EduForm from './EduForm';
import store from './store';
import {connect} from 'react-redux'

import {
  toAddEdu,
  commitEdus
} from './store/action'

import './Hande.css'
class Hande extends Component {
  // 添加教育经历
  handleAddEdu = ()=>{
    store.dispatch(toAddEdu())
  }
  // 提交教育经历
  handleCommitEdu = ()=>{
    let arr = []
    this.props.edus.list.forEach(item=>{
      let result = this.refs['form'+item.index].handleValidateSave.call(this)
      arr.push(result)
    })
    // 校验成功后保存
    if(arr.every(item=>item)){
      let edus = store.getState().edus.list;
      alert('校验完成！您将要保存的值为：'+JSON.stringify(edus));
      let result = this.props.dispatch(commitEdus(edus));
      console.log('result',result);
    }
  }
  
  render(){
    return (
      <div className='hande'>
        <div>教育经历：</div>
        {/* {JSON.stringify(this.props.edus.list)} */}
        {
          this.props.edus.list.map((item,index)=>{
            return <EduForm key={index} initForm={item} ref={'form'+item.index}/>
          })
        }
        <div className='addEduBtn' onClick={this.handleAddEdu}>添加教育经历</div>
        <div className='btns'>
          <div className='button' onClick={this.handleCommitEdu}>保存并提交</div>
          <div className='button'>取消</div>
        </div>
      </div>
    )
  }
}

// 将redux与props绑定
export default connect(state=>state)(Hande);
