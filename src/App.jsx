import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {

  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 = () =>{
    alert('button2 clicked')
  }

  return (
    <>
      <h3>React core concepts</h3>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click me2</button>
    </>
  )
}

export default App
