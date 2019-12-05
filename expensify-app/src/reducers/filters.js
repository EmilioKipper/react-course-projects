import moment from "moment";

// Filters Reducer

const filtersReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            const { text } = action;
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
            console.log('aaaction', action.date)
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
