import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'antd/dist/antd.css'
import Abouts from "./Components/Abouts/Abouts";
import Contacts from "./Components/Contacts/Contacts";
import All from "./Components/Homes/All";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";

// aos animation
// import AOS from 'aos'
// import 'aos/dist/aos.css'
import { useEffect } from "react";

function App() {

    // useEffect(() => {
    //   AOS.init()
    // }, [])

  return (
    <div className='App'>
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<All />} />
            {/*
            <Route path='/about' element={<Abouts />} />
            <Route path='/contact' element={<Contacts />} />
            <Route path='/service' element={<Services />} /> */}
          </Routes>
        </Router>
      </>
    </div>
  )
}

export default App;