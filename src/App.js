import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";


import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";

import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";




const App=()=>{

  return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer/>
          <NavBar/>

          <div className='app-wrapper-content'>
            <Routes>
              <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
              <Route path="/dialogs/*" element={<DialogsContainer />}/>
              <Route path="/news" element={<News/>}/>
              <Route path="/music" element={<Music/>}/>
              <Route path="/settings" element={<Settings/>}/>
              <Route path="/users" element={<UsersContainer/>}/>
            </Routes>

          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
