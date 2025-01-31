import styles from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div className={styles.content}>
            <div>Main content
                <img
                    src="https://media.licdn.com/dms/image/v2/D4D16AQHvE3xNl5cTWw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1731583753566?e=1743033600&v=beta&t=tmrCY-eTfjij1iKONTIaZg5o49EBtc5nTswxlnqpZXo"
                    alt="main content image one"/>
            </div>
            <div className={styles.contentItem}>
                avatar + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;