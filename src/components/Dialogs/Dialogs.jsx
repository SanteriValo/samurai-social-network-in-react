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
        {id: 1, name: "Harvey"}, {id: 2, name: "Mike"}, {id: 3, name: "Jessica"}, {id: 4, name: "Donna"}, {id: 5, name: "Louis"}, {id: 6, name: "Rachel"}
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