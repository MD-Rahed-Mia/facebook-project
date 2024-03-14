import React from 'react'
import './Navigation.scss';
import { Link } from 'react-router-dom';


export default function Navigation({ path, pathTitle }) {
  return (
    <div className='navigation-tools'>
      Go: <Link to={path}>{pathTitle}</Link>
    </div>
  )
}
