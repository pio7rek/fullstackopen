import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button> 

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad

  if (all === 0) {
    return (
      <>
        <h2>statistics</h2>
        <div>No feedback given</div>
      </>
    )
  }

  const average = (good - bad) / all
  const positive = (good / all) * 100

  return (
    <>
      <h2>statistics</h2>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all}</div>
      <div>average {average}</div>
      <div>positive {positive} %</div>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
