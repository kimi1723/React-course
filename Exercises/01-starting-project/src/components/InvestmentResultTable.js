import styles from './InvestmentResultsTable.module.css';

const InvestmentResultTable = (props) => {

  const resultRows = props.investmentData.map(investmentYearResult => {
       return <tr key={investmentYearResult.id}>
          <td>{investmentYearResult.year}</td>
          <td>{`$${(investmentYearResult.savingsEndOfYear).toFixed(2)}`}</td>
          <td>{`$${(investmentYearResult.yearlyInterest).toFixed(2)}`}</td>
          <td>{`$${(investmentYearResult.totalInterest).toFixed(2)}`}</td>
          <td>{`$${(investmentYearResult.investedCapital).toFixed(2)}`}</td>
        </tr>
  })
     
    return   <table className={styles.result}>
                  <thead>
                      <tr>
                        <th>Year</th>
                        <th>Total Savings</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                      </tr>
                  </thead>
                  <tbody>
                    {resultRows}
                  </tbody>
             </table>
}

export default InvestmentResultTable;