import React from 'react'
import './index.scss'

const Buttons = ({plus, minus}) => {
    return (
        <div className='buttons'>
            <button onClick={minus}>-</button>
            <button onClick={plus}>+</button>            
        </div>
    )
}

export default Buttons
