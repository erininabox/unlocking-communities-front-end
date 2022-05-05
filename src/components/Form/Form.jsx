import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Form.module.css";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { isPossiblePhoneNumber } from 'react-phone-number-input'

// isValid = () => {
//     isPossiblePhoneNumber(value) {
//         if value
//     }
//     }
// }

import DatePicker from "react-datepicker";


const ContractForm = () => {
    const [startDate, setStartDate] = useState(new Date());    
    const [value, setValue] = useState()
    const [value1, setValue1] = useState()

  return (
    <div>
<h2 className={styles.FormTitle}>Deboke Kominote Yo Sales Contract</h2>
<h5 className={styles.FormTitle}>Sales Contract</h5>
<Form>
<h4 className={styles.FormLabel}>Date of Sale</h4>
<Form.Group as={Col} controlId="formContractDate">
<Form.Label>Date of Payment</Form.Label>
      <Form.Control type="date" placeholder="" />
</Form.Group>
<h4 className={styles.FormLabel}>Entrepreneur Information</h4>
<Form.Group as={Col} controlId="formEntrepreneurName">
      <Form.Label>Entrepreneur Name</Form.Label>
      <Form.Control type="text" placeholder="Non antreprenè" />
    </Form.Group>

    <Form.Group as={Col} controlId="formBusinessName">
      <Form.Label>Business Name</Form.Label>
      <Form.Control type="text" placeholder="Non biznis" />
    </Form.Group>

    <h4 className={styles.FormLabel}> Buyer Information </h4>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formBuyerFirst">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Premye Non" />
    </Form.Group>

    <Form.Group as={Col} controlId="formBuyerLast">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Siyati" />
    </Form.Group>
  </Row>
    <div className={styles.PhoneLabel}>
    <h6 className={styles.FormLabelText}> Natcom Number: </h6>
        <PhoneInput
        defaultCountry="HT"
        value={value}
        placeholder="Nimewo Natcom"
        onChange={() => {setValue(); isPossiblePhoneNumber(value) ? true : false }}
        style={{backgroundColor: "#ff6f69"}}/>
    
    </div>

  <Form.Group className="Digicel" controlId="formDigicel">
  <div className={styles.PhoneLabel}>
  <h6 className={styles.FormLabelText}> Digicel Number: </h6>
       <PhoneInput
        defaultCountry="HT"
        value={value1}
        placeholder="Nimewo Digicel"
        onChange={setValue1}
        {isLoggedIn ? 'currently' : 'not'}/>
    </div>
    <Form.Group as={Col} controlId="BuyerReason">
    <p className={styles.FormLabelText}>Why is the buyer purchasing this product? </p>
  {[{'type':'radio','option': 'Because buying it will save money'},{'type':'radio','option':'Because their family is getting sick'},{'type':'radio','option': 'Because they dont like the taste of chlorine'},{'type':'radio','option':'other'}].map((type) => (
    <div key={`-${type}`} className="BuyerReason">
      <Form.Check
        label={type.option}
        name="BuyerReason"
        type={type.type}
        id={`-${type}-1`}
      />
    </div>
  ))}
  </Form.Group>

    <h4 className={styles.FormLabel}>Product and Payment Information</h4>

  </Form.Group>
  <p className={styles.FormLabelText}>Product Purchased (select one)</p>
  {[{'type':'radio','option': 'Water Filtration System'},{'type':'radio','option':'Filter Only'},{'type':'radio','option':'Clean Burning Stove'},{'type':'radio','option':'Replacement Part'},{'type':'radio','option':'Other'}].map((type) => (
    <div key={`-${type}`} className="ProductPurchased">
      <Form.Check
        label={type.option}
        name="ProductPurchased"
        type={type.type}
        id={`-${type}-1`}
      />
    </div>
  ))}

    <Form.Group as={Col} controlId="ProductNumber">
      <Form.Label>Product Number</Form.Label>
      <Form.Control type="number" placeholder="Product Number" />
    </Form.Group>

    <Form.Group as={Col} controlId="PaymentType">
    <p className={styles.FormLabelText}>Payment Type (select one)</p>
  {[{'type':'radio','option': 'Loan'},{'type':'radio','option':'Cash'}].map((type) => (
    <div key={`-${type}`} className="PaymentType">
      <Form.Check
        label={type.option}
        name="PaymentType"
        type={type.type}
        id={`-${type}-1`}
      />
    </div>
  ))}
  </Form.Group>
   <Form.Group className="mb-3" controlId="TotalAmount">
    <Form.Label>Total Amount to be Paid</Form.Label>
    <Form.Control type="number" placeholder="HTG"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="TotalDeposit">
    <Form.Label>Total Deposit OR Full Cash Amount</Form.Label>
    <Form.Control type="number" placeholder="HTG" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="NumberOfPayments">
    <Form.Label>Total Number of Payments (loan only)</Form.Label>
    <Form.Control type="number" placeholder="HTG" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="AmountPerPayment">
    <Form.Label>Amount per Payment (loan only)</Form.Label>
    <Form.Control type="number" placeholder="HTG" />
  </Form.Group>
  <hr></hr>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<hr></hr>
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
</Form>
</div>
  )
}

export default ContractForm;