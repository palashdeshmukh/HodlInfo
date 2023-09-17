import React, { useState, useEffect } from 'react';
import '../styles/Cryptotable.css';

function Cryptotable() {
  const [tickers, setTickers] = useState([]);
  useEffect(() => {
    // Define the API URL
    const apiUrl = 'http://localhost:3001/api/v2/tickers';

    // Make a GET request to the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Data from the API will be stored in the 'data' variable
        console.log(data);
        setTickers(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const formatNumberWithCommas = (number) => {
    return number.toLocaleString();
  };

  return (
    <>
      <div id='crypto-container'>
        <table>
          <thead>
            <tr>
              <th><h2>#</h2></th>
              <th><h2>Platform</h2></th>
              <th><h2>Last Traded Price</h2></th>
              <th><h2>Buy / Sell Price</h2></th>
              <th><h2>Difference</h2></th>
              <th><h2>Savings</h2></th>
            </tr>
          </thead>
          <tbody>
            {Object.values(tickers).map((item) => (
              <tr key={item.id}>
                <td><h2 className='curveBox-one'>{1}</h2></td>
                <td><h2>{item.base_unit}</h2></td>
                <td><h2>{formatNumberWithCommas(item.last)}</h2></td>
                <td><h2>{formatNumberWithCommas(item.buy)} / {formatNumberWithCommas(item.sell)}</h2></td>
                <td><h2>{formatNumberWithCommas(item.volume)}</h2></td>
                <td><h2 className='curveBox-two'>{formatNumberWithCommas(item.volume)}</h2></td>

                {/* Remove the empty curly braces below */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Cryptotable;
