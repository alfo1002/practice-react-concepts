import { useState } from "react"

export const ConditionalRendering = () => {

    const [count, setCount] = useState(0)

    setTimeout(() => setCount(count + 1), 3000)

    if (count < 2) {
        return <p>Count is minor than 2, Message: {count == 0 ? 'Starting' : 'First Value'} </p>
    } else {
        return <p>Count is mayor than 2, Message: {count && 'On Process'}</p>
    }
}
