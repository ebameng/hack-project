import React from 'react';
import { Button } from 'antd-mobile';
import './index.css'

function App (props) {
  return (
    <div className='wrap'>
      <div className='img-wrap'>
        <img className='aiimg' src='./assets/images/ai@2x.png' />
      </div>
      <h1 className='title'>ZA-AI面试官</h1>
      <div className='content'>
        <p className='content-item'><img src='./assets/images/home1.svg' />拍个小视频即可完成面试</p>
        <p className='content-item'><img src='./assets/images/home2.svg' />拍个小视频即可完成面试</p>
        <p className='content-item'><img src='./assets/images/home3.svg' />拍个小视频即可完成面试</p>
      </div>
      <Button type='primary' className='home-btn' onClick={() => {
        props.history.push({
          pathname: '/form'
        })
      }}>立即体验</Button>
    </div>
  )
}

export default App
