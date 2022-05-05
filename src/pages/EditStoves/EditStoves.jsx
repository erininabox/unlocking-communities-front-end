import { FaPencilAlt, FaFireAlt } from 'react-icons/fa';
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import * as inventoryService from '../../services/inventoryService'
import { useNavigate } from 'react-router-dom';

const EditStoves = () => {
    // State
    // const [inStockNum, setInStockNum] = useState({
    //     inStockNum: 0,
    // })
    const [stoveStock, setStoveStock] = useState({})
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: 'stove',
        stoveNum: '',
        stoveToOrder: '',
    })

    const handleChange = e => {
        setFormData({
            ...formData, [e.target.name]: e.target.value,
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
                setStoveStock(formData)
                navigate('/inventory')
            })
        } catch (err) {
            console.log(err)
            throw (err)
        }
    }

    const { name, stoveNum, stoveToOrder } = formData

    return (
        <div>
            <h1>Edit Filter Inventory</h1>

            <form autoComplete='off' onSubmit={handleSubmit}>
                <div>
                    <h2>Stoves <FaFireAlt /></h2>
                    <p>Quantity In-Stock 
                        <input 
                            type="number"
                            value={stoveNum}
                            name="stoveNum"
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </p>
                    <p>Quantity to Order 
                        <input 
                            type="number"
                            value={stoveToOrder}
                            name="stoveToOrder"
                            onChange={handleChange}
                            autoComplete='off'
                        />
                    </p>
                    {/* <p>Quantity In-Stock 
                        <input 
                            type="number"
                        />
                    </p>
                    <p>Quantity to Order 
                        <input 
                            type="number"
                        />
                    </p> */}
                    <hr />
                </div>
                <button type="submit" onClick={handleSubmit}>Save</button>
                <button type="reset" onClick={() => navigate('/inventory')}>Cancel</button>
            </form>
        </div>
    )
}

export default EditStoves;