import moment from "moment";

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses
        .filter(expense => {
            const createdAtMoment = moment(expense.createAt);
            const startDateMatch = startDate
                ? startDate.isSameOrBefore(createdAtMoment, "day")
                : true;

            const endDateMatch = endDate
                ? endDate.isSameOrAfter(createdAtMoment, "day")
                : true;

            const textMatch = expense.description
                .toLowerCase()
                .includes(text.toLowerCase());

            return startDateMatch && endDateMatch && textMatch;
        })
        .sort((a, b) => {
            if (sortBy === "date") {
                // Return newer first -1 = a, 1 = b
                return a.createAt < b.createAt ? 1 : -1;
            } else if (sortBy === "amount") {
                return a.amount > b.amount ? -1 : 1;
            }
        });
};
