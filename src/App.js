import React from 'react';
import './App.css';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
import ExchangeRateTable from './components/ExchangeRateTable/ExchangeRateTable';
import { connect } from 'react-redux';
import { getExchangeData } from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader';
import ParsedDate from './components/ParsedDate/ParsedDate';

class App extends React.Component {
  componentDidMount() {
    const {getExchangeData} = this.props;
    getExchangeData();
  }

  render() {
    if(!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="App">
        <ParsedDate rawDate={this.props.currentDate} />
        <ExchangeRateTable exchangeRates={this.props.exchangeRates} />
        <CurrencyConverter />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentDate: state.app.currentDate,
  exchangeRates: state.app.exchangeRates,
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { getExchangeData })(App);
