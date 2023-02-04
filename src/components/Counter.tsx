import { useState } from 'react'
import { FC } from 'react'
import styles from './Counter.module.scss' 

export const Counter: FC = () => {

        const [counter, setCounter] = useState(0)
        const increment = () => {
            setCounter(prev => prev + 1)
        }
        const dicrement = () => {
            setCounter(prev => prev - 1)
        }
    return <div className={styles.btn}>
        <h3>{counter}</h3>
        <button onClick={() => increment()}>+</button>
        <button onClick={() => dicrement()}>-</button>
    </div>
}

