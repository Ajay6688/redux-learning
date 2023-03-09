import classes from './Auth.module.css';
import { useDispatch} from 'react-redux' ;
import { authActions } from '../store/index';
import { useRef } from 'react';

const Auth = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();


  // console.log(isAuthenticated)
  const loginHandler = ()=>{
    if(emailRef.current.value === "ajay@gmail.com" && passwordRef.current.value ==="ajay"){
      dispatch(authActions.login());
    }else{
      alert("wrong credentials")
    }
  }

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailRef}/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={passwordRef} />
          </div>
          <button type='button' onClick={loginHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
