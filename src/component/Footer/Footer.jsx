import React from 'react'
import "./Footer.scss";


import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <ul>
          <li><FaFacebook /></li>
          <li><FaXTwitter /></li>
          <li><FaLinkedin /></li>
          <li><FaGithub /></li>
        </ul>
      </div>
      <div className="footer-bottom">
        all rights reserved &copy;2024
      </div>
    </div>
  )
}
