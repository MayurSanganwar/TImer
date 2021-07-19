import React, { useState } from 'react'
import Timer from './component/Timer'

const App = () => {

  let time = new Date().toLocaleTimeString()
  const seconds = new Date().getSeconds()

  const [cTime, setCtime] = useState()

  const updateTime = () => {
    time = new Date().toLocaleTimeString()
    setCtime(time)
  }

  setInterval(updateTime, 1000);

  return (
    <div className='container'>
      <Timer cTime={cTime} seconds={seconds}/>
    </div>
  );
}

export default App
