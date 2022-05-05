import React, {useState} from 'react';
import { BsDropletFill } from "react-icons/bs";
// import { GiDroplets } from 'react-icons/gi';
import { FaPencilAlt, FaFireAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import styles from './Inventory.module.css'
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

// import breakpoint from './react-'

const Inventory = ({inventory}) => {

    return (
        <main>
    <div>
    <h2 className={styles.title}>Inventory Overview</h2>
    <Container fluid="md" className={styles.Container}>
    <h2> <span className={styles.h2oicon}><BsDropletFill></BsDropletFill></span> Water Filters
    <Link to="/filters"><button className={styles.FilterEdit}><FaPencilAlt className={styles.pencil}></FaPencilAlt></button></Link>
    </h2>
    <ListGroup variant="flush">
    <ListGroup.Item>
        <h4 className={styles.filterLabelOut}>Quantity Out</h4>
        <h4 className={styles.filterOut}>36</h4>
    </ListGroup.Item>
    <ListGroup.Item>
        <h4 className={styles.filterLabelStock}>Quantity in Stock</h4>
        <h4 className={styles.filterStock}>64</h4>
    </ListGroup.Item>
    <ListGroup.Item><h4 className={styles.filterLabelTransit}>Quantity In-Transit</h4><h4 className={styles.filterTransit}>200</h4></ListGroup.Item>
</ListGroup>
    </Container >
    <hr className={styles.break}></hr>
    <Container fluid="md" className={styles.Container}>
    <h2><span className={styles.fireicon}>
        <FaFireAlt></FaFireAlt>
    </span>Stoves  
        <Link to="/stoves">
            <button className={styles.StoveEdit}><FaPencilAlt className={styles.pencil}></FaPencilAlt></button></Link></h2>

    <ListGroup variant="flush">
    <ListGroup.Item>
        <h4 className={styles.stoveLabelOut}>Quantity Out</h4>
        <h4 className={styles.stoveOut}>15</h4>
    </ListGroup.Item>
    <ListGroup.Item>
        <h4 className={styles.stoveLabelStock}>Quantity in Stock</h4>
        <h4 className={styles.stoveStock}>34</h4>
    </ListGroup.Item>
    <ListGroup.Item>
        <h4 className={styles.stoveLabelTransit}>Quantity In-Transit</h4>
        <h4 className={styles.stoveTransit}>50</h4>
    </ListGroup.Item>
</ListGroup>
    </Container >
    <div className={styles.btnblock}>
                <Link to="/contracts">
                    <button className={styles.btn}>
                    Add New Receipt
                    </button>
                </Link>
                <Link to="/inventory">
                    <button className={styles.btn1}>
                    Order Inventory
                    </button>
                </Link>
            </div>
<hr></hr>
</div>

        </main>
    )
}

export default Inventory;