import React from 'react'
import style from './Switch.module.scss'

export default function Switch({ id, triggerSwitch, checkOn, checkOff, checked }) {
  const checkText = text => text[0].toUpperCase() + text.slice(1)

  return (
    <div className={style.switch}>
      <div className={style[id]}>
        <input type="checkbox" id={id} onChange={triggerSwitch} checked={checked} />
        <label htmlFor={id}>
          <div className={style.content}>
            <span className={style.textOff}>{checkText(checkOff)}</span>
            <span className={style.textOn}>{checkText(checkOn)}</span>
          </div>
        </label>
      </div>
    </div>
  )
}
