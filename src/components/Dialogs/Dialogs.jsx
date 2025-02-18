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

    const messagesData = [
        {id: 1, message: "Hi! How are you?"},
        {id: 2, message: "Whatsapp?"},
        {id: 3, message: "Yep"},
        {id: 4, message: "Not a chance!"},
        {id: 5, message: "He knows it"},
        {id: 6, message: "Next time"},
    ]

    return (
        <div className={styles.dialogs}>
            <h3 className={styles.header}>Dialogs</h3>
            <div className={styles.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={styles.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message ={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
                <Message message={messagesData[5].message}/>
            </div>
        </div>
)
}

export default Dialogs;