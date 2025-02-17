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

const Message = (props) => {
    return <div className={styles.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <h3 className={styles.header}>Dialogs</h3>
            <div className={styles.dialogsItems}>
                <DialogItem name="Harvey" id="1"/>
                <DialogItem name="Mike" id="2"/>
                <DialogItem name="Jessica" id="3"/>
                <DialogItem name="Donna" id="4"/>
                <DialogItem name="Louis" id="5"/>
                <DialogItem name="Rachel" id="6"/>
            </div>
            <div className={styles.messages}>
                <Message message="Hi! How are you?"/>
                <Message message="Whatsapp?"/>
                <Message message="Yep"/>
                <Message message="Not a chance!"/>
                <Message message="He knows it"/>
                <Message message="Next time"/>
            </div>
        </div>
)
}

export default Dialogs;