import React,{useState,Fragment} from 'react';
import './index.css'
import BeginEnd from './begin-end'
import Question from './question'

// begin question end
function App(props) {
  const [type, setType] = useState('begin')
 
  function beginInterview(){
   
      
    setType('question')
  }
  function submitAnswer(){

  }


   
  return ( <Fragment >
  {type==='question' ? 
   <Question  finishInterview={()=>{setType('end')}} /> :  
   <BeginEnd type={type} beginInterview={beginInterview} submitAnswer={submitAnswer}/>
   }
  </Fragment>
  )
}

export default App