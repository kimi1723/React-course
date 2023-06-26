import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';
const ExpensesList = (props) => {
    const expenses = props.items.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />);
    
    if (props.items.length === 0) return <h2 className="expenses-list__fallback">No expenses found.</h2>;
    
    return (
        <ul className="expenses-list">
            {expenses}
        </ul>
    )
}

export default ExpensesList;