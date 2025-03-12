import styles from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = "/dialogs/" +props.id

    return (
        <div className={styles.dialog}>
            <img src="https://someguy.be/images/Steven.jpg" alt=""/>
            <NavLink className={styles.dialogName}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;