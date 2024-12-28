import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import Dialogs from "./components/dialogs/Dialogs";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import Profile from "./components/profile/Profile";


const App=(props)=>{

  return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header/>
          <NavBar/>

          <div className='app-wrapper-content'>
            <Routes>
              <Route path="/profile/*" element={<Profile addPost={props.addPost} profilePage={props.state.profilePage}/>}/>
              <Route path="/dialogs/*" element={<Dialogs messagesData={props.state.messagesPage.messagesData} dialogsData={props.state.messagesPage.dialogsData}/>}/>
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
