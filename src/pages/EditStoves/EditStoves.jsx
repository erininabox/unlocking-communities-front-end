import { FaPencilAlt, FaFireAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const EditStoves = () => {
    // State
    const [stockOut, setStockOut] = useState({
        stockOut: 0,
    })

    const onStockChange = (e) => {
        setStockOut({ stockOut: e.target.value })
    }
    const handleSubmit = async evt => {
        evt.preventDefault();
        //Send this off to the db
    }

    return (
        <div>
            <h1>Edit Filter Inventory</h1>

            

            <div>
                <h2>Stoves <FaFireAlt></FaFireAlt> <button><FaPencilAlt></FaPencilAlt></button></h2>
                <Container>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
          <Form.Group as={Col} controlId="formBuyerFirst">
            <Form.Label>Quanitity Out-Pending</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="36" 
              onChange={onStockChange}
            />
          </Form.Group>
          
        <Form.Group as={Col} controlId="formBuyerLast">
          <Form.Label>Quanitity In-Stock</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="64"
            readOnly
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
          <Form.Group as={Col} controlId="formBuyerFirst">
            <Form.Label>Quantity In-Transit</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="500" 
              readOnly
            />
          </Form.Group>
        <Form.Group as={Col} controlId="formBuyerLast">
          <Form.Label>Quanity Ordered </Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Pending Approval" 
            readOnly
          />
        </Form.Group>
      </Row>
      </Form>
                </Container>
                <hr />
            </div>

            <Link to="/"><button type="submit">Save</button></Link>
            <Link to="/"><button type="reset">Cancel</button></Link>
        </div>
    )
}

export default EditStoves;