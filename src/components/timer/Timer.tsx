import React from 'react'

export const Timer = () => {
    return (
        <div className='timer-container'>
            <div className="timer">
                <p>60</p>
                <p>seconds</p>
            </div>
            <div className='timer-settings'>
                <button>15</button>
                <button>30</button>
                <button>60</button>
                <button>120</button>
            </div>
        </div>
    )
}
