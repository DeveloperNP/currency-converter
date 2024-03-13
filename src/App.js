import React from 'react';
import './App.css';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
import ExchangeRateTable from './components/ExchangeRateTable/ExchangeRateTable';

function App() {
  return (
    <div className="App">
      <ExchangeRateTable />
      <CurrencyConverter />
    </div>
  );
}

export default App;
