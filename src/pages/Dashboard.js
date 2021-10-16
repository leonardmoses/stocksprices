import React from "react";
import {Link} from "react-router-dom";
import stocks from "../data.json";

const Stocks = (props) => {
  
    const stocksLinks = stocks.map(
      (ticker) => {
        const { name, symbol } = ticker;
  
        return (
          <Link to={`/price/${symbol}`} >
            <h2>{name}</h2>
          </Link>
        );
      }
    )
  
    return (
      <div className="stockslinks">
        {stocksLinks}
      </div>
    );
  };

export default Stocks;

