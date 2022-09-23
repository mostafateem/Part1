
// Exercises 1.6.-1.14.

import React, { useState } from 'react';

const Button = ({add, text, value}) => {
  return(
    <button onClick={add} value={value} >{text}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return(
    <p>{text}: {value} </p>
  )
}

const Statistics = ({Good, Bad, Neutral, Sum, Average, Positive}) => {

  return(
    <div>
        <StatisticLine text="good" value={Good} />
        <StatisticLine text="neutral" value={Neutral} />
        <StatisticLine text="bad" value={Bad} />
        <StatisticLine text="all" value={Sum} />
        <StatisticLine text="average" value={Average} />
       <div className='span'> <span> <StatisticLine text="positive" value={Positive} /></span> <span></span> </div>
    </div>
  )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [statistics, setStatistics] = useState(false)

  const addgood = () => {
      setGood(good + 1)
      setStatistics(true)
  }

  const addNeutral = () => {
      setNeutral(neutral + 1)
      setStatistics(true)  
  }

  const addBad = () => {
      setBad(bad + 1)
      setStatistics(true) 
  }

  const sum = good + neutral + bad
  const average = sum / 14
  const positive = good / sum * 100

  // ###########################################################

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ];
  
  const getRandomResearchTitle = () => {
    return anecdotes[Math.floor(Math.random() * anecdotes.length)];
  };
  

  const [selected, setSelected] = useState(getRandomResearchTitle());


  const handleClick = () => {
    const randomAnecdotes = getRandomResearchTitle();
    setSelected(randomAnecdotes);
  }


  // ##############################################

  const [vote, setVote] = useState(0)

  const voteClick =  () => {
    setVote(vote + 1)
  }

  const points = [1, 4, 6, 3]

  const copy = [...points]
  // increment the value in position 2 by one

  const FirstSection = () => {
    return(
      <div style={{ marginTop: 50 }}>
        <h3>Anecdotes of the day:</h3>
        {selected} <br /> has {vote} votes.
        <br />
        <button onClick={voteClick}>Vote</button>
        <button onClick={handleClick}>Next anecdotes</button>
     </div>
    )
  }

  const SecondSection = () => {
    return(
      <>
      <div style={{ marginTop: 50 }}>
          <h3>Anecdotes of the day:</h3>
          {selected} <br /> has {vote} votes.
          <br />
          <button onClick={voteClick}>Vote</button>
          <button onClick={handleClick}>Next anecdotes</button>
        </div>

        <div style={{ marginTop: 50 }}>
          <h3>Anecdotes with most votes:</h3>
          {anecdotes[0]}
          <br />
          have {copy[2] += 1} votes.

        </div>
      </>
    )
  }


  return (
    <div>
      <h1>Give feedback </h1>
        <Button add={addgood} text='good'/>
        <Button add={addNeutral} text='neutral'/>
        <Button add={addBad} text='bad'/>
      <div>
        <h2>Statistics:</h2>
        {statistics ? 
        <Statistics 
              Good={good} 
              Bad={bad} 
              Neutral={neutral} 
              Sum={sum} 
              Average={average} 
              Positive={positive}/>
              : "No feedback given yet."  }
         
      </div>
      <br />
      <hr />

      {
        vote >= 7 ? <FirstSection /> : <SecondSection />
      }

    </div>
  )
}


export default App