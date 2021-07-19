import React from 'react';
import './Timer.css';

const Timer = ({cTime,seconds}) => {
    return (
        <div>
            {(seconds % 2 === 0) ?
        <div className="even"><h1>{cTime} </h1></div> :
        <div className="odd"><h1>{cTime}</h1></div>}
        </div>
    )
}

export default Timer
