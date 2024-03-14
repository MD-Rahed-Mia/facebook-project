import React from "react";
import Layout from "../../Layout";
import "./AddCompany.scss";
import Navigation from "../../component/Tools/Navigation";

export default function () {
  return (
    <Layout>
      <div className="add-new-company">
        <Navigation path={"/company"} pathTitle={"/company/edit-company-details"} />

        <h2>Added new company</h2>

        <form action="">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="name" />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="description"
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="address"
            />
          </div>
          <div>
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
