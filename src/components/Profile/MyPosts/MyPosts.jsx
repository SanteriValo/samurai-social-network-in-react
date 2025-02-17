import classes from './MyPosts.module.css'
import Post from './Post/Post.jsx'

const MyPosts = () => {
    return (
        <div className={classes.content}>
            <div className={classes.contentItem}>
                <h3>My posts</h3>
                <div className={classes.contentItem}>
                    <div>
                        <textarea name="" id="" cols="30" rows="4"></textarea>
                    </div>
                    <button>Add post...</button>
                </div>
                <div className={classes.posts}>
                    <Post message='Hi, how are you?' likesCount="7"/>
                    <Post message="It's my first post" likesCount="12"/>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;