import React from 'react'
import ScrollToTop from "./components/ScrollToTop"
import Navbar from "./components/ScrollToTop"
import Hero from "./components/ScrollToTop"
import Services from "./components/ScrollToTop"
import Portfolio from "./components/ScrollToTop"
import Testimonials from "./components/ScrollToTop"
import Products from "./components/ScrollToTop"
import Newsletter from "./components/ScrollToTop"
import Footer from "./components/ScrollToTop"



function App() {
  return (
    <>
     <ScrollToTop /> 
     <Navbar />
     <Hero />
     <Services />
     <Portfolio />
     <Testimonials />
     <Products />
     <Newsletter />
     <Footer />
    </>
  )
}

export default App