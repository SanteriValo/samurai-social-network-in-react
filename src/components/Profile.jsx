import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>Main content
                <img
                    src="https://media.licdn.com/dms/image/v2/D4D16AQHvE3xNl5cTWw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1731583753566?e=1743033600&v=beta&t=tmrCY-eTfjij1iKONTIaZg5o49EBtc5nTswxlnqpZXo"
                    alt="main content image one"/>
            </div>
            <div className={classes.contentItem}>
                avatar + description
            </div>
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

export default Profile;