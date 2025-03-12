import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://someguy.be/images/Steven.jpg" alt=""/>
            <div className={classes.message}>
            {props.message}
            </div>
            <div className={classes.likes}>
                <span>{props.likesCount} likes</span>
            </div>
        </div>
    )
}

export default Post;