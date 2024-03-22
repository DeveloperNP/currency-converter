import React from "react"
import s from './CurrencyConverter.module.css'
import CurrencyInput from "./CurrencyInput/CurrencyInput";
import { connect } from "react-redux";
import { inputChanged } from "../../redux/converter-reducer";



function tryConvert (amount, convert) {
  const input = parseFloat(amount);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 10000) / 10000
  return rounded.toString();
}

const rublesToCurrency = (rubles, currency) => () => {
  return rubles / (Math.round((currency.Value / currency.Nominal) * 10000) / 10000);
}

const currencyToRubles = (currAmount, currency) => () => {
  return currAmount * (Math.round((currency.Value / currency.Nominal) * 10000) / 10000); 
}



const CurrencyConverter = ({currType, amount, inputChanged, USD, EUR, GEL, TRY}) => {
  
  let rubles = null;
  let dollars = null;
  let euros = null;
  let laris = null;
  let liras = null;

  switch (currType) {
    case 'r':
      rubles = amount;
      dollars = tryConvert(rubles, rublesToCurrency(rubles, USD));
      euros = tryConvert(rubles, rublesToCurrency(rubles, EUR));
      laris = tryConvert(rubles, rublesToCurrency(rubles, GEL));
      liras = tryConvert(rubles, rublesToCurrency(rubles, TRY));
      break;

    case 'd':
      dollars = amount;  
      rubles = tryConvert(dollars, currencyToRubles(dollars, USD));      
      euros = tryConvert(rubles, rublesToCurrency(rubles, EUR));
      laris = tryConvert(rubles, rublesToCurrency(rubles, GEL));
      liras = tryConvert(rubles, rublesToCurrency(rubles, TRY));
      break;

    case 'e':
      euros = amount;  
      rubles = tryConvert(euros, currencyToRubles(euros, EUR));
      dollars = tryConvert(rubles, rublesToCurrency(rubles, USD));      
      laris = tryConvert(rubles, rublesToCurrency(rubles, GEL));
      liras = tryConvert(rubles, rublesToCurrency(rubles, TRY));
      break;

    case 'la':
      laris = amount;  
      rubles = tryConvert(laris, currencyToRubles(laris, GEL));
      dollars = tryConvert(rubles, rublesToCurrency(rubles, USD));
      euros = tryConvert(rubles, rublesToCurrency(rubles, EUR));     
      liras = tryConvert(rubles, rublesToCurrency(rubles, TRY));
      break;

    case 'li':
      liras = amount;  
      rubles = tryConvert(liras, currencyToRubles(liras, TRY));
      dollars = tryConvert(rubles, rublesToCurrency(rubles, USD));
      euros = tryConvert(rubles, rublesToCurrency(rubles, EUR));
      laris = tryConvert(rubles, rublesToCurrency(rubles, GEL));    
      break;

    default:
      break;
  }


  return <div className={s.currencyConverter}>
    <h1 className={s.converterTitle}>Конвертер Валют</h1>
    <CurrencyInput type='r' amount={rubles} onAmountChange={inputChanged} />
    <CurrencyInput type='d' amount={dollars} onAmountChange={inputChanged} />
    <CurrencyInput type='e' amount={euros} onAmountChange={inputChanged} />
    <CurrencyInput type='la' amount={laris} onAmountChange={inputChanged} />
    <CurrencyInput type='li' amount={liras} onAmountChange={inputChanged} />
  </div>
}

const mapStateToProps = (state) => ({
  currType: state.converter.currType,
  amount: state.converter.amount,
  USD: state.app.exchangeRates.USD,
  EUR: state.app.exchangeRates.EUR,
  GEL: state.app.exchangeRates.GEL,
  TRY: state.app.exchangeRates.TRY
})

export default connect(mapStateToProps, { inputChanged })(CurrencyConverter);