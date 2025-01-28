import classes from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div className={classes.content}>
            <div className={classes.contentItem}>
                My posts
                <div className={classes.contentItem}>
                    New post
                </div>
                <div className={classes.posts}>
                    <div className={classes.item}>
                        Post 1
                    </div>
                    <div className={classes.item}>
                        Post 2
                    </div>
                    <div className={classes.item}>
                        Post 3
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;