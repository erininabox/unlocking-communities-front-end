import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import * as contractService from '../../services/contractService'

import DatePicker from "react-datepicker";


const ContractForm = () => {
  const [startDate, setStartDate] = useState(new Date()); 
  const [contract, setContract] = useState({})
  const [formData, setFormData] = useState({
    saleDate: '',
    entName: '',
    businessName: '',
    buyerFirstName: '',
    buyerLastName: '',
    natcomNum: '',
    digicelNum: '',
    why: '',
    productPurchased: '',
    productNum: '',
    paymentType: '',
    totalPaid: '',
    amountToBePaid: '',
    numberofPayments: '',
    amountPerPayment: '',
    dateOfSignature: ''
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await contractService.createContract(formData)
      .then(formData => {
        setContract(formData)
      })
    } catch (err) {
      console.log(err)
    }
  }

  const { entName, businessName, saleDate, buyerFirstName, buyerLastName, natcomNum, digicelNum, why, productPurchased, productNum, paymentType, totalPaid, amountToBePaid, numberofPayments, amountPerPayment, dateOfSignature } = formData


  return (
  <div>
    <h2 className='FormTitle'>Deboke Kominote Yo Sales Contract</h2>
    <h5 className='FormTitle'>Sales Contract</h5>
    <Form>
      <h4>Date of Sale</h4>
      <Form.Group as={Col} controlId="formContractDate">
        <DatePicker 
          selected={startDate} 
          onChange={handleChange}
          // onChange={(date:Date) => setStartDate(date)} 
          value={saleDate}
          name='saleDate'
          autoComplete='off'
        />
      </Form.Group>
      <h4>Entrepreneur Information</h4>
      <Form.Group as={Col} controlId="formEntrepreneurName">
        <Form.Label>Entrepreneur Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Non antreprenè" 
          onChange={handleChange}
          value={entName}
          name='entName'
          autoComplete='off'
        />
      </Form.Group>
      <Form.Group as={Col} controlId="formBusinessName">
        <Form.Label>Business Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Non biznis" 
          onChange={handleChange}
          value={businessName}
          name='businessName'
          autoComplete='off'
        />
      </Form.Group>
      <h4> Buyer Information </h4>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formBuyerFirst">
      <Form.Label>First Name</Form.Label>
      <Form.Control 
        type="text" 
        placeholder="Premye Non" 
        onChange={handleChange}
        value={buyerFirstName}
        name='buyerFirstName'
        autoComplete='off'
      />
    </Form.Group>

    <Form.Group as={Col} controlId="formBuyerLast">
      <Form.Label>Last Name</Form.Label>
      <Form.Control 
        type="text" 
        placeholder="Siyati" 
        onChange={handleChange}
        value={buyerLastName}
        name="buyerLastName"
        autoComplete='off'
      />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formNatcom">
    <Form.Label>Natcom Number</Form.Label>
    <Form.Control 
      type="tel"  
      id="phone"
      value={natcomNum} 
      name="natcomNum" 
      onChange={handleChange}
      autoComplete='off'
      pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" 
      placeholder="Nimewo Natcom" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formDigicel">
    <Form.Label>Digicel Number</Form.Label>
    <Form.Control 
      type="tel"  
      id="phone" 
      name="digicelNum" 
      pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" 
      placeholder="Nimewo Digicel" 
      onChange={handleChange}
      value={digicelNum}
      autoComplete='off'
    />

    <h4>Product and Payment Information</h4>

  </Form.Group>
  <p>Product Purchased (select one)</p>
  {[{'type':'radio','option': 'Water Filtration System'},{'type':'radio','option':'Filter Only'},{'type':'radio','option':'Clean Burning Stove'},{'type':'radio','option':'Replacement Part'},{'type':'radio','option':'Other'}].map((type) => (
    <div key={`-${type}`} className="mb-3">
      <Form.Check
        label={type.option}
        value={productPurchased}
        name="productPurchased"
        onChange={handleChange}
        autoComplete='off'
        type={type.type}
        id={`-${type}-1`}
      />
    </div>
  ))}

    <Form.Group as={Col} controlId="formBuyerLast">
      <Form.Label>Product Number</Form.Label>
      <Form.Control 
        type="number" 
        placeholder="Product Number" 
        value={productNum}
        name="productNum"
        onChange={handleChange}
        autoComplete='off'
      />
    </Form.Group>

    <p>Payment Type (select one)</p>
  {[{'type':'radio','option': 'Loan'},{'type':'radio','option':'Cash'}].map((type) => (
    <div key={`-${type}`} className="mb-3">
      <Form.Check
        label={type.option}
        value={paymentType}
        name="paymentType"
        onChange={handleChange}
        autoComplete='off'
        type={type.type}
        id={`-${type}-1`}
      />
    </div>
  ))}
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Total Amount to be Paid</Form.Label>
    <Form.Control 
      type="number" 
      placeholder="HTG"
      value={amountToBePaid}
      name="amountToBePaid"
      onChange={handleChange}
      autoComplete="off" 
    />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Total Deposit OR Full Cash Amount</Form.Label>
    <Form.Control 
      type="number" 
      placeholder="HTG" 
      value={totalPaid}
      name="totalPaid"
      autoComplete='off'
      handleChange={handleChange}
    />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Total Number of Payments (loan only)</Form.Label>
    <Form.Control 
      type="number" 
      placeholder="HTG" 
      autoComplete='off'
      value={numberofPayments}
      name='numberofPayments'
      onChange={handleChange}
    />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Amount per Payment (loan only)</Form.Label>
    <Form.Control 
      type="number" 
      placeholder="HTG" 
      autoComplete='off'
      value={amountPerPayment}
      name="amountPerPayment"
      onChange={handleChange}
    />
  </Form.Group>
  <hr></hr>
  <Button 
    variant="primary" 
    type="submit"
    onClick={handleSubmit}
  >
    Submit
  </Button>
</Form>
<hr></hr>
<h4 className='FormTitle'>Payment Tracking</h4>
<Form className='Payment Tracking'>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="PaymentAmount">
      <Form.Label>Deposit OR Full Cash Payment</Form.Label>
      <Form.Control type="number" placeholder="Payment" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Date of Payment</Form.Label>
      <Form.Control type="date" placeholder="PaymentAmount1" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
    <p>Buyer Signature</p>
    {[{'type':'checkbox','option':'Buyer Signature'}].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type.type}
        id={`default-${type}`}
        label={`${type.option}`}
      />
    </div>
  ))}
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPassword">
    <p>Seller Signature</p>
    {[{'type':'checkbox','option':'Seller Signature'}].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type.type}
        id={`default-${type}`}
        label={`${type.option}`}
      />
    </div>
  ))}
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="PaymentAmount">
      <Form.Label>Payment Amount 1 (loan only)</Form.Label>
      <Form.Control type="number" placeholder="Loan Payment" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Date of Payment</Form.Label>
      <Form.Control type="date" placeholder="" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
    <p>Buyer Signature</p>
    {[{'type':'checkbox','option':'Buyer Signature'}].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type.type}
        id={`default-${type}`}
        label={`${type.option}`}
      />
    </div>
  ))}
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPassword">
    <p>Seller Signature</p>
    {[{'type':'checkbox','option':'Seller Signature'}].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type.type}
        id={`default-${type}`}
        label={`${type.option}`}
      />
    </div>
  ))}
    </Form.Group>
  </Row>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="PaymentAmount">
      <Form.Label>Payment Amount 2 (loan only)</Form.Label>
      <Form.Control type="number" placeholder="Loan Payment" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Date of Payment</Form.Label>
      <Form.Control type="date" placeholder="" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
    <p>Buyer Signature</p>
    {[{'type':'checkbox','option':'Buyer Signature'}].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type.type}
        id={`default-${type}`}
        label={`${type.option}`}
      />
    </div>
  ))}
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPassword">
    <p>Seller Signature</p>
    {[{'type':'checkbox','option':'Seller Signature'}].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type.type}
        id={`default-${type}`}
        label={`${type.option}`}
      />
    </div>
  ))}
    </Form.Group>
  </Row>
</Form>
</div>
  )
}

export default ContractForm;