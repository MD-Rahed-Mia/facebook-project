import React from "react";
import "./CompanyTools.scss";

export default function AllCompany() {
  return (
    <div className="all-company-list">
      <table>
        <thead>
          <tr>
            <th>Sl No.</th>
            <th>Name</th>
            <th>Available Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Pran RFL Limited</td>
            <td>21</td>
            <td>Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
