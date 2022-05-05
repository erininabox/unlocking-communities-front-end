import { FaPencilAlt, FaFireAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const EditStoves = () => {
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
            <h1>Edit Filter Inventory</h1>

            <form autoComplete='off' onSubmit={handleSubmit}>

            <div>
                <h2>Stoves <FaFireAlt></FaFireAlt> <button><FaPencilAlt></FaPencilAlt></button></h2>
                <p>Quantity In-Stock <input type="number" onClick={onChangeInStock}></input></p>
                <p>Quantity to Order <input type="number"></input></p>
                <hr />
            </div>

            <Link to="/"><button type="submit">Save</button></Link>
            <Link to="/"><button type="reset">Cancel</button></Link>

            </form>
        </div>
    )
}

export default EditStoves;