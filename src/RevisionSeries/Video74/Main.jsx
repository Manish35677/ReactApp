import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Contact from './Contact'
import Home from './Home'
import Service from './Service'
import Navbar from './Navbar'
import Footer from './Footer'

const Main = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route exact path='/about' element={<About />} />
                    <Route exact path='/service' element={<Service />} />
                    <Route exact path='/contact' element={<Contact />} />
                    <Route exact path='*' element={<Home />} />
                    {/* </Route> */}
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default Main
