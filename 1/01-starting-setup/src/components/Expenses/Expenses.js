import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';

const Expenses = props => {
	const expenses = props.expenses.map(expense => {
		return (
			<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
		);
	});

	const yearChangeHandler = (pickedYear) => {
		console.log(pickedYear);
	}

	return (<div>
		<ExpenseFilter onYearChange={yearChangeHandler}/>
		<Card className="expenses">{expenses}</Card>
	</div>);
};

export default Expenses;
