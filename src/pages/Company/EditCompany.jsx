import React, { useEffect, useState } from "react";
import "./EditCompany.scss";
import Layout from "./../../Layout.jsx";
import Navigation from "../../component/Tools/Navigation.jsx";
import { getCompanyDetails, selectedCompany } from "../../Firebase/Firebase.js";

export default function EditCompany() {
  const [company, setCompany] = useState(false);
  const [selectCompany, setSelectCompany] = useState(false);
  const [data, setData] = useState(null);

  //handle company
  function handleCompany(event) {
    setSelectCompany(event.target.value);
  }

  //get company data from firebase
  useEffect(() => {
    //get company information
    getCompanyDetails(setCompany);

    //query from firestore
    selectedCompany(selectCompany, setData);
  }, [selectCompany]);

  //handle submit form
  function handleEditForm(event) {
    event.preventDefault();
  }

  //handle form value
  function handleFormValue() { }

  return (
    <Layout>
      <div className="edit-company">
        <h2>Edit company details</h2>
        <Navigation
          path="/company/"
          pathTitle="/company/edit-company-details"
        />

        <form action="">
          {data && console.log(data)}
          <div>
            <label htmlFor="select-company">Select Company</label>
            <select
              name="select-company"
              id="select-company"
              onChange={(event) => handleCompany(event)}
            >
              <option value="1">Select Company</option>
              {company &&
                company.map((item, index) => {
                  return (
                    <option value={item.companyId} key={index}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
          </div>
          {selectCompany ? (
            <section>

              <div>
                <label htmlFor="ID">ID</label>
                <input
                  type="text"
                  name="ID"
                  id="ID"
                  placeholder="ID"
                  value={data ? data.companyId : ""}
                  onChange={(event) => setData(event.target.value)}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name"
                  value={data ? data.name : ""}
                  onChange={(event) => setData(event.target.value)}
                  
                />
              </div>
              <div>
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="description"
                  value={data && data.description}
                  onChange={(event) => setData(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="address"
                  value={data && data.address}
                  onChange={(event) => setData(event.target.value)}
                />
              </div>
              <div>
                <button
                  type="submit"
                  onClick={(event) => handleEditForm(event)}
                >
                  submit
                </button>
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
