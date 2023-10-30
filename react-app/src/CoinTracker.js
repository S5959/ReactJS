import { useEffect, useState } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [myMoney, setMyMoney] = useState(0);
    const [selectedCoin, setSelectedCoin] = useState(0);
    const getCoin = (event) => setSelectedCoin(event.target.value);
    const onChange = () => setMyMoney(document.getElementById('myMoney').value);
    useEffect(() => {
        fetch(`https://api.coinpaprika.com/v1/tickers`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setCoins(json);
            setLoading(false);
        });
    }, []);
    return (
        <div>
            <h1>The Coins! ({coins.length})</h1>
            {loading ? (
                <strong>Loading...{loading ? "" : `(${coins.length})`}</strong>
            ) : (
                <select onChange={getCoin} style={{fontSize: 14, padding: '5px'}}>
                    <option value={0}>전체</option>
                    {coins.map((coin) => (
                        <option 
                            key={coin.id} 
                            value={coin.quotes.USD.price * 1.0}
                        >
                            {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
                        </option>
                    ))}
                </select>
            )}
            
            <h4>코인 계산기</h4>
            <div>
                <span>Your Money: </span>
                <input 
                    id="myMoney"
                    value={myMoney}
                    onChange={onChange}
                    type="number"
                    placeholder="Write Your USD"
                    style={{fontSize: 14, padding: '5px'}}
                /> USD
            </div>
            <p>
                You can buy <b>{selectedCoin > 0 ? (myMoney / selectedCoin).toFixed(2).toLocaleString() : 0}</b> coins
            </p>
        </div>
    );
}

export default App;