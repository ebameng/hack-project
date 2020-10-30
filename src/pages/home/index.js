import React from 'react';
import { Button } from 'antd-mobile';
import './index.css'

function App (props) {
  return (
    <div className='wrap'>
      <img className='aiimg' src='./assets/images/ai@2x.png' />
      <h1 className='tile'>ZA-AI面试官</h1>
      <div className='content'>
        <p><img src='' />拍个小视频即可完成面试</p>
        <p><img src='' />拍个小视频即可完成面试</p>
        <p><img src='' />拍个小视频即可完成面试</p>
      </div>
      <Button>default</Button>
    </div>
  )
}

export default App
