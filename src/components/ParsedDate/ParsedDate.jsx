import React from "react"
import s from './ParsedDate.module.css'

const ParsedDate = ({rawDate}) => {
  return <div className={s.date}>
    <span>{`Курс валют на ${rawDate.slice(8, 10)}.${rawDate.slice(5, 7)}.${rawDate.slice(0, 4)}`}</span>
  </div>
}

export default ParsedDate;