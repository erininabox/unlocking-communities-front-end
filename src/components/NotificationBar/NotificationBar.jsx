import styles from './NotificationBar.module.css';
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NotificationBar = (props) => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h1 className={styles.title}>Notifications</h1>
                    {props.notifications.map(notification => {
                        return (
                            <div className={styles.item}
                                key={props.notifications.indexOf(notification)}>
                                {notification}
                            </div>
                        )
                    })}
                </div>
                <Link to='/' className={styles.angle}><FaAngleRight/></Link>
            </div>
        </div>
    )
}

export default NotificationBar;