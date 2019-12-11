import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
	const action = removeExpense({ id: '123' })
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123'
	})
})

test('should edit action object', () => {
	const action = editExpense('123', { note: 'aaa' })

	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123',
		updates: {
			note: 'aaa'
		}
	})
})

test('should setup add expense action object with provided values', () => {
	const expenseData = {
		description: 'Rent',
		note: 'This was last months rent',
		amount: 109500,
		createdAt: 1000
	}

	const action = addExpense(expenseData)

	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expenseData,
			id: expect.any(String)
		}
	})
})

test('should setup add expense action object with default values', () => {
	const expenseData = {
		description: '',
		note: '',
		amount: 0,
		createdAt: 0
	}
	const action = addExpense()
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expenseData,
			id: expect.any(String)
		}
	})
})
