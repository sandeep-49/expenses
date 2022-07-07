import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = props => {
	const [edit, setEdit] = useState(false);

	const saveExpenseDataHandler = enteredExpenseData => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};

		props.onAddExpense(expenseData);
		setEdit(false);
	};

	const editHandler = () => {
		setEdit(true);
	};

	const cancelEditHandler = () => {
		setEdit(false);
	};

	return (
		<div className="new-expense">
			{!edit ? (
				<button onClick={editHandler}>Add New Expense</button>
			) : (
				<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelEditHandler} />
			)}
		</div>
	);
};

export default NewExpense;
