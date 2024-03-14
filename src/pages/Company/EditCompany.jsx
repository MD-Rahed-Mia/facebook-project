import React, { useState } from "react";
import "./EditCompany.scss";
import Layout from "./../../Layout.jsx";
import Navigation from "../../component/Tools/Navigation.jsx";

export default function EditCompany() {
  const [company, setCompany] = useState(false);


  function handleCompany() {
    setCompany(!company);
  }

  return (
    <Layout>
      <div className="edit-company">
        <h2>Edit company details</h2>
        <Navigation path="/company/" pathTitle="/company/edit-company-details" />

        <form action="">
          <div>
            <label htmlFor="select-company">Select Company</label>
            <select name="select-company" id="select-company" onChange={handleCompany}>
              <option value="">Select Company</option>
              <option value="">Pran RFL Limited</option>
              <option value="">Abul Khair Consumer</option>
              <option value="">Square Consumer Goods Limited</option>
              <option value="">Abdul Monem Limited</option>
            </select>
          </div>
          {company ? (
            <section>
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
              </div>{" "}
            </section>
          ) : (
            ""
          )}
        </form>
      </div>
    </Layout>
  );
}
