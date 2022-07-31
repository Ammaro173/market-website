import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import NavBar from './components/NavBar'
import Body from './components/Body'
import About from './components/About'
import Contact from './components/Contact'
import Product from './components/Product'

function Home () {
  // let comp
  
  // switch (window.location.pathname) {
  //   case '/':
  //     comp = Home
  //     break
  //   case '/about':
  //     comp = About
  //     break
  //   case '/contact':
  //     comp = Contact
  //     break
  //   case '/product':
  //     comp = Product
  //     break
  // }

  return (
    <>
      <NavBar />
      <Body />
      {/* <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div> */}
    </>
  )


}

export default Home

