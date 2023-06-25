import {useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';

const Expenses = props => {
	const [filteredYear, setFilteredYear] = useState('2019');

	const yearChangeHandler = (pickedYear) => {
		setFilteredYear(pickedYear);
	}

	const expenses = props.expenses.map(expense => {
		return (
			<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
		);
	});

	return (<div>
		<ExpenseFilter pickedYear={filteredYear} onYearChange={yearChangeHandler}/>
		<Card className="expenses">{expenses}</Card>
	</div>);
};

export default Expenses;
