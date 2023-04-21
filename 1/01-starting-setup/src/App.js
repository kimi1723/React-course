import ExpenseItem from './components/ExpenseItem';
import ExerciseComponent from './components/ExerciseComponent';

function App() {
	const data = [
		{
			title: 'Car',
			amount: 12,
		},
		{
			title: 'Book',
			amount: 19.23,
		},
		{
			title: 'Laundry',
			amount: 5,
		},
	];

	return (
		<div>
			<h1>Let's get started!</h1>
			<p>Practicing React...</p>
			<ExpenseItem title={data[0].title} amount={data[0].amount}></ExpenseItem>
			<ExpenseItem title={data[1].title} amount={data[1].amount}></ExpenseItem>
			<ExpenseItem title={data[2].title} amount={data[2].amount}></ExpenseItem>
			<ExerciseComponent></ExerciseComponent>
		</div>
	);
}

export default App;
