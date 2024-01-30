import React from 'react'

function TabBtns({children, onSelect, isSelected}) {
  return (
    <li>
        <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
    </li>
  )
}

export default TabBtns