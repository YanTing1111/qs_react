import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createStore , applyMiddleware } from 'redux' 
import { createLogger } from 'redux-logger'
// action处理 异步 reducer
// action处理 -> reducer（oldState,data）->返回一个新状态
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker';

const middleware = [ thunk ]
middleware.push(createLogger())

const store = createStore(reducer.applyMiddleware(...middleware))

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
