import {useState} from 'react';
import Header from './components/UI/Header';
import InvestmentForm from './components/InvestmentForm';
import InvestmentResultTable from './components/InvestmentResultTable';

function App() {
  const [yearlyInvestmentData, setYearlyInvestmentData] = useState([]);
   let isDataAvailable;
   const tab =[];

  const calculateInvestmentHandler = (investmentData) => {
      
       const {yearlyContribution, expectedReturn, duration} = investmentData;
       let {currentSavings} = investmentData,
       investedCapital = currentSavings,
       totalInterest = 0;

       for (let i = 0; i < duration; i++) {
         const yearlyInterest = currentSavings * (expectedReturn / 100);
         investedCapital+=yearlyContribution;
         currentSavings += yearlyInterest + yearlyContribution;
         totalInterest += yearlyInterest;
         
         

        

        tab.push({
          id:Math.random().toString(),
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
          totalInterest: totalInterest,
          investedCapital:investedCapital
        })

            //   setYearlyInvestmentData((data) => [...data,
            //     {
            //       year: i + 1,
            //       yearlyInterest: yearlyInterest,
            //       savingsEndOfYear: currentSavings,
            //       yearlyContribution: yearlyContribution,
            //       totalInterest: totalInterest,
            //     }
            // ]);
    }
    setYearlyInvestmentData([...tab]);
  }

  const formResetHandler = () => {
    setYearlyInvestmentData([]);
  }

  yearlyInvestmentData.length === 0 ? isDataAvailable = false : isDataAvailable = true;

  return (
    <div>
     <Header />

      <InvestmentForm calculateInvestment={calculateInvestmentHandler} resetForm={formResetHandler}/>

      {isDataAvailable && <InvestmentResultTable investmentData={yearlyInvestmentData}/>}
      {!isDataAvailable && <h2>No data found.</h2>}

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

    
    </div>
  );
}

export default App;
