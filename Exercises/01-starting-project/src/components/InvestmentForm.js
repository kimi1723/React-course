import {useState} from 'react';
import styles from './InvesmentForm.module.css';

const InvestmentForm = (props) => {
    const [enteredSavings, setEnteredSavings] = useState(0),
          [enteredYearlyContribution, setEnteredYearlyContribution] = useState(0),
          [enteredExpectedReturn, setEnteredExpectedReturn] = useState(0),
          [enteredInvestmentDuration, setEnteredInvestmentDuration] = useState(0);

    const savingsChangeHandler = e => setEnteredSavings(e.target.value),
          yearlyContributionChangeHandler = e => setEnteredYearlyContribution(e.target.value),
          expectedReturnChangeHandler = e => setEnteredExpectedReturn(e.target.value),
          investmentDurationChangeHandler = e => setEnteredInvestmentDuration(e.target.value);

   const formSubmitHandler = e => {
        e.preventDefault();

        const investmentData = {
            currentSavings: Number(enteredSavings),
            yearlyContribution: Number(enteredYearlyContribution),
            expectedReturn: Number(enteredExpectedReturn),
            duration: Number(enteredInvestmentDuration),
        }

       props.calculateInvestment(investmentData);
   }
   
    return <form className={styles.form} onSubmit={formSubmitHandler} onReset={props.resetForm}>
                <div className={styles["input-group"]}>
                    <p>
                        <label htmlFor="current-savings">Current Savings ($)</label>
                        <input type="number" id="current-savings" onChange={savingsChangeHandler}/>
                    </p>
                    <p>
                        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                        <input type="number" id="yearly-contribution" onChange={yearlyContributionChangeHandler}/>
                    </p>
                </div>
                <div className={styles["input-group"]}>
                    <p>
                        <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                        </label>
                        <input type="number" id="expected-return" onChange={expectedReturnChangeHandler}/>
                    </p>
                    <p>
                        <label htmlFor="duration">Investment Duration (years)</label>
                        <input type="number" id="duration" onChange={investmentDurationChangeHandler}/>
                    </p>
                </div>
                <p className={styles.actions}>
                    <button type="reset" className={styles.buttonAlt}>
                        Reset
                    </button>
                    <button type="submit" className={styles.button}>
                        Calculate
                    </button>
                </p>
        </form>
}

export default InvestmentForm;