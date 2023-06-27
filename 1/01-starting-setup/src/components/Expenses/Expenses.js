import {useState} from 'react';
import './Expenses.css';

import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';

const Expenses = props => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const yearChangeHandler = (pickedYear) => {
		setFilteredYear(pickedYear);
	}
	
	const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear() == filteredYear);

	

	return (
		
		<Card className="expenses">
			<ExpenseFilter pickedYear={filteredYear} onYearChange={yearChangeHandler}/>
			<ExpensesChart expenses={filteredExpenses}/>
			<ExpensesList items={filteredExpenses}/>
		</Card>
	);
};

export default Expenses;
