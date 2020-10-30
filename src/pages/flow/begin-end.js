import React from 'react'

function App (props) {
  const { type, beginInterview, submitAnswer } = props
  const data = {
    begin: {
      title: '即将开始语音答题',
      desc: '说得越清晰，识别更准确哦',
      btn: '准备好了，立即开始',
      action: beginInterview,
      content: <div className='example'>
        <img src='./assets/images/example.png' />
      </div>
    },
    end: {
      title: '恭喜你，答题完成',
      desc: '已打包你的音频，请提交',
      btn: '立即提交',
      action: submitAnswer,
      content: <div><img src='./assets/images/package.png' /></div>
    }
  }
  const info = data[type]
  return (
    <div className='begin' id={type}>
      <p className='title'> {info.title}</p>
      <p className='desc'> {info.desc} </p>
      {info.content}
      <button className='btn' onClick={info.action}>{info.btn}</button>
    </div>
  )
}

export default App