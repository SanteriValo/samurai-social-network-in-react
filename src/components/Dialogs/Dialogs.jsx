import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";
import React from "react";

const Dialogs = (props) => {
    const dialogsElements = props.state.dialogs.map(n => <DialogItem key={n.id} name={n.name} id={n.id}/>)
    const messageElements = props.state.messages.map(m => <Message key={m.id} message={m.message}/>)
    const newMessageElement = React.createRef();

    const addMessage = () => {
        alert(newMessageElement.current.value);
    }

    return (
        <div className={styles.dialogs}>
            <h3 className={styles.header}>Dialogs</h3>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
            </div>
            <textarea name="" ref={newMessageElement} cols="30" rows="4"></textarea>
            <button onClick={addMessage} className={styles.createMessageButton}>Send</button>
        </div>
    )
}

export default Dialogs;