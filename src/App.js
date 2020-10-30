import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './media.css';

function App() {
  const [state , setState] = useState({
    name: 'lxfriday',
    age: 10,
    school: 'hzau',
  });
  
  console.log('render');

  return (
    <div className="App">
      <div class="login portlet">
        <div class="main portlet-body">
            <div class="jumbotron col-md-4 col-md-offset-4" >
                <div class="container">
                <div class="main-title">
                  <h2>欢迎光临骆驼</h2>
                </div>
                <br />
                <div class="form-group">
                <div class="main-input">
                  <input class="form-control" type="text" placeholder="请输入房间号" />
                </div>
                <br />
                <div class="name-input">
                  <input class="form-control" type="text" id="name" placeholder="请输入您的名字" />
                </div>
                <br />
                <div class="main-button">
                  <button class=" btn btn-primary ">进入房间</button>
                </div>
              </div>
            </div>
          </div>
      </div>
      {/* <div class="main-web" style="display: none;">

        <nav class="navbar navbar-default">
            <div class="container-fluid">
              <div class="navbar-header">
               
                <div class="local-display-name pull-right">
                    <span class="username">用户: <b></b></span>
                    <span class="channelid">房间号: <b></b></span>
                    <span class="streamstate">推流状态：<b></b></span>
                </div>
               
              </div>
            </div>
          </nav>

        <div class="row">
            <div class="col-md-3 blokUser">
                <div class="remote-user-list">
                  
                    <ul class="user-ul list-group"></ul>
                </div>
            </div>
            <div class="col-md-7">

                <div class="container-box">
                   
                    <div class="publisher">
                        <button class="select-preview">关闭预览</button>
                        <button class="push-stream">处理中...</button>&nbsp;&nbsp;
                        {/* <span class="streamType" style="display: none;">
                            <label for="cameraPublisher">推视频流</label>
                            <input 
                                id="cameraPublisher"
                                value="cameraPublisher"
                                type="checkbox"
                                name="streamType"
                                checked
                            />&nbsp;
                            <label for="screenPublish">推共享流</label>
                            <input
                                id="screenPublish"
                                value="screenPublish"
                                type="checkbox"
                                name="streamType"
                            />
                        </span>
                    </div>
                    <div class="local-video">
                        <video autoplay playsinline></video>
                    </div>
                </div>

                <div class="video-container"></div>


            </div>

            <div class="col-md-2" id="talk">

            </div>
        </div>  
      </div>
      <div class="alert"></div> */}
    </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          name: { state.name } <br/>
          age: { state.age } <br/>
          school: { state.school } <br/>

          <button onClick={() => setState(prev => ({ ...prev, name: 'John' }))}>change name</button>
          <button onClick={() => setState(prev => ({ ...prev, age: 100 }))}>change age</button>
          <button onClick={() => setState(state)}>change to the same state</button>
        </p>
      </header> */}
    </div>
  );
} 

export default App;
