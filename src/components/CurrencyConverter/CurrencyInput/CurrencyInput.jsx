import React from "react"
import s from './CurrencyInput.module.css'

const currExtraData = {
  r: {
    className: s.r,
    title: 'рублях',
    symbol: '₽'
  },
  d: {
    className: s.d,
    title: 'долларах',
    symbol: '$'
  },
  e: {
    className: s.e,
    title: 'евро',
    symbol: '€'
  },
  la: {
    className: s.la,
    title: 'лари',
    symbol: '₾'
  },
  li: {
    className: s.li,
    title: 'лирах',
    symbol: '₺'
  }
}

const CurrencyInput = ({type, amount, onAmountChange}) => {
  
  const handleChange = (e) => {
    alert(e.target.value);
    // onAmountChange
  }
  
  return <>
    <div className={s.input}>
      <div className={`${s.background} ${currExtraData[type].className}`}>
        <div className={s.content}>
          <span>Введите сумму в {currExtraData[type].title}:</span>
          <input value={amount} onChange={ handleChange } />
          {currExtraData[type].symbol}
        </div>
      </div>
    </div>
  </>
}

export default CurrencyInput;