import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import Chatbot from "./Components/Chatbot";
import ScrollToTop from "./Components/useScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Chatbot />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
