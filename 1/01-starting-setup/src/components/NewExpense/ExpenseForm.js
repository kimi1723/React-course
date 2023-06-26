import {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState(''),
	[enteredAmount, setEnteredAmount] = useState(''),
	[enteredDate, setEnteredDate] = useState(''),
	[isAdding, setAdding] = useState('false');

	const titleChangeHandler = (e) => {
		setEnteredTitle(e.target.value);
	}, amountChangeHandler = (e) => {
		setEnteredAmount(e.target.value);
	}, dateChangeHandler = (e) => {
		setEnteredDate(e.target.value);
	}, submitHandler = (e) => {
		e.preventDefault();
		closeFormHandler();

	

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData);

		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
		
	}

	const addNewExpenseHandler = () => {
		setAdding('true');
	}

	const closeFormHandler = () => {
		setAdding('false');
	}

	let formContent;

	isAdding === 'false' ? formContent = <button onClick={addNewExpenseHandler}>Add new expense</button> : formContent = <form onSubmit={submitHandler}>
	<div className="new-expense__controls">
		<div className="new-expense__control">
			<label>Title</label>
			<input type="text" placeholder="Enter title" value={enteredTitle} onChange={titleChangeHandler}/>
		</div>
		<div className="new-expense__control">
			<label>Amount</label>
			<input type="number" min="0.01" step="0.01" value={enteredAmount} placeholder="Set amount" onChange={amountChangeHandler} />
		</div>
		<div className="new-expense__control">
			<label>Date</label>
			<input type="date" min="2019-01-01" step="2022-12-31" value={enteredDate} onChange={(e) => dateChangeHandler(e)} />
		</div>
	</div>
	<div className="new-expense__actions">
		<button type="button" onClick={closeFormHandler}>Close</button>
		<button type="submit">Add Expense</button>
	</div>
</form>;

	return (
		formContent
	);
};

export default ExpenseForm;
