import React from 'react'
import './CompanyTools.scss';

import { IoMdAdd } from "react-icons/io";
import { BsPencil } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Option() {
  return (
    <div className='company-option'>
      <ul>
        <Link to="/company/add-new-company">
          <IoMdAdd /> <button>add new</button>
        </Link>
        <Link to={"/company/edit-company-details"}>
          <BsPencil /> <button>Edit</button>
        </Link>
        <Link><MdDelete /> <button>Delete</button></Link>
      </ul>
    </div>
  )
}
