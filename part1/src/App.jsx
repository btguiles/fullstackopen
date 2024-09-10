const Hello = (props) => {
  console.log(props)
  return (
    <>
      <p>Hello, {props.name}, you are {props.age} years old. </p>
    </>
  )
}

const App = () => {
  const name = 'Ben'
  const age = 37
  return (
    <>
      <h1>Greetings</h1>
      <Hello name={name} age={age} />
      <Hello name='Arlo' age={12} />
    </>
  )
}

export default App