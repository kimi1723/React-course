import {useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';

const Expenses = props => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const yearChangeHandler = (pickedYear) => {
		setFilteredYear(pickedYear);
	}

	const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear() == filteredYear);

	const expenses = filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />	);
	
	return (
		
		<Card className="expenses">
			<ExpenseFilter pickedYear={filteredYear} onYearChange={yearChangeHandler}/>
			{expenses}
		</Card>
	);
};

export default Expenses;
