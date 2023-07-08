import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Ks from "./pages/ks/Ks";
import Fr from "./pages/frontend/Fr";
import And from "./pages/android/And";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/savodxonlik" element= { <Ks />}/>
          <Route path="/frontend" element= { <Fr />}/>
          <Route path="/android" element= { <And />}/>

        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
