import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";


import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import Profile from "./components/profile/Profile";
import DialogsContainer from "./components/dialogs/DialogsContainer";





const App=(props)=>{

  return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header/>
          <NavBar/>

          <div className='app-wrapper-content'>
            <Routes>
              <Route path="/profile/*" element={<Profile/>}/>
              <Route path="/dialogs/*" element={<DialogsContainer />}/>
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
