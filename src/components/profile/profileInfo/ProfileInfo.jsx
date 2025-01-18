import React from 'react';
import  s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader";


const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>;
    }
    return (
        <div className={s.profileInfo}>
            <img
                src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                alt="Main Content"/>
            <div>
                <div className={s.descBlock}>
                    <img src={props.profile.photos.large} alt="ava"/>
                    <h3>{props.profile.aboutMe}</h3>
                    <h3>{props.profile.lookingForAJob?"в поиске работы":"не ищу работу"}</h3>
                    <p>Мои контакты:
                    <ul>
                        <li>Фейсбук: {props.profile.contacts.facebook?props.profile.contacts.facebook:"пока нету:("}</li>
                        <li>Сайт: {props.profile.contacts.website?props.profile.contacts.website:"пока нету:("}</li>
                        <li>ВК: {props.profile.contacts.vk?props.profile.contacts.vk:"пока нету:("}</li>
                        <li>Твиттер: {props.profile.contacts.twitter?props.profile.contacts.twitter:"пока нету:("}</li>
                        <li>Инстаграмм: {props.profile.contacts.instagram?props.profile.contacts.instagram:"пока нету:("}</li>
                        <li>ГитХаб: {props.profile.contacts.github?props.profile.contacts.github:"пока нету:("}</li>
                    </ul>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;