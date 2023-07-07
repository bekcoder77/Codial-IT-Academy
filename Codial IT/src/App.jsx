import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home />
        <Routes>
          <Route />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
