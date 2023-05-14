import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import PostReducer from './redux/reducers/PostReducer';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(PostReducer, composeWithDevTools())
root.render(
  <React.StrictMode>
    
    <Provider store={store}>
        <App />
    </Provider>
    
  </React.StrictMode>
);


reportWebVitals();
