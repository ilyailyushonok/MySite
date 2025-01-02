
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
 // import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import {addPostActionCreator, updateNewPostTextActionCreator} from './redux/profile-reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));

 let rerender = (state) => {

    root.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store}
                addPostActionCreator={addPostActionCreator} updateNewPostTextActionCreator={updateNewPostTextActionCreator} />
        </React.StrictMode>
    );
}

rerender(store.getState())
store.subscribe(()=>{
    let state = store.getState();
    rerender(state);
})


