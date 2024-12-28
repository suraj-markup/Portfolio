import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";

import ScrollToTop from "./Components/useScrollToTop";


function App() {
  
  return (
   
    <Router>
       <ScrollToTop/>
    <Header />
    <div>
        <div>Hello</div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
      </Routes>
    </div>
  </Router>
  
  )
}

export default App;
