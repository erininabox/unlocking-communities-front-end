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
        <div className={styles.row}>
          <li className={styles.column}>Date </li>
          <li className={styles.column}>Sold By: </li>
          <li className={styles.column}> Product: </li>
        </div>
        <div className={styles.row}>
          <li className={styles.column}>{contract.saleDate}</li>
          <li className={styles.column}>{contract.entName}</li>
          <li className={styles.column}>{contract.productPurchased}</li>
        </div>
        <div className={styles.row}>
          <li className={styles.column}> </li>
          <li className={styles.column}>Sold To: </li>
        </div>
        <div className={styles.row}>
          <li className={styles.column}>Paid {contract.amountToBePaid === contract.totalPaid ? '✅ ' : '❌'}</li>
          <li>{contract.buyerFirstName} {contract.buyerLastName}</li>
        </div>
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