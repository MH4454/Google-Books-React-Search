import React from "react"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import Searchbar from "./components/SearchBar/Searchbar"
import Results from "./components/Results/Results"
import SavedBooks from "./components/SavedBooks/Savedbooks"


function App() {
  return (
<>
<Router>
  <Navbar />
  <Header />
  <Route exact path="/" component={Searchbar}/>
  <Route exact path="/" component={Results}/>
  <Route exact path="/saved" component={SavedBooks}/>
</Router>
</>
  );
}

export default App;
