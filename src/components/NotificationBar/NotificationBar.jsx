import styles from './NotificationBar.module.css';
import { FaBell, FaAngleRight } from "react-icons/fa";

const NotificationBar = (props) => {
    return (
        <div>
            <div className={styles.container}>
                <FaBell className={styles.bell}/>
                <h1>Notifications</h1>
                {props.notifications.map(notification => {
                    return (
                        <div className={styles.item}
                            key={props.notifications.indexOf(notification)}>
                            {notification}
                        </div>
                    )
                })}
                <FaAngleRight className={styles.angle}/>
            </div>
        </div>
    )
}

export default NotificationBar;