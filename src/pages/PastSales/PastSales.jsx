const PastSales = ({contracts}) => {
  return (
    <div>
      <section>
        {contracts.map((contract) => (
          <h2>I'm one contract</h2>
        ))}
      </section>
    </div>
  )
}

export default PastSales