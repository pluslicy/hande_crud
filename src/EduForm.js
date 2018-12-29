import React, { Component } from 'react';
import './EduForm.css'
import store from './store';

import {
  removeEdu,
  updateEdu
} from './store/action'

class EduForm extends Component {
  constructor(props){
    super(props);
    // 绑定受控组件
    this.state = {
      period:'',
      school:'',
      begin_end_time:'',
      first_major:'',
      first_gpa:'',
      first_rank:'',
      second_major:'',
      second_gpa:''
    }
  }
  // 组件绑定阶段
  componentDidMount(){
    this.setState({
      index:this.props.initForm.index
    })
  }
  // 处理受控组件绑定
  handleChange=(event)=>{
    let key = event.target.name;
    let val = event.target.value;
    this.setState({
      [key]:val
    })
  }
  // 删除当前经历
  handleDeleteEdu = (event)=>{
    let index = this.props.initForm.index;
    store.dispatch(removeEdu(index))
    event.preventDefault();
  }

  // 校验保存当前经历
  handleValidateSave = ()=>{
    // 校验
    if(this.state.period 
      &&this.state.school
      &&this.state.begin_end_time
      &&this.state.first_major
      &&this.state.first_gpa
      &&this.state.first_rank ){
      // 校验完成将数据维护到redux中
      store.dispatch(updateEdu(this.state));
      return true;
    } else {
      alert('请填写完整表单');
      return false;
    }
  }

  render(){
    // 条件渲染删除按钮
    let showDel = ()=>{
      if(this.state.index !==1){
          return <div className="delbtn">
            <a href="a" onClick={this.handleDeleteEdu}>删除</a>
          </div>
        }
    }
    return (
      <div className='edu_form'>
        {/* {JSON.stringify(this.state)} */}
        { showDel() }
        <form action="#">
          <div className="row">
            <div className="col-2 title require">教育阶段：</div>
            <div className="col-4"><input type="text" name='period' value={this.state.period} onChange={this.handleChange}/></div>
          </div>
          <div className="row">
            <div className="col-2 title require">学校：</div>
            <div className="col-4"><input type="text" name='school' value={this.state.school} onChange={this.handleChange}/></div>
          </div>
          <div className="row">
            <div className="col-2 title require">起止时间：</div>
            <div className="col-10"><input type="text" name='begin_end_time' value={this.state.begin_end_time} onChange={this.handleChange}/></div>
          </div>
          <div className="row">
            <div className="col-2 title require">第一学位专业：</div>
            <div className="col-4"><input type="text" name='first_major' value={this.state.first_major} onChange={this.handleChange}/></div>
            <div className="col-2 title require">第一学位GPA：</div>
            <div className="col-4"><input type="text" name='first_gpa' value={this.state.first_gpa} onChange={this.handleChange}/></div>
          </div>
          <div className="row">
            <div className="col-2 title require">第一学位排名：</div>
            <div className="col-4"><input type="text" name='first_rank' value={this.state.first_rank} onChange={this.handleChange}/></div>
          </div>
          <div className="row">
            <div className="col-2 title">第二学位专业：</div>
            <div className="col-4"><input type="text" name='second_major' value={this.state.second_major} onChange={this.handleChange}/></div>
            <div className="col-2 title">第二学位GPA：</div>
            <div className="col-4"><input type="text" name='second_gpa' value={this.state.second_gpa} onChange={this.handleChange}/></div>
          </div>
        </form>
      </div>
    )
  }
}

export default EduForm;