import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga'
import saga from './sagas';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(saga);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();