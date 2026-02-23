import { useState } from 'react'

const Button = ({text, onClick, disabled}) => 
  <button onClick={onClick} disabled={disabled}>{text}</button>

const Anecdote = ({anecdotes, index}) => <div>{anecdotes[index]}</div>

const Votes = ({votes, index}) => <div>has {votes[index]} votes</div>

const TopAnecdote = ({anecdotes, votes}) => {
  const maxVoted = Math.max(...votes)
  if (maxVoted === 0) return
  const maxVotedIndex = votes.indexOf(maxVoted)
  return (
    <>
      <h2>Anecdote with most votes</h2>
      <Anecdote anecdotes={anecdotes} index={maxVotedIndex} />
      <Votes votes={votes} index={maxVotedIndex} />
      
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
     
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [hasVoted, setHasVoted] = useState(false)
  
  const handleRandomClick = () => {
    let random
    do {
      random = Math.floor(Math.random() * anecdotes.length)
    } while (random === selected)
    setSelected(random)
    setHasVoted(false)
  }

  const handleVoteClick = () => {
    if (hasVoted) return
    const newVotes = [...votes]
    newVotes[selected]++
    setVotes(newVotes)
    setHasVoted(true)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Anecdote anecdotes={anecdotes} index={selected} />
      <Votes votes={votes} index={selected} />
      <Button text='vote' onClick={handleVoteClick} disabled={hasVoted}/>
      <Button text='next anecdote' onClick={handleRandomClick} />
      <TopAnecdote anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App
