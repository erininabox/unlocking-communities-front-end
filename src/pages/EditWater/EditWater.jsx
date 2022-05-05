import { useState } from 'react';
import styles from './EditWater.module.css';
import { BsDropletFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import * as inventoryService from '../../services/inventoryService';

const EditWater = () => {
    // const [inStockNum, setInStockNum] = useState({
    //     inStockNum: 0,
    // })
    const [waterStock, setWaterStock] = useState({})
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: 'water',
        waterNum: '',
        waterToOrder: '',
    })

    const handleChange = e => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    // const onChangeInStock = (e) => {
    //     setInStockNum({ inStockNum: e.target.value })
    // }
    const handleSubmit = async evt => {
        evt.preventDefault();
        try {
            await inventoryService.addInventory(formData)
            .then(formData => {
                setWaterStock(formData)
                navigate('/inventory')
            })
        } catch (err) {
            console.log(err)
            throw (err)
        }
    }

    const { name, waterNum, waterToOrder } = formData

    return (
        <div>
            <h1 className={styles.h1}>Edit Filter Inventory</h1>

            <form autoComplete='off' onSubmit={handleSubmit} className={styles.form}>

            <div className={styles.formdiv}>

                <p className={styles.titleline}>Water Filters 
                      <BsDropletFill className={styles.h2oicon}></BsDropletFill>
                </p>
                <p className={styles.inputline}>Quantity In-Stock: 
                    <input 
                        type="number"  
                        className={styles.numberInput}
                        value={waterNum}
                        name='waterNum'
                        onChange={handleChange}
                    >
                    </input>
                </p>
                <p className={styles.inputline}>Quantity to Order: 
                    <input 
                        type="number" 
                        className={styles.numberInput}
                        value={waterToOrder}
                        name="waterToOrder"
                        onChange={handleChange}
                    >
                    </input>
                </p>
                <hr classname={styles.hr} />
            </div>

            <div className={styles.btnblock}>
                <button type="submit" className={styles.btnprim} onClick={handleSubmit}>Save</button>
                <button type="reset" className={styles.btnsec} onClick={() => navigate('/inventory')}>Cancel</button>
            </div>
            </form>
        </div>
    )
}

export default EditWater;