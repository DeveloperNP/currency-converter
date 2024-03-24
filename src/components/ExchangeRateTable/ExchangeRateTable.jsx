import React from "react"
import s from './ExchangeRateTable.module.css'

const createCell = (cellValue, size=4, color='azure') => {
  return <td align="center">
    <font size={size} face="Times New Roman" color={color}>
      {cellValue}
    </font>
  </td>
}

const CreateTableHeader = () => {
  return <tr>
    {createCell('Валюта', 5)}
    {createCell('Курс', 5)}
    {createCell('Предыдущее', 5)}
    {createCell('Разница', 5)}
    {createCell('Разница, %', 5)}
  </tr>
}

const CreateRow = ({currency}) => {
  // РАСЧЕТ ТЕКУЩЕГО И ПРЕДЫДУЩЕГО КУРСОВ
  const currencyValue = Math.round((currency.Value / currency.Nominal) * 10000) / 10000;
  const currencyPrevious = Math.round((currency.Previous / currency.Nominal) * 10000) / 10000;

  // РАСЧЕТ РАЗНИЦЫ КУРСОВ
  const currencyDiff = Math.round((currencyValue - currencyPrevious) * 10000) / 10000;
  const currencyDiffPercent = Math.round((currencyDiff / currencyPrevious * 100) * 10000) / 10000;
  
  // АНАЛИЗ РАЗНИЦЫ КУРСОВ ЕВРО ДЛЯ ВЫБОРА ЦВЕТА
  let currencyDiffColor = "";
  currencyDiff > 0 ? currencyDiffColor = 'limegreen' : currencyDiffColor = 'red';
  if (currencyDiff === 0) currencyDiffColor = 'black';

  // ОТРИСОВКА СТРОЧКИ ТАБЛИЦЫ
  return <tr>
    {createCell(currency.Name)}
    {createCell(currencyValue)}
    {createCell(currencyPrevious)}
    {createCell(currencyDiff, 4, currencyDiffColor)}
    {createCell(currencyDiffPercent, 4, currencyDiffColor)}
  </tr>
}

const ExchangeRateTable = ({exchangeRates}) => {
  return <div className={s.table}>
    <table align="center" cellpadding="10">
      <CreateTableHeader />                       {/* ШАПКА ТАБЛИЦЫ */} 

      <CreateRow currency={exchangeRates.USD} />  {/* СТРОКА С ДОЛЛАРАМИ */}
      <CreateRow currency={exchangeRates.EUR} />  {/* СТРОКА С ЕВРО */}
      <CreateRow currency={exchangeRates.GEL} />  {/* СТРОКА С ЛАРИ */}
      <CreateRow currency={exchangeRates.TRY} />  {/* СТРОКА С ЛИРАМИ */}
    </table>
  </div>
}

export default ExchangeRateTable;