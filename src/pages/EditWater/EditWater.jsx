import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './EditWater.module.css';
import { BsDropletFill } from "react-icons/bs";

const EditWater = () => {
    // State
    const [inStockNum, setInStockNum] = useState({
        inStockNum: 0,
    })

    const onChangeInStock = (e) => {
        setInStockNum({ inStockNum: e.target.value })
    }
    const handleSubmit = async evt => {
        evt.preventDefault();
        //Send this off to the db
    }

    return (
        <div>
            <h1 className={styles.h1}>Edit Filter Inventory</h1>

            <form autoComplete='off' onSubmit={handleSubmit} className={styles.form}>

            <div className={styles.formdiv}>
                <div className={styles.titleline}>Water Filters         
                    <BsDropletFill className={styles.h2oicon}></BsDropletFill>
                </div>
                <p className={styles.inputline}>Quantity In-Stock: <input type="number" onClick={onChangeInStock} className={styles.numberInput}></input></p>
                <p className={styles.inputline}>Quantity to Order: <input type="number" className={styles.numberInput}></input></p>
                <hr className={styles.hr} />
            </div>

            <div className={styles.btnblock}>
                <Link to="/"><button type="submit" className={styles.btnprim}>Save</button></Link>
                <Link to="/"><button type="reset" className={styles.btnsec}>Cancel</button></Link>
            </div>

            </form>
        </div>
    )
}

export default EditWater;