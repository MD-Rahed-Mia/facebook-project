import React from "react";
import "./Product.scss";
import Layout from "../../Layout";

export default function Product() {
  return (
    <Layout>
      <div className="product-page">
        <h2>Add new Product</h2>

        <div>
          <form action="">
            <div>
              <label htmlFor="select-company">Select company</label>
              <select name="company" id="compmay" required>
                <option value="">Select Company</option>
                <option value="">Abul Khair Consumer Limited</option>
                <option value="">Pran RFL Limited</option>
                <option value="">Square Consumer Limited</option>
              </select>
            </div>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" placeholder="please enter name" required />
            </div>
            <div>
              <label htmlFor="carton-size">Carton Size</label>
              <input type="number" name="carton-size" id="carton-size" placeholder="carton size in number" required />
            </div>
            <div>
              <label htmlFor="carton-price">carton-price</label>
              <input type="number" name="carton-price" id="carton-price" placeholder="carton price" required />
            </div>
            <div>
              <label htmlFor="per-piece">Per-Piece</label>
              <input type="number" name="per-piece" id="per-piece" placeholder="per piece price" required />
            </div>
            <div>
              <label htmlFor="file">Image</label>

              <input type="file" name="image" id="image" accept="image/png/jpeg/jpg" />
            </div>

            <div>
              <button type="submit">submit</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
