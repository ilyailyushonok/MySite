import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements =
        props.postsData.map(p => <Post post={p.post} likes={p.likes}/>)



    let newPostElement = React.createRef()
    let addPost = () => {
        debugger
        let text = newPostElement.current.value;
      props.addPost(text);
    }


    return (
        <div className={s.posts}>
            <h3>My posts:</h3>
            <div className={`${s.item} ${s.addPost}`}>
                <textarea ref={newPostElement} placeholder={'New Post'}></textarea>
                <button onClick={addPost}>Add</button>
            </div>
            <div className={s.item}>{postsElements}</div>
        </div>
    )
};

            export default MyPosts;