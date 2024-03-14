import React from 'react'
import "./Company.scss";
import Layout from '../../Layout'
import Option from '../../component/CompanyTools/Option';
import AllCompany from '../../component/CompanyTools/AllCompany';
import Navigation from '../../component/Tools/Navigation';

export default function Company() {
  return (
    <Layout>
      <div className='company'>
        <Navigation path="/" pathTitle="/home/all-company" />
        <h2>All company information</h2>
        <Option />
        <AllCompany />
      </div>
    </Layout>
  )
}
