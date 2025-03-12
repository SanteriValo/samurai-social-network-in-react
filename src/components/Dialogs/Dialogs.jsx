import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";

const Dialogs = (props) => {
    const dialogsElements = props.state.dialogs.map(n => <DialogItem key={n.id} name={n.name} id={n.id}/>)
    const messageElements = props.state.messages.map(m => <Message key={m.id} message={m.message}/>)

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