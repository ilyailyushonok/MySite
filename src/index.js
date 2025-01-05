import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import store from "./redux/redux-store";
import {Provider} from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));

 let rerender = () => {

    root.render(
        <React.StrictMode>
            <Provider store={store}>
            <App/>
            </Provider>
        </React.StrictMode>
    );
}

rerender(store.getState())

store.subscribe(()=>{
    let state = store.getState();
    rerender(state);
})


