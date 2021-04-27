import React from "react"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LaunchPage from "./pages/LaunchPage"
import BookCollection from "./pages/BookCollection"

// API Key = AIzaSyBk38WVv5bL_LKS3596AvpgBIjH8mR9ZzE

function App() {
  return (
<>
<Router>
  <Route exact path="/" component={LaunchPage}/>
  <Route exact path="/saved" component={BookCollection}/>
</Router>
</>
  );
}

export default App;
