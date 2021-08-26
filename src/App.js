import React, { useState } from 'react'

const Statisticline = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>   
  )
}

const Statistics = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <Statisticline text = 'good' value = {props.good} />
          <Statisticline text = 'neutral' value = {props.neutral} />
          <Statisticline text = 'bad' value = {props.bad} />
          <Statisticline text = 'all' value = {props.all} />
          <Statisticline text = 'average' value = {props.average} />
          <Statisticline text = 'positive' value = {props.positive} />
        </tbody>
      </table>
    </div>
  )}

  const Button = (props) => {
    return (
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    )
  }

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGoodButtonClick = () => {
    setAll(allClicks.concat(1))
    setGood(good + 1)
  }

  const handleNeutralButtonClick = () => {
    setAll(allClicks.concat(0))
    setNeutral(neutral + 1)
  }

  const handleBadButtonClick = () => {
    setAll(allClicks.concat(-1))
    setBad(bad + 1)
  }

  // counts statistics
  let total = 0;
  let all = good + neutral + bad
  let positive = good/all * 100 + ' %'
 
  for (let i  = 0; i < allClicks.length; i++){
    total  += allClicks[i] 
  }

  let average = total/all
 ///
  return (
    <div>
      <h1>give feedback</h1>
      <Button
        handleClick={handleGoodButtonClick}
        text='good'
      />
      <Button
        handleClick={handleNeutralButtonClick}
        text='neutral'
      />     
      <Button
        handleClick={handleBadButtonClick}
        text='bad'
      />           
      <h1>statistics</h1>     
      <Statistics 
        allClicks = {allClicks}
        good = {good}
        neutral = {neutral}
        bad = {bad}
        all = {all}
        average = {average}
        positive ={positive}
      />    
    </div>   
  )
}

export default App