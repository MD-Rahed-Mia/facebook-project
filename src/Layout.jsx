import React from 'react'
import './style/Layout.scss';


import Nav from "./component/Navbar/Nav";
import Footer from "./component/Footer/Footer";

export default function Layout({ children }) {
  return (
    <div className='layout'>
      <Nav />
      {children}
      <Footer />
    </div>
  )
}
