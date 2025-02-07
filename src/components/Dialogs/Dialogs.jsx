import styles from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div>
            <h2>Music</h2>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    <div className={styles.dialog}>
                        John
                    </div>
                    <div className={styles.dialog}>
                        Mike
                    </div>
                    <div className={styles.dialog}>
                        Natalie
                    </div>
                    <div className={styles.dialog}>
                        Julie
                    </div>
                    <div className={styles.dialog}>
                        Louis
                    </div>
                    <div className={styles.dialog}>
                        Harvey
                    </div>
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}><p>Hi! How are you?</p></div>
                <div className={styles.message}><p>Whatsapp?</p></div>
                <div className={styles.message}><p>Yep</p></div>
                <div className={styles.message}><p>Not a chance!</p></div>
                <div></div>
                <div><p>Hi! How are you?</p></div>
            </div>
        </div>
    )
}

export default Dialogs;