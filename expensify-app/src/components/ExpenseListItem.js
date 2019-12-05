import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, createdAt, amount, dispatch }) => (
    <div>
    <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
    </Link>
        <p>
            {amount} - {createdAt}
        </p>
        
    </div>
);

export default connect()(ExpenseListItem);
