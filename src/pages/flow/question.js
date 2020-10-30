import React, { useState, useEffect } from 'react'
import './index.css'

function App (props) {
  const [questionList, setQuestionList] = useState([])
  const [qIndex, setQIndex] = useState(0)
  const { finishInterview, startRecord, endRecord } = props
  useEffect(() => {
    requestQuestionList()
  }, [])

  function requestQuestionList () {
    const list = [{
      title: '专业技能',
      question: '下列哪项属于大陆法系的渊源？'
    }, {
      title: '专业技能',
      question: '依法享有对直辖市中级人民法院院长任免权的机关是哪个？'
    }, {
      title: '专业技能',
      question: '《老年人权益保障法》第十八条规定，家庭成员应当关心老年人的精神需求，不得忽视、冷落老年人，其中是否有规定法律后果。'
    }, {
      title: '专业技能',
      question: '按标的额比例收费时，同一诉讼案，曾代理一审再代理二审的，二审律师费应按一审标准的百分之几收取？'
    }, {
      title: '专业技能',
      question: '房地产抵押合同自签订之日起多少日内，抵押当事人应当到房地产所在地的房地产管理部门办理房地产抵押登记？'
    }]
    setQuestionList(list)
  }
  function nextQuestion () { // 下一题
    if (questionList.length === qIndex + 1) {
      finishInterview && finishInterview()
      return
    }
    setQIndex(qIndex + 1)
    props.setCurrentAnswer('')
  }

  function hangUp () { // 挂断，跳转回首页
    global.location.href = '/'
  }

  if (questionList.length <= 0) {
    return null
  }

  return (
    <div className='begin' id='question'>
      <img className='begin-head-img' src='./assets/images/xiaoa.png' />
      <p className='title'> {questionList[qIndex].title} </p>
      <div className='q-item'>
        <p className='q-ques'>{`${qIndex + 1}. ${questionList[qIndex].question}`}</p>
        <div style={{ marginBottom: '.05rem' }}>
          <img src='./assets/images/0000.png' style={{ width: '.4rem' }} />
          {/* <img src='./assets/images/audio.gif' /> */}
        </div>
        {
          props.currentAnswer &&
          <div className='q-answer'>{props.currentAnswer}</div>
        }
      </div>
      <div className='bottom-action'>
        <div className='hang-up-btn fl' onClick={hangUp}><img src='./assets/images/hangup.png' /></div>
        <button className='b-btn' onMouseEnter={startRecord} onClick={endRecord}>按住回答</button>
        <div className='hang-up-btn fr' onClick={nextQuestion}><img src='./assets/images/next.png' /></div>
      </div>
    </div>
  )
}

export default App
