import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers);
// 만든 리듀서로 스토어 생성

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // Provider 로 모든 앱에 제공
  // connect에 쓰임
  document.getElementById('root')
);
