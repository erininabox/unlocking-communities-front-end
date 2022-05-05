import ContractCard from '../../components/ContractCard/ContractCard'

const PastSales = ({contracts}) => {
  return (
    <div>
      <section>
        {contracts.map((contract) => (
          <ContractCard contract={contract}/>
        ))}
      </section>
    </div>
  )
}

export default PastSales