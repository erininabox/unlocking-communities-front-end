import { GiDroplets } from 'react-icons/gi';
import { FaPencilAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './EditWater.module.css';

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
                <p className={styles.inputline}>Water Filters         
                    {/* <GiDroplets></GiDroplets>  */}
                    <button className={styles.editbtn}><FaPencilAlt></FaPencilAlt></button>
                </p>
                <p className={styles.inputline}>Quantity In-Stock: <input type="number" onClick={onChangeInStock} className={styles.numberInput}></input></p>
                <p className={styles.inputline}>Quantity to Order: <input type="number" className={styles.numberInput}></input></p>
                <hr />
            </div>

            <div className={styles.btnblock}>
                <Link to="/"><button type="submit" className={styles.btn}>Save</button></Link>
                <Link to="/"><button type="reset" className={styles.btn}>Cancel</button></Link>
            </div>

            </form>
        </div>
    )
}

export default EditWater;