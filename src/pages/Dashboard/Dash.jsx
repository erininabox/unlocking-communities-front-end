import { Link } from 'react-router-dom';
import NotificationBar from "../../components/NotificationBar/NotificationBar";
import styles from './Dash.module.css';
import { BsDropletFill } from "react-icons/bs";
import { GoFlame } from "react-icons/go";

const Dash = () => {
    const dummyData = {
        // replace this with actual data later, this is just for display purposes
        'waterFiltersSold': 75,
        'stovesSold': 43,
        'notifications': ['You need to order more water filters!', 'You need to order more stoves!']
    }
    
    return (
        <div className={styles.containerx}>
            <h1 className={styles.title}>Dashboard</h1>
            <div className={styles.boxcontainer}>
            <div className={styles.box}> 
                <div className={styles.h2oicon}><BsDropletFill></BsDropletFill></div>
                <div className={styles.quantity}>{dummyData.waterFiltersSold} sold</div>
                <div className={styles.text}>this month</div>
            </div>
            <div className={styles.box}> 
                <div className={styles.fireicon}><GoFlame></GoFlame></div>
                <div className={styles.quantity}>{dummyData.stovesSold} sold</div>
                <div className={styles.text}>this month</div>
            </div>
            </div>

            <div className={styles.bar}>
                <NotificationBar notifications={dummyData.notifications} />
            </div>

            <div className={styles.btnblock}>
                <Link to="/contracts">
                    <button className={styles.btn}>
                    New Sale
                    </button>
                </Link>
                <Link to="/inventory">
                    <button className={styles.btn}>
                    Inventory
                    </button>
                </Link>
                <Link to="/pastsales">
                    <button className={styles.btn}>
                    Past Sales
                    </button>
                </Link>
                {/* <Link to="/">
                    <button className={styles.btn}>
                    Sales Trends
                    </button>
                </Link> */}
            </div>
            
        </div>
    )
}

export default Dash;