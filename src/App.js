import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      students : [{
        id:1,
        name:'terry'
      }]
    }
  }


  render() {
    let {students} = this.state;
    return (
      <div className="App">
        {/* 标题 */}
        <h2 className='title'>学生信息管理</h2>
        {/* 操作栏 */}
        <div>
      
        </div>
        {/* 列表 */}
        <ul className='student_list'>
          {
            students.map((item,index)=>{
              return (
              <li key={item.id}>
                <span>{index}</span>
                {item.name}
              </li>)
            })
          }

        </ul>
        
      </div>
    );
  }
}

export default App;
