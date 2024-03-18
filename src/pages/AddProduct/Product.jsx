import React, { useEffect, useState } from "react";
import "./Product.scss";
import Layout from "../../Layout";
import {
  addProduct,
  getCompanyDetails,
  uploadImage,
} from "../../Firebase/Firebase";
import Toast from "../../component/Tools/Toast";

export default function Product() {
  const [company, setCompany] = useState(null);
  const [product, setProduct] = useState(null);
  const [submit, setSubmit] = useState(false);
  const [companyId, setCompanyId] = useState();

  const [image, setImage] = useState();

  useEffect(() => {
    getCompanyDetails(setCompany);
  }, []);

  //handle select option
  function handleChange(event) {
    setCompanyId(event.target.value);
  }

  function handleInput(event) {
    const { name, value } = event.target;

    setProduct((prevData) => ({ ...prevData, [name]: value }));

    console.log(product);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (companyId == null || companyId == undefined || companyId == "") {
      alert("company is not selected");
      return false;
    } else {
      addProduct(product, setSubmit, companyId);
      uploadImage(image, product.name);
    }
  }

  return (
    <Layout>
      <div className="product-page">
        {submit ? (
          <Toast setSubmit={setSubmit} submit={submit} text="product added" />
        ) : (
          ""
        )}
        <h2>Add new Product</h2>
        <div>
          <form action="">
            <div>
              <label htmlFor="select-company">Select company</label>
              <select
                name="company"
                id="compmay"
                required
                onChange={(event) => handleChange(event)}
              >
                <option value="">Select Company</option>
                {company &&
                  company.map((item, index) => {
                    return (
                      <option key={index} value={item.companyId}>
                        {item.name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="please enter name"
                required
                onChange={(event) => handleInput(event)}
              />
            </div>
            <div>
              <label htmlFor="carton-size">Carton Size</label>
              <input
                type="number"
                name="carton-size"
                id="carton-size"
                placeholder="carton size in number"
                required
                onChange={(event) => handleInput(event)}
              />
            </div>
            <div>
              <label htmlFor="carton-price">carton-price</label>
              <input
                type="number"
                name="carton-price"
                id="carton-price"
                placeholder="carton price"
                required
                onChange={(event) => handleInput(event)}
              />
            </div>
            <div>
              <label htmlFor="per-piece">Per-Piece</label>
              <input
                type="number"
                name="per-piece"
                id="per-piece"
                placeholder="per piece price"
                required
                onChange={(event) => handleInput(event)}
              />
            </div>
            <div>
              <label htmlFor="file">Image</label>

              <input
                type="file"
                name="image"
                id="image"
                accept="image/png/jpeg/jpg"
                onChange={(event) => {
                  setImage(event.target.files[0]);
                  console.log(image);
                }}
              />
            </div>

            <div>
              <button type="submit" onClick={(event) => handleSubmit(event)}>
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
