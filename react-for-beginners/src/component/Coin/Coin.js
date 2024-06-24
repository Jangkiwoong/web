import { useEffect, useState } from "react";

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myMoney, setMyMoney] = useState(0);
  const [getCoin, setGetCoin] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  // useEffect(() => {
  //   console.log("coins :" + getCoin);
  // }, [getCoin]);
  // console.log(getCoin);
  // useEffect(() => {
  //   console.log("myMoney :" + myMoney);
  // }, [myMoney]);
  return (
    <div>
      <div>
        <h1>The Coins! ({coins.length})</h1>
        {loading ? (
          <strong>Loading...</strong>
        ) : (
          <select
            onChange={(event) => {
              setGetCoin(event.target.value);
            }}
          >
            <option key="-1">select coin</option>
            {coins.map((item) => {
              return (
                <option key={item.id} value={item.quotes.USD.price}>
                  {item.name} ({item.symbol}) : ${item.quotes.USD.price}USD / #
                  {item.quotes.USD.price * 0.00001556}BTC
                </option>
              );
            })}
          </select>
        )}
      </div>
      <div>
        {loading ? null : (
          <div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <input
                type="number"
                placeholder="Have coins"
                value={myMoney}
                onChange={(event) => {
                  setMyMoney(event.target.value);
                }}
              ></input>
            </form>
            <h3>
              Coins you can buy: {getCoin > 0 ? myMoney / getCoin : "null"}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Coin;
