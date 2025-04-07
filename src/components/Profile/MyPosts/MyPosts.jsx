import styles from './MyPosts.module.css'
import Post from './Post/Post.jsx'
import React from "react";

const MyPosts = (props) => {
    const postElements = props.posts.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    const newPostElement = React.createRef()

    const addPost = () => {
        console.log(newPostElement.current.value)
        props.addPost(newPostElement.current.value)
    }

    return (
        <div className={styles.content}>
            <div className={styles.contentItem}>
                <h3>My posts</h3>
                <div className={styles.contentItem}>
                    <div>
                        <textarea name="" ref={newPostElement} cols="30" rows="4"></textarea>
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