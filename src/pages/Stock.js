import React from "react";
import stocks from "../data.json";


const StockPrice = (props) => {

  // Grabbing the Currency symbol from the URL Param
//   const symbol = props.match.params.symbol;
  // Using the other two variables to create our URL


    //state to hold the stock data
    const [stock, setStock] = React.useState(stocks[0]);

  //function to fetch coin data
  // const getStock = async () => {
  //   setStock();
  // };

  // useEffect to run getStock when component mounts
  // React.useEffect(() => {
  //   getStock();
  // }, []);

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