import React from "react"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"


function App() {
  return (
<>
<Router>
  <Navbar />
  <Route />
</Router>
</>
  );
}

export default App;
