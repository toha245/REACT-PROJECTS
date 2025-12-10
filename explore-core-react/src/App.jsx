import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import Library from './library'
// import Data from './Todo'


function App() {
  // const [count, setCount] = useState(0)
  // const actors = ['Bappa Raj', 'Omar Sunny', 'Salman Shah', 'Jasim', 'Anwar', 'Rajjak'];

  const singers = [
    {id: 1, name: 'Dr. Mahfuz', age: 68},
    {id: 2, name: 'Tahsan', age: 45},
    {id: 3, name: 'shuvro Dev', age: 57}
  ]

  const books = [
    {id: 1, name: 'Physics', price: 250},
    {id: 2, name: 'Chemistry', price: 350},
    {id: 3, name: 'Math', price: 255},
    {id: 4, name: 'Biology', price: 290},
  ]

  // const time = 50;

  return (
    <>
      <h1>React Core Concepts</h1>

      <Library books={books}></Library>

      {
        singers.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
      }

      {/* {
        actors.map(actor => <Actor actor={actor}></Actor>)
      } */}

      {/* <Data name="toha" birth="2001" date="09"></Data>
      <Data name="naim" birth="2003" date="05"></Data>
      <Data name="karima" birth="2006" date="18"></Data> */}

      {/* <ToDo 
        task="Learn React" 
        isDone={true} 
        time={time}>
      </ToDo>
      <ToDo 
        task="Revise JS" 
        isDone={false}>
      </ToDo>
      <ToDo 
        task="Take a shower" 
        isDone={true} 
        time="">
      </ToDo> */}
      {/* <Student name="toha" dept="Singair"></Student>
      <Student name="naim" dept="Manikganj"></Student>
      
      <Person name="jubaida" age="18"></Person>
      <Person name="karima" age="20"></Person>
      <Person name="tamima" age="17"></Person>
      
      <Developer name="Mozumder" tech="JS"></Developer>
      <Developer name="Rajon" tech="python"></Developer>
      <Developer name="Shabana" tech="java"></Developer>
      <Player name="tamim" runs="5000"></Player>
      <Player name="mushi" runs="5000"></Player>
      <Salami event="Roja Eid" amount="20"></Salami>
      <Salami event="Graduation"></Salami> */}
    </>
  )
}

function Salami({event, amount = 0}){
  return(
    <div className='student'>
      <p>Salami For: {event}</p>
      <p>Amount: {amount}</p>
    </div>
  )
}

// const {name, runs} = { name: "tamim", runs: "5000" }

function Player({name, runs}){
  return(
    <div className='student'>
      <h3>Name: {name}</h3>
      <p>Runs: {runs}</p>
    </div>
  )
}

// const {name, tech} { name: "Mozumder", tech: "JS" }

function Developer (props){
  console.log(props);
  return (
    <div style={{
      border: '2px solid green',
      borderRadius: '20px',
      margin: '10px',
    }}>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  )
}


function Student (props){
  return (
    <div className='student'>
      <p>Name: {props.name}</p>
      <p>Dept: {props.dept}</p>
    </div>
  )
}

function Person (props){
  // const age = 17;
  // const name = 'Jolil';

  const personStyle = {
    color: 'red',
    textAlign: 'right',
    backgroundColor: 'salmon',
    padding: '10px',
    borderRadius: '10px',
    fontSize: '24px',
  }

  return (
    <p id='' title='tooltip' style={personStyle}>I am a person: {props.name} {props.age}</p>
  )
}

export default App
