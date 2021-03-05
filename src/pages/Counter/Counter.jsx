import React, {useState} from 'react'
import Button from '../../components/Buttons/Buttons'
import './index.scss'

const Counter = () => {
    const [count, setCount] = useState(0)
    const plus = () => {
        setCount(prev => prev + 1)
    }
    const minus = () => {
        setCount(prev => prev - 1)
    }

    return (
        <div className='counter-page'>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <Button
                plus = {plus}
                minus = {minus}/>
        </div>
    )
}

export default Counter
