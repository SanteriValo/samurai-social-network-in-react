import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";

const Dialogs = (props) => {

    const dialogsElements = props.dialogs.map(n => <DialogItem name={n.name} id={n.id}/>)
    const messageElements = props.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={styles.dialogs}>
            <h3 className={styles.header}>Dialogs</h3>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
            </div>
        </div>
)
}

export default Dialogs;