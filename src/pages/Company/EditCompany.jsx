import React, { useEffect, useState } from "react";
import "./EditCompany.scss";
import Layout from "./../../Layout.jsx";
import Navigation from "../../component/Tools/Navigation.jsx";
import {
  getCompanyDetails,
  selectedCompany,
  updateDetails,
} from "../../Firebase/Firebase.js";
import Toast from "../../component/Tools/Toast.jsx";

export default function EditCompany() {
  const [company, setCompany] = useState(false);
  const [selectCompany, setSelectCompany] = useState(false);
  const [data, setData] = useState({});

  const [submit, setSubmit] = useState(false);

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

  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleEditForm(event) {
    event.preventDefault();

    try {
      updateDetails(data, setSubmit);
    } catch (error) {}
  }

  return (
    <Layout>
      <div className="edit-company">
        {submit ? (
          <Toast
            submit={submit}
            setSubmit={setSubmit}
            text="update successful"
          />
        ) : (
          ""
        )}
        <h2>Edit company details</h2>
        <Navigation
          path="/company/"
          pathTitle="/company/edit-company-details"
        />

        <form action="">
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
                <label htmlFor="hello">ID</label>
                <input
                  type="text"
                  name="hello"
                  id="hello"
                  placeholder="id"
                  value={data && data.companyId}
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
                  value={data.name}
                  onChange={(event) => handleChange(event)}
                />
              </div>
              <div>
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="description"
                  value={data.description}
                  onChange={(event) => handleChange(event)}
                />
              </div>
              <div>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="address"
                  value={data.address}
                  onChange={(event) => handleChange(event)}
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
