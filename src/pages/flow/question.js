import React ,{useState,useEffect}from 'react';
import './index.css'

function App(props) {
  const [questionList,setQuestionList] =useState([])
  const [qIndex,setQIndex] =useState(0)
  const {finishInterview,startRecord,endRecord} =props
  useEffect(()=>{
    requestQuestionList()
  },[])

  function requestQuestionList(){
    const list = [{
      title:'基础信息',
      question:'您应聘的岗位是？',
    },{
      title:'专业技能',
      question:'什么是闭包，闭包有什么作用？',
    },{
      title:'专业技能',
      question:'es6新特性（es6语法糖)是什么？',
    },{
      title:'专业技能',
      question:'js继承原理是什么？',
    },{
      title:'专业技能',
      question:'cookie，sessionstorage和localstorage的区别是什么？',
    },{
      title:'专业技能',
      question:'如何实现下拉刷新上拉加载？',
    },{
      title:'专业技能',
      question:'同源策略是什么？',
    }]
    setQuestionList(list)
  }
  function nextQuestion(){ //下一题
    if(questionList.length===qIndex+1){
      finishInterview && finishInterview()
      return
    }
    setQIndex(qIndex+1)
  }

  function hangUp(){ //挂断，跳转回首页
    global.location.href='/'
  }

  
  
  if(questionList.length<=0){
    return null
  }

  return ( <div className='begin' id='question'>
      <p className='title'> {questionList[qIndex].title} </p> 
      <div className='q-item'>
        <p className='q-ques'>{`${qIndex+1}. ${questionList[qIndex].question}`}</p>
        <div className='q-answer'>audio</div>
      </div>
      <div className='video-box'> 
       video
      </div>
      <div className='bottom-action'>
        <div className='hang-up-btn fl' onClick={hangUp}><img src='./assets/images/hangup.png'/></div>
        <button className='b-btn' onTouchStart={startRecord}  onTouchEnd={endRecord}>按住回答</button>
        <div className='hang-up-btn fr' onClick={nextQuestion}><img src='./assets/images/next.png'/></div>
      </div>
      </div>
  )
}

export default App