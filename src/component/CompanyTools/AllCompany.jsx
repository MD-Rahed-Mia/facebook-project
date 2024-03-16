import React, { useEffect, useState } from "react";
import "./CompanyTools.scss";
import { getCompanyDetails } from "../../Firebase/Firebase";

export default function AllCompany() {

  const [company, setCompany] = useState(null);

  useEffect(() => {
    getCompanyDetails(setCompany);

  }, [])


  return (


    <div className="all-company-list" >
      <table>
        <thead>
          <tr>
            <th>Sl No.</th>
            <th>Code</th>
            <th>Name</th>
            <th>Available Products</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {
            company?.map((item, index) => {
              return <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.companyId}</td>
                <td>{item.name}</td>
                <td>21</td>
                <td>active</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div >
  );
}
