import {useState} from 'react';
import './Expenses.css';

import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';

const Expenses = props => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const yearChangeHandler = (pickedYear) => {
		setFilteredYear(pickedYear);
	}
	
	const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear() == filteredYear);

	

	return (
		
		<Card className="expenses">
			<ExpenseFilter pickedYear={filteredYear} onYearChange={yearChangeHandler}/>
			<ExpensesList items={filteredExpenses}/>
		</Card>
	);
};

export default Expenses;
