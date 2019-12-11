import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let wrapper, removeExpense, editExpense, history

beforeEach(() => {
	removeExpense = jest.fn()
	editExpense = jest.fn()
	history = { push: jest.fn() }
	wrapper = shallow(
		<EditExpensePage
			removeExpense={removeExpense}
			editExpense={editExpense}
            history={history}
            expense={expenses[1]}
		/>
	)
})

test('should render EditExpensePage', () => {
	expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
	expect(history.push).toHaveBeenLastCalledWith('/')
	expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])
})

test('should handle removeExpense', () => {
	wrapper.find('button').simulate('click')
	expect(history.push).toHaveBeenLastCalledWith('/')
	expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[1].id})
})
