import React from "react"
import s from './ExchangeRateTable.module.css'

const createCell = (cellValue, size=4, color='azure') => {
  return <td align="center">
    <font size={size} face="Times New Roman" color={color}>
      {cellValue}
    </font>
  </td>
}

const ExchangeRateTable = () => {
  return <div className={s.table}>
    <table align="center" cellpadding="10">
      
      {/* ШАПКА ТАБЛИЦЫ */} 
      <tr>        
        {createCell('Валюта', 5)}
        {createCell('Курс', 5)}
        {createCell('Предыдущее', 5)}
        {createCell('Разница', 5)}
        {createCell('Разница, %', 5)}
      </tr>

      {/* СТРОКА С ДОЛЛАРАМИ */}        
      <tr>
        {createCell('Доллар')}
        {createCell('1')}
        {createCell('2')}
        {createCell('3')}
        {createCell('4')}
      </tr>

      {/* СТРОКА С ЕВРО */}
      <tr>        
        {createCell('Евро')}
        {createCell('1')}
        {createCell('2')}
        {createCell('3')}
        {createCell('4')}
      </tr>

      {/* СТРОКА С ЛАРИ */}
      <tr>        
        {createCell('Лари')}
        {createCell('1')}
        {createCell('2')}
        {createCell('3')}
        {createCell('4')}
      </tr>

      {/* СТРОКА С ЛИРАМИ */}
      <tr>        
        {createCell('Лиры')}
        {createCell('1')}
        {createCell('2')}
        {createCell('3')}
        {createCell('4')}
      </tr>      
    </table>
  </div>
}

export default ExchangeRateTable;