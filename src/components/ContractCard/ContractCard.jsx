import styles from './ContractCard.module.css'
// import { Form } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
// import { Col } from 'react-bootstrap';
// import { Row } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContractCard = ({contract}) => {
  return (
    <div className={styles.whole}>
      <ul className={styles.ul}>
        <li>Date {contract.saleDate}</li>
        <li>Paid {contract.amountToBePaid === contract.totalPaid ? '✅ ' : '❌'}</li>
        <li> Product: {contract.productPurchased}</li>
        <li>Sold By: {contract.entName}</li>
        <li>Sold To: {contract.buyerFirstName} {contract.buyerLastName}</li>
      </ul>
    </div>
      //   <div className={styles.whole}>
      //   <ListGroup className='align-items-center'>
      //     <ListGroup.Item
      //       as="li"
      //       className="d-flex align-items-center"
      //     >
      //       <div className='ms-2 me-auto list-item-group'>
      //         <div className="fw-bold">Date {contract.saleDate}</div>
      //         Paid {contract.amountToBePaid === contract.totalPaid ? '✅ ' : '❌'}
      //         <div>
      //           Product: {contract.productPurchased}
      //         </div>
      //         <div>
      //           Sold By: {contract.entName}
      //         </div>
      //         <div>
      //           Sold To: {contract.buyerFirstName} {contract.buyerLastName}
      //         </div>
      //       </div>
      //     </ListGroup.Item>
      //   </ListGroup>
      // </div>
  )
}

export default ContractCard