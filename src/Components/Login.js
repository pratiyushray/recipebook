import React from 'react';
import styles from "./Login.module.css";
import InputControl from './InputControl';
import { Link ,useNavigate} from 'react-router-dom';
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "./firebase";
import { useState } from 'react';

function Login() {
  const navigate=useNavigate();
  const [values,setValues]=useState({
      email:"",
      pass:""
  });

  const [errorMsg,setErrorMsg]=useState("");
  const [submitButtonDisabled,setSubmitButtonDisabled]=useState(false);

  const handleSubmission=()=>{
      if(!values.email || !values.pass){
          setErrorMsg("Fill all Fields");
          return;
      }
      setErrorMsg("All Set");

      setSubmitButtonDisabled(true);
      signInWithEmailAndPassword(auth,values.email,values.pass)
      .then(async(res)=>{
          setSubmitButtonDisabled(false);
          navigate("/");
      })
      .catch((err)=>{
          setSubmitButtonDisabled(false)
          setErrorMsg(err.message);
      });
  }
  return (
    <>
    <div className='flex flex-col items-center mt-4'>
    <h1 class="mb-8 text-4xl font-bold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight dark:text-gray-50"><span>Explore</span> <span class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-blue-400 to-purple-500 lg:inline">Learn</span> <span>Build 🚀</span></h1>
    <hr className='mt-0'/>
    </div>
    <div className={styles.container}>
        <div className={styles.innerBox}>
            <h1 className="font-bold text-xl">Login</h1>
            <InputControl label="Email"
            onChange={event=>setValues((prev)=>({...prev,email:event.target.value}))}
            placeholder="Enter Email Address"/>
            <InputControl label="Password" type="password"
            onChange={event=>setValues((prev)=>({...prev,pass:event.target.value}))}
            placeholder="Enter Password"/>

            <div className={styles.footer}>
              <b className={styles.error}>{errorMsg}</b>
                <button disabled={submitButtonDisabled} className=" items-center transition mt-4 px-3 py-1 rounded-xl ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 text-white hover:scale-110 hover:bg-indigo-500 duration-300 ..." onClick={handleSubmission}>Login</button>
                <p>Don't have an accounts? <span><Link to="/signup">Sign Up</Link></span></p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login;