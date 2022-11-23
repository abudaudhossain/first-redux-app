import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const IncrementHandler = () => {
        setCounter(counter + 1)
    }
    const decrementHandler = () => {
        setCounter(counter - 1)
    }

    return (
        <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div class="text-2xl font-semibold" id="counter">{counter}</div>
            <div class="flex space-x-3">
                <button class="bg-indigo-400 text-white px-3 py-2 rounded shadow" onClick={IncrementHandler}>
                    Increment
                </button>
                <button class="bg-red-400 text-white px-3 py-2 rounded shadow" onClick={decrementHandler}>
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default Counter