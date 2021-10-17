import React from "react";
import {Link} from "react-router-dom";
import stocks from "../data.json";

const Stocks = (props) => {
  
    const stocksLinks = stocks.map(
      (stock) => {
        const { name, symbol } = stock;
  
        return (
          <Link to={`/Stock/${symbol}`} >
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

