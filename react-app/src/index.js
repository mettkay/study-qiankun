import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './public-path'
import { BrowserRouter } from 'react-router-dom'

let root = null;

function render(props) {
  let { container } = props
  let dom = container ? container.querySelector('#root') : document.getElementById('root')
  root = ReactDOM.createRoot(dom)
  root.render(
    <BrowserRouter basename='/react-app'>
      <App />
    </BrowserRouter>
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}

export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount(props) {
  // props.onGlobalStateChange((state, prev) => {
  //   console.log('111prev:', prev);
  //   console.log('111state:', state);
  // })
  // props.setGlobalState({ count: 2 })
  // props.setGlobalState({ count: 3 })
  render(props)
}

export async function unmount(props) {
  root.unmount()
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
