import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = "/dialogs/" +props.id

    return (
        <div className={styles.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <h2 className={styles.header}>Dialogs</h2>
            <div className={styles.dialogsItems}>
                <DialogItem name="Harvey" id="1"/>
                <DialogItem name="Mike" id="2"/>
                <DialogItem name="Jessica" id="3"/>
                <DialogItem name="Donna" id="4"/>
                <DialogItem name="Louis" id="5"/>
                <DialogItem name="Rachel" id="6"/>
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