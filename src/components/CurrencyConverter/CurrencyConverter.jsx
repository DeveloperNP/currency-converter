import React from "react"
import s from './CurrencyConverter.module.css'
import CurrencyInput from "./CurrencyInput/CurrencyInput";

const CurrencyConverter = () => {
  return <div className={s.currencyConverter}>
    <h1 className={s.converterTitle}>Конвертер Валют</h1>
    <CurrencyInput type='r' />
    <CurrencyInput type='d' />
    <CurrencyInput type='e' />
    <CurrencyInput type='la' />
    <CurrencyInput type='li' />
  </div>
}

export default CurrencyConverter;