import React from 'react'

interface Exp{
    prop: string;
}

const Experiment = ({prop}: Exp) => {

    const handleProp = (prop: string) => {
        return prop = "hello world"
    } 
  return (
    <div>experiment
        <button onClick={handleProp(prop)}>Click me</button>
        <h1>{prop}</h1>
    </div>
  )
}

export default Experiment