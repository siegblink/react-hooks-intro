import React, { Fragment, useState } from 'react'

export default function AppFunc() {
  const [state, setState] = useState(0)
  const [isOn, setisOn] = useState(false)

  function incrementCount() {
    setState(prevCount => prevCount + 1)
  }

  function toggleLight() {
    setisOn(prevState => !prevState)
  }

  return (
    <Fragment>
      <button onClick={incrementCount}>I was clicked {state}x times</button>

      <h2>Toggle Light</h2>
      <div
        style={{
          height: '50px',
          width: '50px',
          backgroundColor: isOn ? 'yellow' : 'grey',
        }}
        onClick={toggleLight}
      />
    </Fragment>
  )
}
