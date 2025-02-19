import styles from './MyPosts.module.css'
import Post from './Post/Post.jsx'

const MyPosts = () => {

    const posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 7},
        {id: 2, message: 'It\'s my first post', likesCount: 12}
    ]

    const postElements = posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={styles.content}>
            <div className={styles.contentItem}>
                <h3>My posts</h3>
                <div className={styles.contentItem}>
                    <div>
                        <textarea name="" id="" cols="30" rows="4"></textarea>
                    </div>
                    <button>Add post...</button>
                </div>
                <div className={styles.posts}>
                    {postElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;