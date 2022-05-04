import styles from './NotificationBar.module.css';

const NotificationBar = (props) => {
    return (
        <div className={styles.container}>
        {props.notifications.map(notification => {
            return (
                <p className={styles.item}
                key={props.notifications.indexOf(notification)}>
                        {notification}
                </p>
            )
        })}
        </div>
    )
}

export default NotificationBar;