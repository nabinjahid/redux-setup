import './App.css'
import { decrement, increment } from './redux/fetures/counter/counterSlice'
import { useAppDispatch, useAppSelector } from './redux/hook'

function App() {

  const dispatch = useAppDispatch()
  const {count} = useAppSelector((state)=> state.counter)
  console.log(count);
  

  const handleIncrement = (amount:number) =>{
    dispatch(increment(amount))
  }

  const handleDecrement = ()=>{
    dispatch(decrement())
  }

  return (
    <>
    <h1>Counter With Redux</h1>
    <button onClick={()=> handleIncrement(5)}>Increment 5</button>
    <button onClick={()=> handleIncrement(1)}>Increment</button>
    <div>{count}</div>
    <button onClick={handleDecrement}>Drcrement</button>
     
    </>
  )
}

export default App
