import React from 'react';
import './index.css'

function App(props) {
  const beginInterview=()=>{
     console.log('cccc')
  }
  return ( <div className='begin' id='question'>
      <p className='title'> 即将开始视频答题 </p> 
      <p className='desc'> 打开前置摄像头， 确保正对摄像头 </p> 
      <div className='example'> 
        <img src='./assets/images/example.png'/>
      </div>
      <div className='btn' onClick={beginInterview}>准备好了，立即开始</div>

      </div>
  )
}

export default App