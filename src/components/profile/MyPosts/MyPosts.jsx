import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {updateNewPostTextActionCreator,addPostActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {
    let postsElements =
        props.postsData.map((p, index) => <Post  key={index} post={p.post} likes={p.likes}/>)



    let newPostElement = React.createRef()
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange=()=>{
        const text = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text));

    }

    return (
        <div className={s.posts}>
            <h3>My posts:</h3>
            <div className={`${s.item} ${s.addPost}`}>
                <textarea onChange={onPostChange} value={props.newPostText}
                          ref={newPostElement} placeholder={'New Post'} />
                <button className={'btn'} onClick={addPost}>Add</button>
            </div>
            <div className={s.item}>{postsElements}</div>
        </div>
    )
};

            export default MyPosts;