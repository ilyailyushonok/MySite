import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src="https://cloud.pllsll.ru/860x/pollskill/storage/b6/be/79/b6b2a3834f4.jpg"
                alt="Logo"/>
            <div className={s.loginBlock}>
                {props.isAuth?props.login:<NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;