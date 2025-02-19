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

    const dialogsData = [
        {id: 1, name: "Harvey"},
        {id: 2, name: "Mike"},
        {id: 3, name: "Jessica"},
        {id: 4, name: "Donna"},
        {id: 5, name: "Louis"},
        {id: 6, name: "Rachel"}
    ]

    const dialogsElements = dialogsData.map(name => <DialogItem name={name.name} id={name.id}/>)

    const messagesData = [
        {id: 1, message: "Hi! How are you?"},
        {id: 2, message: "Whatsapp?"},
        {id: 3, message: "Yep"},
        {id: 4, message: "Not a chance!"},
        {id: 5, message: "He knows it"},
        {id: 6, message: "Next time"},
    ]

    const messageElements = messagesData.map(message => <Message message={message.message}/>)

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