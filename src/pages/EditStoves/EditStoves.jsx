import { FaPencilAlt, FaFireAlt } from 'react-icons/fa';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import * as inventoryService from '../../services/inventoryService'
import { useNavigate } from 'react-router-dom';

// const EditStoves = () => {
//     // State
//     const [stockOut, setStockOut] = useState({
//         stockOut: 0,
//     })

//     const onStockChange = (e) => {
//         setStockOut({ stockOut: e.target.value })

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
           

//             <div>
//                 <h2>Stoves <FaFireAlt></FaFireAlt> <button><FaPencilAlt></FaPencilAlt></button></h2>
//                 <Container>
//             <Form onSubmit={handleSubmit}>
//                 <Row className="mb-3">
//           <Form.Group as={Col} controlId="formBuyerFirst">
//             <Form.Label>Quanitity Out-Pending</Form.Label>
//             <Form.Control 
//               type="number" 
//               placeholder="36" 
//               onChange={onStockChange}
//             />
//           </Form.Group>
          
//         <Form.Group as={Col} controlId="formBuyerLast">
//           <Form.Label>Quanitity In-Stock</Form.Label>
//           <Form.Control 
//             type="number" 
//             placeholder="64"
//             readOnly
//           />
//         </Form.Group>
//       </Row>
//       <Row className="mb-3">
//           <Form.Group as={Col} controlId="formBuyerFirst">
//             <Form.Label>Quantity In-Transit</Form.Label>
//             <Form.Control 
//               type="number" 
//               placeholder="500" 
//               readOnly
//             />
//           </Form.Group>
//         <Form.Group as={Col} controlId="formBuyerLast">
//           <Form.Label>Quanity Ordered </Form.Label>
//           <Form.Control 
//             type="number" 
//             placeholder="Pending Approval" 
//             readOnly
//           />
//         </Form.Group>
//       </Row>
//       </Form>
//                 </Container>
//                 <hr />
//             </div>

//             <Link to="/"><button type="submit">Save</button></Link>
//             <Link to="/"><button type="reset">Cancel</button></Link>
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