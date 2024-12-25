import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://cloud.pllsll.ru/860x/pollskill/storage/b6/be/79/b6b2a3834f4.jpg"
                alt="Logo"/>
        </header>
    )
}

export default Header;