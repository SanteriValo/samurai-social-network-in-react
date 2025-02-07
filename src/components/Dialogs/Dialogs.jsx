import styles from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <h2 className={styles.header}>Dialogs</h2>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog}>
                    John
                </div>
                <div className={styles.dialog + ' ' + styles.active}>
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
            <div className={styles.messages}>
                <div className={styles.message}>Hi! How are you?</div>
                <div className={styles.message}>Whatsapp?</div>
                <div className={styles.message}>Yep</div>
                <div className={styles.message}>Not a chance!</div>
            </div>
        </div>
)
}

export default Dialogs;