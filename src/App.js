import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Recipe from "./Components/Recipe";
import OnlineTutorials from "./Components/OnlineTutorials";
import Queries from "./Components/Queries";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import React, { useEffect,useState } from 'react';
import {auth} from "../src/Components/firebase";
import Loader from "./Components/Loader";
function App() {
  const [userName,setUserName]=useState("");
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName)
      }else setUserName("");
    
    });
  },[]);

  const [loading,setLoading]=useState(true);


  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },5000)
  })

  return (

    <div className="App">
      {
        loading?
        <Loader/>
        :
      <Router>
        <Routes>
          <Route exact path="/" element={<><Header/><Home name={userName}/><Footer/></>}></Route>
          <Route exact path="/about" element={<><Header/><About/><Footer/></>}></Route>
          <Route exact path="/recipe" element={<><Header/><Recipe/><Footer/></>}></Route>
          <Route exact path="/onlinetut" element={<><Header/><OnlineTutorials/><Footer/></>}></Route>
          <Route exact path="/queries" element={<><Header/><Queries/><Footer/></>}></Route>
          <Route exact path="/login" element={<><Header/><Login/><Footer/></>}></Route>
          <Route exact path="/signup" element={<><Header/><Signup/><Footer/></>}></Route>

        </Routes>
      </Router>

      }
    </div>
  );
}

export default App;
