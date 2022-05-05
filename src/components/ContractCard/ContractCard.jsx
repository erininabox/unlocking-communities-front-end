const ContractCard = ({contract}) => {
  return (
    <div>
      <p>Sale Date: {contract.saleDate}</p>
      <p>Sold By: {contract.entName}</p>
      <p>Sold To: {contract.buyerFirstName} {contract.buyerLastName}</p>
      <p>Product: {contract.productPurchased}</p>
      <p>Paid {contract.amountToBePaid === contract.totalPaid ? '✅ ' : '❌'}</p>
    </div>
  )
}

export default ContractCard