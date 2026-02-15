//Header
const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

//Content
const Content = (props) => {
  console.log(props)
  return (
    <p>{props.partName} {props.exercisesAmount}</p>
  )
}

//Total
const Total = (props) => {
  console.log(props)
  return (
    <p>Number of exercises {props.exercisesSum}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content partName={part1} exercisesAmount={exercises1}/>
      <Content partName={part2} exercisesAmount={exercises2}/>
      <Content partName={part3} exercisesAmount={exercises3}/>
      <Total exercisesSum={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App