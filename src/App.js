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

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<><Header/><Home/><Footer/></>}></Route>
          <Route exact path="/about" element={<><Header/><About/><Footer/></>}></Route>
          <Route exact path="/recipe" element={<><Header/><Recipe/><Footer/></>}></Route>
          <Route exact path="/onlinetut" element={<><Header/><OnlineTutorials/><Footer/></>}></Route>
          <Route exact path="/queries" element={<><Header/><Queries/><Footer/></>}></Route>
          <Route exact path="/contact" element={<><Header/><Login/><Footer/></>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
