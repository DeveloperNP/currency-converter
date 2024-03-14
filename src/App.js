import React from 'react';
import './App.css';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
import ExchangeRateTable from './components/ExchangeRateTable/ExchangeRateTable';
import { connect } from 'react-redux';
import { getExchangeData } from './redux/app-reducer'

class App extends React.Component {
  componentDidMount() {
    const {getExchangeData} = this.props;
    getExchangeData();
  }
  
  render() {
    return (
      <div className="App">
        {this.props.currentDate}
        <ExchangeRateTable />
        <CurrencyConverter />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentDate: state.app.currentDate,
  exchangeRates: state.app.exchangeRates
})

export default connect(mapStateToProps, { getExchangeData })(App);
