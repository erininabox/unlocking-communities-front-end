import React, {useState} from 'react';
import { GiDroplets } from 'react-icons/gi';
import { FaPencilAlt, FaFireAlt } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup } from 'react-bootstrap';
import { ListGroupProps } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import styles from './Inventory.module.css'
import { Link } from 'react-router-dom';

// import breakpoint from './react-'

const Inventory = () => {

    return (
        <main>
    <h2>Inventory</h2>


    <Container fluid="md" className={styles.Container}>
    <h2>Water Filters <GiDroplets></GiDroplets> 
    <Link to="/filters"><button className={styles.FilterEdit}><FaPencilAlt></FaPencilAlt></button></Link>
    </h2>
    <Row className="justify-content-md-center">
    <Col>
          <Form.Group as={Col} controlId="formBuyerFirst">
            <Form.Label>Quanitity Out-Pending</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="36"
              readOnly 
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
        </Col>
        <Form.Group as={Col} controlId="formBuyerFirst">
            <Form.Label>Quantity In-Transit</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="500" 
              readOnly
            />
          </Form.Group>
          </Row>
    </Container>
    <hr></hr>
    <Container fluid ="md" className={styles.Container}>
    <h2>Stoves <FaFireAlt></FaFireAlt> <Link to="/stoves"><button className={styles.StoveEdit}><FaPencilAlt></FaPencilAlt></button></Link></h2>

    <Row className="justify-content-md-center">
    <Col>
          <Form.Group as={Col} controlId="formBuyerFirst">
            <Form.Label>Quanitity Out-Pending</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="36"
              readOnly 
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
        </Col>
        <Form.Group as={Col} controlId="formBuyerFirst">
            <Form.Label>Quantity In-Transit</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="500" 
              readOnly
            />
          </Form.Group>
          </Row>
    </Container >
  <hr></hr>

        </main>
    )
}

export default Inventory;