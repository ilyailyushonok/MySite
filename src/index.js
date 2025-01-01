
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
 // import reportWebVitals from './reportWebVitals';
import store, {addPostActionCreator, updateNewPostTextActionCreator} from "./redux/State";

const root = ReactDOM.createRoot(document.getElementById('root'));

 let rerender = (state) => {

    root.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)}
                addPostActionCreator={addPostActionCreator} updateNewPostTextActionCreator={updateNewPostTextActionCreator} />
        </React.StrictMode>
    );
}

rerender(store.getState())
store.subscribe(rerender)


