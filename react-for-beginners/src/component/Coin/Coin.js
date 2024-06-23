import { useEffect, useState } from "react";

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((item) => { 
            return (
                <li key={item.id}>
                    {item.name} ({item.symbol}) : ${item.quotes.USD.price}USD / #{item.quotes.USD.price * 0.00001556}BTC
                </li>
            );
        })}
      </ul>
    </div>
  );
};

export default Coin;