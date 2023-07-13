import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Ks from "./pages/ks/Ks";
import Fr from "./pages/frontend/Fr";
import And from "./pages/android/And";
import Backend from "./pages/backend/Backend";
import Dizayn from "./pages/dizayn/Dizayn";
import Login from "./pages/login/Login";
import About from "./pages/about/About";
import News from "./pages/news/News";
import 'animate.css';

const NotFound = () => {
  return (
    <h1 style={{
      padding: "100px"
    }}>Not found</h1>
  )
}


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/savodxonlik" element= { <Ks />}/> 
          <Route path="/frontend" element= { <Fr />}/>
          <Route path="/backend" element= { <Backend />}/>
          <Route path="/dizayn" element= { <Dizayn />}/>
          <Route path="/android" element= { <And />}/>
          <Route path="/login" element= { <Login />}/>
          <Route path="/about" element= { <About />}/>
          <Route path="/news" element= { <News />}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
