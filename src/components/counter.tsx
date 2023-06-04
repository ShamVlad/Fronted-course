import { useState } from "react"
import styles from "./counter.module.scss"

export const Counter = () => {
    const [count, setCount] = useState(0)
    return (
      <div>
        <span className={styles.counter} >{count}</span>
        <button onClick={() => setCount((prev) => prev + 1)}>Click</button>
      </div>
    );
}