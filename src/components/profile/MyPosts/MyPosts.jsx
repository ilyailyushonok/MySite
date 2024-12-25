import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements=
        props.postsData.map(p=><Post post={p.post} likes={p.likes}/>)
    return (
        <div className={s.posts}>
            <h3>My posts:</h3>
            <div className={`${s.item} ${s.addPost}`}>
                <textarea placeholder={'New Post'}></textarea>
                <button>Add</button>
            </div>
            <div className={s.item}>{postsElements}</div>
            </div>
            )
            }

            export default MyPosts;