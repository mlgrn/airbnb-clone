import './App.css';
import Header from "./Header"
import Home from './Home'
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
 
function App() {
  return (
    <div className="App">
  <Router >

   <Header />
   <Home />
   <Footer />

  </Router>

    </div>
  );
}

export default App;
