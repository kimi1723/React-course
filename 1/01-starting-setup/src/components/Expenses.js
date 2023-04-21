import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
	const expenses = props.expenses.map(expense => {
		return (
			<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
		);
	});

	return <div className="expenses">{expenses}</div>;
}

export default Expenses;
