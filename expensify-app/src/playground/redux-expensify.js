import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// ADD_EXPENSE
const addExpense = ({
    description = "",
    note = "",
    amount = 0,
    createAt = 0
} = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: "SORT_BY_DATE",
    sortBy: "date"
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
    sortBy: "amount"
});

// SET_START_DATE
const setStartDate = date => ({
    type: "SET_START_DATE",
    date
});
// SET_END_DATE
const setEndDate = date => ({
    type: "SET_END_DATE",
    date
});

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [...state, action.expense];
        case "REMOVE_EXPENSE":
            return state.filter(({ id }) => id !== action.id);
        case "EDIT_EXPENSE":
            return state.map(expense => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });

        default:
            return state;
    }
};

// Filters Reducer

const filtersReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            const { text } = action;
            console.log({...state,text})
            return {
                ...state,
                text
            };
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: action.sortBy
            };
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: action.sortBy
            };
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.date
            };
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.date
            };
        default:
            return state;
    }
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses
        .filter(expense => {
            const startDateMatch =
                typeof startDate !== "number" || expense.createAt >= startDate;
            const endDateMatch =
                typeof endDate !== "number" || expense.createAt <= endDate;
            const textMatch = expense.description
                .toLowerCase()
                .includes(text.toLowerCase());

            return startDateMatch && endDateMatch && textMatch;
        })
        .sort((a, b) => {
            console.log(sortBy);
            if (sortBy === "date") {
                // Return newer first -1 = a, 1 = b
                return a.createAt < b.createAt ? 1 : -1;
            } else if (sortBy === "amount") {
                return a.amount > b.amount ? -1 : 1;
            }
        });
};

// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const exp1 = store.dispatch(
    addExpense({ description: "rent", amount: 105, createAt: -21000 })
);
const exp2 = store.dispatch(
    addExpense({ description: "coffe", amount: 102, createAt: -1000 })
);

// store.dispatch(removeExpense({ id: exp1.expense.id }));
// store.dispatch(editExpense(exp2.expense.id, { amount: 500 }));

store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(1000));
// store.dispatch(setStartDate());
// store.dispatch(setStartDate(1250));

const demoState = {
    expenses: [
        {
            id: "aasda",
            description: "January Rent",
            note: "this was the final payment for that address",
            amount: 54500,
            createAt: 0
        }
    ],
    filters: {
        text: "rent",
        sortBy: "amount", //date or amount
        startDate: undefined,
        endDate: undefined
    }
};
