import React from 'react';
import  s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>
            <img
                src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                alt="Main Content"/>
            <div>
                <div className={s.descBlock}>ava+description</div>
            </div>
        </div>
    );
}

export default ProfileInfo;