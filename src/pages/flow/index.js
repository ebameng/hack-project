import React,{useState,Fragment} from 'react';
import axios from 'axios';
import BeginEnd from './begin-end';
import Question from './question';
import './index.css'


// begin question end
function App(props) {
  const [type, setType] = useState('begin')



  let aliWebrtc = new window.AliRtcEngine(); //实例化
  let recorderR = new window.Recorder({
    sampleBits: 16, // 采样位数，支持 8 或 16，默认是16
    sampleRate: 16000, 
    numChannels: 1, // 声道，支持 1 或 2， 默认是1
    compiling: false, // 是否边录边转换，默认是false
});

 
  function beginInterview(){
    let socketR = new WebSocket('wss://www.luotuortc.com:9938'); // 这个是封装的 语音识别服务
    socketR.onopen = function(event) {
        console.log("connection OK");
        setType('question')
    }
    socketR.onmessage = function(msg) {
        // 语音识别的返回
        const resData = JSON.parse(msg.data);
        console.log('语音识别的返回:',resData.result)
    }
    recorderR.onprogress = function(params) {
        // 这是波形图，情绪算法需要用到这个 
        const dataArray = recorderR.getRecordAnalyseData();
    }
   
    /**
     * AliWebRTC isSupport检测
     */
    aliWebrtc.isSupport().then(re => { //检测浏览器是否支持RTC SDK
       // init();
    }).catch(error => {
        alert(error.message);
    })
    
  }

 function startRecord(){
  recorderR.start(); //开始录音
  }

  function endRecord(){
    recorderR.stop() //停止录音
  }


  

  







  //回答完毕提交答案和视频
  function submitAnswer(){

  }


   
  return ( <Fragment >
  {type==='question' ? 
   <Question  finishInterview={()=>{setType('end')}}  startRecord={startRecord} endRecord={endRecord}/> :  
   <BeginEnd type={type} beginInterview={beginInterview} submitAnswer={submitAnswer}/>
   }
  </Fragment>
  )
}

export default App