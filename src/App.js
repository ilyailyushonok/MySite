import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import Dialogs from "./components/dialogs/Dialogs";
import Profile from "./components/profile/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";

const App=(props)=>{
debugger

  return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header/>
          <NavBar/>

          <div className='app-wrapper-content'>
            <Routes>
              <Route path="/profile/*" element={<Profile postsData={props.postsData}/>}/>
              <Route path="/dialogs/*" element={<Dialogs messagesData={props.messagesData} dialogsData={props.dialogsData}/>}/>
              <Route path="/news" element={<News/>}/>
              <Route path="/music" element={<Music/>}/>
              <Route path="/settings" element={<Settings/>}/>
            </Routes>

          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
