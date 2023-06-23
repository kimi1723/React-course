import {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
	const [enteredTitle, setEnteredTitle] = useState('Title'),
	[enteredAmount, setEnteredAmount] = useState('$ Amount'),
	[enteredDate, setEnteredDate] = useState('Date');

	const titleChangeHandler = (e) => {
		setEnteredTitle(e.target.value);
	}, amountChangeHandler = (e) => {
		setEnteredAmount(`$${e.target.value}`);
	}, dateChangeHandler = (e) => {
		setEnteredDate(e.target.value);
	}

	if(enteredAmount === '$') setEnteredAmount('$ Amount');
	if(enteredTitle === '') setEnteredTitle('Title');
	

	return (
		<form>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>{enteredTitle}</label>
					<input type="text" placeholder="Enter title" onChange={titleChangeHandler}/>
				</div>
				<div className="new-expense__control">
					<label>{enteredAmount}</label>
					<input type="number" min="0.01" step="0.01" placeholder="Set amount" onChange={amountChangeHandler} />
				</div>
				<div className="new-expense__control">
					<label>{enteredDate}</label>
					<input type="date" min="2019-01-01" step="2022-12-31" onChange={(e) => dateChangeHandler(e)} />
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
