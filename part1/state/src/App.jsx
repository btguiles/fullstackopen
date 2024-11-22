import { useState } from 'react'

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Input = (props) => {
  return (
    <input value={props.value} onChange={props.onChange} />
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)
 
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)
  const setToValue = (value) => setCounter(value)

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text='Plus' />
      <Button onClick={setToZero} text='Zero' />
      <Button onClick={decreaseByOne} text='Minus' />
      <Input value={counter} onChange={({ target }) => setToValue(target.value)} />
      
    
    </div>
  )
}

export default App