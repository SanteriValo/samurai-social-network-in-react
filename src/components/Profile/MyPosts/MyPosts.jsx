import styles from './MyPosts.module.css'
import Post from './Post/Post.jsx'
import React from "react";

const MyPosts = (props) => {
    console.log('props.newPostText:', props.newPostText);
    console.log('props.posts:', props.posts);

    const postElements = props.posts.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    const newPostElement = React.createRef()

    const addPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={styles.content}>
            <div className={styles.contentItem}>
                <h3>My posts</h3>
                <div className={styles.contentItem}>
                    <div>
                        <textarea
                            name=""
                            ref={newPostElement}
                            cols="30"
                            rows="4"
                            onChange={onPostChange}
                            value={props.newPostText || ''}/>
                    </div>
                    <button onClick={addPost}>Add post...</button>
                </div>
                <div className={styles.posts}>
                    {postElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;