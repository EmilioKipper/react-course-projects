import React from "react";
import { Link } from "react-router-dom";

const Portfolio = props => {
  console.log(props.match.params.id);
  if (props.match.params.id) {
    return <div>Work {props.match.params.id}</div> 
  } else {
    return (
      <div>
        <h1>Checkout</h1>
        <ul>
          <li>
            <Link to="/portfolio/1">1</Link>
          </li>
          <li>
            <Link to="/portfolio/2">2</Link>
          </li>
        </ul>
      </div>
    );
  }
};

export default Portfolio;
