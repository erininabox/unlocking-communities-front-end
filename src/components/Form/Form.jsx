import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import * as contractService from '../../services/contractService'
import styles from "./Form.module.css";
import 'react-phone-number-input/style.css'
import Entrepreneurs from '../../data/Entrepreneurs'
import Communities from '../../data/Community';
import { useNavigate } from 'react-router-dom';



const ContractForm = ({addContract}) => {
  // const [contract, setContract] = useState({})
  const navigate = useNavigate()
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
    console.log(entName)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(formData)
    try {
      await contractService.createContract(formData)
      .then(formData => {
        setFormData(formData)
        navigate('/dashboard')
      })
    } catch (err) {
      console.log(err)
    }
  }

  const { entName, businessName, saleDate, buyerFirstName, buyerLastName, natcomNum, digicelNum, why, productPurchased, productNum, paymentType, totalPaid, amountToBePaid, numberofPayments, amountPerPayment } = formData

  const SellerDropdown = Entrepreneurs.map((seller, index) => (
    <option
      key={index}
      eventKey={index}>{seller.name}</option>
  ));
  
  const CommunityDropdown = Communities.map((city, i) => (
    <option
      key={i}
      eventKey={i}>{city.name}</option>
  ));
  return (
  <div>
    <h2 className={styles.FormTitle}>Deboke Kominote Yo Sales Contract</h2>
    <h5 className={styles.FormTitle}>Sales Contract</h5>
    <Form>
      <h4 className={styles.FormLabel}>Date of Sale</h4>
      <Form.Group as={Col} controlId="formContractDate">
        <Form.Label>Date of Payment</Form.Label>
        <Form.Control type="date" placeholder="" 
          value={saleDate}
          name='saleDate'
          onChange={handleChange}
          autoComplete='off'
        />

      </Form.Group>
      <h4 className={styles.FormLabel}>Entrepreneur Information</h4>
      <Form.Group as={Col} controlId="formEntrepreneurName">
      <Form.Label>Entrepreneur Name</Form.Label>
      <Form.Select aria-label="Default select example"
      onChange={handleChange}
      value={entName}
      name='entName'>
        {SellerDropdown}
      </Form.Select>
        
      </Form.Group>
      <Form.Group as={Col} controlId="formBusinessName">
        <Form.Label>Business Name</Form.Label>
        <Form.Select aria-label="Default select example"
            name='businessName'
            value={businessName}  
            placeholder="Non biznis" 
            onChange={handleChange}
            >
          {CommunityDropdown}
        </Form.Select>
      </Form.Group>
      
      <h4 className={styles.FormLabel}> Buyer Information </h4>
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
      // id="phone" 
      name="digicelNum" 
      pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" 
      placeholder="Nimewo Digicel" 
      onChange={handleChange}
      value={digicelNum}
      autoComplete='off'
    />
  </Form.Group>

    <h4 className={styles.FormLabel}>Product and Payment Information</h4>

    <Form.Group as={Col} controlId="BuyerReason">
    <p className={styles.FormLabelText}>Why is the buyer purchasing this product? </p>
  {[{'type':'radio','option': 'Because buying it will save money'},{'type':'radio','option':'Because their family is getting sick'},{'type':'radio','option': 'Because they dont like the taste of chlorine'},{'type':'radio','option':'other'}].map((type) => (
    <div key={`-${type}`} className="BuyerReason">
      <Form.Check
        label={type.option}
        name="why"
        type={type.type}
        id={`-${type}-1`}
        value={why}
        onChange={handleChange}
      />
    </div>
  ))}
  </Form.Group>


  <p className={styles.FormLabelText}>Product Purchased (select one)</p>
  {[{'type':'radio','option': 'Water Filtration System'},{'type':'radio','option':'Filter Only'},{'type':'radio','option':'Clean Burning Stove'},{'type':'radio','option':'Replacement Part'},{'type':'radio','option':'Other'}].map((type) => (
    <div key={`-${type}`} className="ProductPurchased">
      <Form.Check
        label={type.option}
        name="productPurchased"
        type={type.type}
        id={`-${type}-1`}
        value={productPurchased}
        onChange={handleChange}
      />
    </div>
  ))}

    <Form.Group as={Col} controlId="ProductNumber">
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

    <Form.Group as={Col} controlId="PaymentType">
    <p className={styles.FormLabelText}>Payment Type (select one)</p>
  {[{'type':'radio','option': 'Loan'},{'type':'radio','option':'Cash'}].map((type) => (
    <div key={`-${type}`} className="PaymentType">
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
  </Form.Group>

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
  <Form.Group className="mb-3" controlId="TotalDeposit">
    <Form.Label>Total Deposit OR Full Cash Amount</Form.Label>
    <Form.Control 
      type="number" 
      placeholder="HTG" 
      value={totalPaid}
      name="totalPaid"
      autoComplete='off'
      onChange={handleChange}
    />
  </Form.Group>
  <Form.Group className="mb-3" controlId="NumberOfPayments">
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
  <Form.Group className="mb-3" controlId="AmountPerPayment">
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
    className={styles.submitbtn}
  >
    Submit
  </Button>
</Form>
{/* <hr></hr>
<h4 className={styles.FormTitle}>Payment Tracking</h4>
<Form className='Payment Tracking'>

  <Row className="PaymentTrackingRow1">
    <Form.Group as={Col} controlId="PaymentAmount">
      <Form.Label>Deposit OR Full Cash Payment</Form.Label>
      <Form.Control type="number" placeholder="Payment" />
    </Form.Group>

    <Form.Group as={Col} controlId="PaymentDate">
      <Form.Label>Date of Payment</Form.Label>
      <Form.Control type="date" placeholder="PaymentAmount1" />
    </Form.Group>

    <Form.Group as={Col} controlId="BuyerSignature1">
    <p >Buyer Signature</p>
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
    <Form.Group as={Col} controlId="SellerSignature1">
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
  <hr></hr>
  <Row className="PaymentTrackingRow2">
    <Form.Group as={Col} controlId="LoanPaymentAmount1">
      <Form.Label>Payment Amount 1 (loan only)</Form.Label>
      <Form.Control type="number" placeholder="Loan Payment" />
    </Form.Group>

    <Form.Group as={Col} controlId="LoanPaymentDate1">
      <Form.Label>Date of Payment</Form.Label>
      <Form.Control type="date" placeholder="" />
    </Form.Group>

    <Form.Group as={Col} controlId="BuyerSignature2">
    <p>Buyer Signature</p>
    {[{'type':'checkbox','option':'Buyer Signature'}].map((type) => (
    <div key={`default-${type}`} className="FormCheckbox">
      <Form.Check 
        type={type.type}
        id={`default-${type.type}`}
        label={`${type.option}`}
      />
    </div>
  ))}
    </Form.Group>
    <Form.Group as={Col} controlId="SellerSignature2">
    <p>Seller Signature</p>
    {[{'type':'checkbox','option':'Seller Signature'}].map((type) => (
    <div key={`default-${type}`} className="FormCheckbox">
      <Form.Check 
        type={type.type}
        id={`default-${type.type}`}
        label={`${type.option}`}
      />
    </div>
  ))}
    </Form.Group>
  </Row>
<hr></hr>
  <Row className="PaymentTrackingRow3">
    <Form.Group as={Col} controlId="LoanPaymentAmount2">
      <Form.Label>Payment Amount 2 (loan only)</Form.Label>
      <Form.Control type="number" placeholder="Loan Payment" />
    </Form.Group>

    <Form.Group as={Col} controlId="LoanPaymentDate2">
      <Form.Label>Date of Payment</Form.Label>
      <Form.Control type="date" placeholder="" />
    </Form.Group>

    <Form.Group as={Col} controlId="BuyerSignature3">
    <p>Buyer Signature</p>
    {[{'type':'checkbox','option':'Buyer Signature'}].map((type) => (
    <div key={`default-${type}`} className="FormCheckbox">
      <Form.Check 
        type={type.type}
        id={`default-${type.type}`}
        label={`${type.option}`}
      />
    </div>
  ))}
    </Form.Group>
    <Form.Group as={Col} controlId="SellerSignature3">
    <p>Seller Signature</p>
    {[{'type':'checkbox','option':'Seller Signature'}].map((type) => (
    <div key={`default-${type}`} className="FormCheckbox">
      <Form.Check 
        type={type.type}
        id={`default-${type.type}`}
        label={`${type.option}`}
      />
    </div>
  ))}
    </Form.Group>
  </Row>
</Form> */}
</div>
  )
}

export default ContractForm;
