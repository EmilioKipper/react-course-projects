import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' })
	expect(state).toEqual([])
})

test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[2].id
	}
	const state = expensesReducer(expenses, action)
	expect(state).toEqual([expenses[0], expenses[1]])
})

test('should NOT remove expense if id NOT FOUND', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '-1'
	}
	const state = expensesReducer(expenses, action)
	expect(state).toEqual(expenses)
})

test('should add an expense', () => {
	const expense = {
		id: '109',
		description: 'Laptop',
		note: '',
		createdAt: 20000,
		amount: 29500
	}
	const action = {
		type: 'ADD_EXPENSE',
		expense
	}
	const state = expensesReducer(expenses, action)
	expect(state).toEqual([...expenses, expense])
})

test('should edit and expense', () => {
	const id = expenses[2].id,
		description = 'Jam',
		updates = {
			description
		}
	const action = {
		type: 'EDIT_EXPENSE',
		id,
		updates
	}
	const state = expensesReducer(expenses, action)
	expect(state[2].description).toEqual(description)
})

test('should NOT edit and expense if expense NOT FOUND', () => {
	const id = '-4',
		description = 'Jam',
		updates = {
			description
		}
	const action = {
		type: 'EDIT_EXPENSE',
		id,
		updates
	}
	const state = expensesReducer(expenses, action)
	expect(state).toEqual(expenses)
})
