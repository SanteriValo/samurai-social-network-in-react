import styles from './MyPosts.module.css'
import Post from './Post/Post.jsx'

const MyPosts = () => {

    const postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 7},
        {id: 2, message: 'It\'s my first post', likesCount: 12}
    ]

    const postElements = postsData.map((post) => <Post message={post.message} likesCount={post.likesCount}/>)

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