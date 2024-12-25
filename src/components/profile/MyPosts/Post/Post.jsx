import React from 'react';
import s from './Post.module.css'

const Post = (props) => {


    return (

        <div className={s.item}><img
            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0sRSnU7bT_oqRep1QJZfFqHMiklrsc5zJQ&s'}/>
            {props.post}
            <div><button>like {props.likes}</button><button> Dislike</button></div>
        </div>
    );
}

            export default Post;