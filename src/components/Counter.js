import classes from './Counter.module.css';
import {useSelector , useDispatch} from 'react-redux'
import { counterActions } from '../store/index';

const Counter = () => {
  const count = useSelector(state => state.counter.count) ; 
  const isToggleTrue = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();
  console.log(count)

  const toggleCounterHandler = () => {
    // console.log(counterActions.toggle())
    dispatch(counterActions.toggle())
  };

  const incrementHandler = ()=>{
    dispatch(counterActions.increment())
  }

  const decrementHandler =()=>{
    dispatch(counterActions.decrement())
  }

  const increment5Handler = ()=>{
    dispatch(counterActions.increment5(5))

  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isToggleTrue &&<div className={classes.value}>-- {count} --</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increment5Handler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </main>
  );
};

export default Counter;
