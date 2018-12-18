import React, { Component } from 'react';
import EduForm from './EduForm';
import store from './store';
import {connect} from 'react-redux'
import {
  toAddEdu
} from './store/action'

import './Hande.css'
class Hande extends Component {

  // 添加教育经历
  handleAddEdu = ()=>{
    store.dispatch(toAddEdu())
  }
  // 提交教育经历
  handleCommitEdu = ()=>{
    console.log('commit...',this.props.edus.list,this);
    let arr = []
    this.props.edus.list.forEach(item=>{
      let result = this.refs['form'+item.index].handleValidateSave.call(this)
      arr.push(result)
    })
    // 校验成功后保存
    if(arr.every(item=>item)){
      setTimeout(()=>{
        alert('校验完成！您将要保存的值为：'+JSON.stringify(this.props.edus.list));
      },100)
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

export default connect(state=>state)(Hande);
