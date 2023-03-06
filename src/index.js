import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import App from './App'; */
import reportWebVitals from './reportWebVitals';
import UseState from './UseState';
/* import UseEffect from './UseEffect'; */
/* import UseRef from './UseRef'; */
/* import UseMemo from './UseMeno'  */ 
/* import UseReducer from './UseReducer' */
import UseContext from './UseContext'
import {ThemeProvider} from './UseContext/ThemeContext'
// fake comment
/* function emitCommnet(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(
        `lesson-${id}`, {
          detail: `Nội dung của lesson ${id}`
        })
    )
  }, 2000)
}
emitCommnet(1)
emitCommnet(2)
emitCommnet(3) */
/*  ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */ 
/* ReactDOM.render(
  <React.StrictMode>
    <UseState />
  </React.StrictMode>,
  document.getElementById('root')
); */
/* ReactDOM.render(
  <React.StrictMode>
    <UseEffect />
  </React.StrictMode>,
  document.getElementById('root')
); */
/* ReactDOM.render(
  <React.StrictMode>
    <UseRef />
  </React.StrictMode>,
  document.getElementById('root')
) */
/* ReactDOM.render(
  <React.StrictMode>
    <UseMemo />
  </React.StrictMode>,
  document.getElementById('root')
) */
/* ReactDOM.render(
  <React.StrictMode>
    <UseReducer />
  </React.StrictMode>,
  document.getElementById('root')
) */
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <UseContext />
    </ThemeProvider>   
  </React.StrictMode>,
  document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
