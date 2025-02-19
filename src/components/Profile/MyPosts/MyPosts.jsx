import styles from './MyPosts.module.css'
import Post from './Post/Post.jsx'

const MyPosts = () => {

    const postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 7},
        {id: 2, message: 'It\'s my first post', likesCount: 12}
    ]

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
                    <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                    <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;