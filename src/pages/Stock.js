import React from "react";
import { useParams } from "react-router";
import stocks from "../data.json";


const StockPrice = (props) => {
  // let { symbol } = useParams();

  //   const filteredstock = stocks.filter((stock) => {
      
  //     console.log(stock);
  //   })
    
  const stock = props.stocks.filter(stocks => stocks.symbol === props.match.params.symbol)[0]

    // const [stock, setStock] = React.useState(null);

    // loaded function for when data is fetched
    const loaded = () => {
        return (
            <div>
                <h1>
                    Name: {stock.name}
                </h1>
                <h2>
                    Last price: {stock.lastPrice}
                    
                    

                </h2>
            </div>
        )
    }


    // const loading = () => {
    //     return <h1>Loading...</h1>;
    // };

    return loaded();

};


export default StockPrice;