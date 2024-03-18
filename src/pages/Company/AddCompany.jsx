import React, { useState } from "react";
import Layout from "../../Layout";
import "./AddCompany.scss";
import Navigation from "../../component/Tools/Navigation";
import { addFirestore } from "../../Firebase/Firebase";
import Toast from "../../component/Tools/Toast";

export default function () {
  //set form data
  const [data, setData] = useState({});
  //handle toast
  const [submit, setSubmit] = useState(false);

  //handle form on submit
  function handleForm(event) {
    event.preventDefault();
    try {
      addFirestore(data, setSubmit);
      document.getElementById("add-company-form").reset();
    } catch (error) {
      console.log(error.message);
    }
  }

  //handleform data
  function handleFormData(event) {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  }

  return (
    <Layout>
      {submit ? (
        <Toast setSubmit={setSubmit} submit={submit} text="added successful" />
      ) : (
        ""
      )}

      <div className="add-new-company">
        <Navigation
          path={"/company"}
          pathTitle={"/company/edit-company-details"}
        />

        <h2>Added new company</h2>

        <form action="" id="add-company-form">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              required
              onChange={(event) => handleFormData(event)}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="description"
              required
              onChange={(event) => handleFormData(event)}
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="address"
              required
              onChange={(event) => handleFormData(event)}
            />
          </div>
          <div>
            <button type="submit" onClick={handleForm}>
              submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
