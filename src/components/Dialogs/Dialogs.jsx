import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <h2 className={styles.header}>Dialogs</h2>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/1">John</NavLink>
                </div>
                <div className={styles.dialog + ' ' + styles.active}>
                    <NavLink to="/dialogs/2">Mike</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/3">Natalie</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/4">Julie</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/5">Louis</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/6">Harvey</NavLink>
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