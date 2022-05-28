import './App.css';
import Header from "./Header"
import Home from './Home'
import Footer from './Footer'
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
 
function App() {
  return (
    <div className="App">
  <Router >
{/* header and footer always get rendered. Stuff inside the Switch are given different Routes which React can render. Keep the homepage route at the bottom as a fallback */}
   <Header />
   
   <Routes>
      <Route path="/search" element={<SearchPage />} />
      <Route path="/" element={<Home />} />
    </Routes>
   
   <Footer />

  </Router>

    </div>
  );
}

export default App;
