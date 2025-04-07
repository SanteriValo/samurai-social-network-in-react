import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={styles.imageContainer}>Main content
                <img className={styles.profileImage}
                    src="https://cdn.pixabay.com/photo/2017/06/24/20/38/winter-2438791_960_720.jpg"
                    alt="main content image one"/>
            </div>
            <div>
                avatar + description
            </div>
        </div>
    )
}

export default ProfileInfo;