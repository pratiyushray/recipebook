import React from 'react';
import styles from "./Signup.module.css";
import InputControl from './InputControl';
import { Link ,useNavigate} from 'react-router-dom';
import { useState } from 'react';
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from "./firebase";
function Signup() {
    const navigate=useNavigate();
    const [values,setValues]=useState({
        name:"",
        email:"",
        pass:""
    });

    const [errorMsg,setErrorMsg]=useState("");
    const [submitButtonDisabled,setSubmitButtonDisabled]=useState(false);

    const handleSubmission=()=>{
        if(!values.name || !values.email || !values.pass){
            setErrorMsg("Fill all Fields");
            return;
        }
        setErrorMsg("All Set");

        setSubmitButtonDisabled(true);
        createUserWithEmailAndPassword(auth,values.email,values.pass).then(async(res)=>{
            console.log(res);
            setSubmitButtonDisabled(false);
            const user=res.user;
            await updateProfile(user,{
                displayName:values.name
            });
            navigate("/");
            console.log(user);
        }).catch((err)=>{
            setSubmitButtonDisabled(false)
            setErrorMsg(err.message);
            console.log("ERROR-",err)
        });
    }

  return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
            <h1 className="font-bold text-xl">Signup</h1>
            <InputControl label="Name" placeholder="Enter Your Name"
            onChange={(event)=>setValues((prev)=>({...prev,name:event.target.value}))}
            />
            <InputControl label="Email" placeholder="Enter Email Address"
            onChange={(event)=>setValues((prev)=>({...prev,email:event.target.value}))}
            />
            <InputControl label="Password" type="password" placeholder="Enter Password"
            onChange={(event)=>setValues((prev)=>({...prev,pass:event.target.value}))}
            />

            <div className={styles.footer}>
                <b className={styles.error}>{errorMsg}</b>
                <button onClick={handleSubmission} className=" items-center transition mt-4 px-3 py-1 rounded-xl ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 text-white hover:scale-110 hover:bg-indigo-500 duration-300 ..."
                disabled={submitButtonDisabled}>SignIn</button>
                <p>Already have an account? {" "}<span><Link to="/login">Login</Link></span></p>
            </div>
        </div>
    </div>
  )
}

export default Signup;