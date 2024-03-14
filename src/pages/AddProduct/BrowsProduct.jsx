import React from 'react'
import Layout from '../../Layout'
import './Product.scss';
import { BsPencil } from "react-icons/bs";
import Navigation from '../../component/Tools/Navigation';
import { Link } from 'react-router-dom';


export default function BrowsProduct() {
  return (
    <Layout>
      <div className='browse-product'>

        <Navigation path="/" pathTitle="/home/browse-product" />
        <h2>Browse product</h2>

        <table>
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Name</th>
              <th>Code</th>
              <th>CTN-Price</th>
              <th>Per-piece</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Pran UHT Milk 500ml</td>
              <td>PRN10</td>
              <td>800</td>
              <td>47</td>
              <td><Link to='/edit-product/prn10'><BsPencil className='edit-product-icon' /></Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  )
}
