import React from 'react';
import './index.css'

function App(props) {
  const beginInterview=()=>{
     console.log('cccc')
  }
  return ( <div className='begin' id='question'>
      <p className='title'> 基础信息 </p> 
      <div className='q-item'>
        <p className='q-ques'>1. 您应聘的岗位是？</p>
        <div className='q-answer'>ccc</div>
      </div>
      <div className='video-box'> 
       xxxx
      </div>
      <div className='bottom-action'>
        <div className='hang-up-btn'><img src='./assets/images/hangup.png'/></div>
        <div className='b-btn' onClick={beginInterview}>准备好了，立即开始</div>
      </div>
     

      </div>
  )
}

export default App