import React, { useState, Fragment } from 'react';
import BeginEnd from './begin-end';
import Question from './question';
import './index.css'
import Axios from 'axios';

let socketR
// 1、下列哪项属于大陆法系的渊源？答：自由大宪章
// 2、依法享有对直辖市中级人民法院院长任免权的机关是哪个？答：直辖市人民代表大会
// 3、《老年人权益保障法》第十八条规定，家庭成员应当关心老年人的精神需求，不得忽视、冷落老年人，其中是否有规定法律后果。答：有。
// 4、按标的额比例收费时，同一诉讼案，曾代理一审再代理二审的，二审律师费应按一审标准的百分之几收取？答：50%。
// 5、房地产抵押合同自签订之日起多少日内，抵押当事人应当到房地产所在地的房地产管理部门办理房地产抵押登记？答：30日内。
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

// begin question end
function App (props) {
  const [type, setType] = useState('begin')
  const [recorder, setRecorder] = useState(null)
  const [currentAnswer, setCurrentAnswer] = useState(null)
  const [allAnswer, setAllAnswer] = useState([])

  // lexer: {v: ["你好", "是", "来", "励志", "开发", "有"], n: ["你好", "潜能", "岗位", "工作经验"], nr: [], a: [], url: "",…} //分词
  // // v 动词 n是名词  nr是人名，a是形容词
  // a: []
  // emo: {log_id: 6613346083963945000, text: "哎，你好，那时候你好，我是来励志潜能开发岗位的，我已经有五年的工作经验了。",…}
  // // confidence: 0.124634  自信程度， 波形算法，越大越自信， 0-1
  // // negative_prob: 0.393915 词性正向 0-1
  // // positive_prob: 0.606085 词性负向 0-1
  // // sentiment: 2 情绪化程度，忽略
  // text: "哎，你好，那时候你好，我是来励志潜能开发岗位的，我已经有五年的工作经验了。"
  // n: ["你好", "潜能", "岗位", "工作经验"]
  // nr: []
  // url: ""
  // v: ["你好", "是", "来", "励志", "开发", "有"]
  // result: "哎，你好，那时候你好，我是来励志潜能开发岗位的，我已经有五年的工作经验了。"

  const beginInterview = () => {
    socketR = new WebSocket('wss://www.luotuortc.com:9938') // 这个是封装的 语音识别服务
    socketR.onopen = function (event) {
      console.log('connection OK')
      setType('question')
    }
    socketR.onmessage = function (msg) {
      console.log(2222)
      // 语音识别的返回
      const resData = JSON.parse(msg.data)
      const {lexer = {}, result} = resData
      const {v, n, nr, a, emo} = lexer
      let items = (emo.items && emo.items[0]) || {}
      let { confidence, negative_prob, positive_prob } = items
      let dom1 = <div>----您的答案----：{result}</div>
      let dom2 = <div>
        <p>----词性分析----</p>
        <p>动词：{v.toString()}</p>
        <p>名词：{n.toString()}</p>
        <p>人名：{nr.toString()}</p>
        <p>形容词：{a.toString()}</p>
      </div>
      let dom3 = <div>
        ----情感分析----<br />
        自信心：{confidence}<br />
        词性正向: {negative_prob}<br />
        词性负向: {positive_prob}<br />
      </div>
      let resultData = <Fragment>
        {dom1}
        {dom2}
        {dom3}
      </Fragment>
      setCurrentAnswer(resultData)
      allAnswer.push(msg)
      setAllAnswer(allAnswer)
      console.log('语音识别的返回:', resData.result, currentAnswer)
    }
    let recorderR = new window.Recorder({
      sampleBits: 16, // 采样位数，支持 8 或 16，默认是16
      sampleRate: 16000, // 采样率，支持 11025、16000、22050、24000、44100、48000，根据浏览器默认值，我的chrome是48000
      numChannels: 1, // 声道，支持 1 或 2， 默认是1
      compiling: false // 是否边录边转换，默认是false
    })
    setRecorder(recorderR)
    recorderR.onprogress = function (params) {
      // 这是波形图，情绪算法需要用到这个ß
      const dataArray = recorderR.getRecordAnalyseData()
      console.log(dataArray, 'data')
    }
  }

  const startRecord = () => {
    console.log(1111)
    recorder && recorder.start() // 开始录音
  }

  const endRecord = () => {
    recorder && recorder.stop() // 停止录音
    console.log(2321313)
    let blob = recorder.getPCMBlob()
    console.log(blob)
    socketR.send(blob)
  }

  // 回答完毕提交答案和视频
  function submitAnswer () {
    let data = sessionStorage.getItem('data')
    Axios.post('http://localhost:8888/api/save', {
      ...data,
      question: JSON.stringify(list),
      answer: JSON.stringify(allAnswer)
    }).then((rs) => {
      if (rs.success) {
        console.log('提交成功')
        this.props.history.push({
          pathname: '/submit-success'
        })
      }
    })
  }

  function setCurrentAnswerFn () {
    setCurrentAnswer(null)
  }

  return (<Fragment>
    {
      type === 'question'
        ? <Fragment>
          <Question finishInterview={() => { setType('end') }}
            startRecord={startRecord}
            endRecord={endRecord}
            currentAnswer={currentAnswer}
            setCurrentAnswer={setCurrentAnswerFn}
          />
        </Fragment>
        : <BeginEnd type={type} submitAnswer={submitAnswer} beginInterview={beginInterview} />
    }
  </Fragment>
  )
}

export default App
