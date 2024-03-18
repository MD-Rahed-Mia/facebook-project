import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import "./Product.scss";
import { BsPencil } from "react-icons/bs";
import Navigation from "../../component/Tools/Navigation";
import { Link } from "react-router-dom";
import { getProduct } from "../../Firebase/Firebase";

export default function BrowsProduct() {
  const [product, setProduct] = useState();

  useEffect(() => {
    getProduct(setProduct);
  }, []);

  return (
    <Layout>
      <div className="browse-product">
        <Navigation path="/" pathTitle="/home/browse-product" />
        <h2>Browse product</h2>

        {product && console.log(product)}

        <table>
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Name</th>
              <th>Size</th>
              <th>Code</th>
              <th>CTN-Price</th>
              <th>Per-piece</th>
              <th>Status</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {product &&
              product.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item["carton-size"]}</td>
                    <td>{item.productId}</td>
                    <td>{item["carton-price"]}</td>
                    <td>{item["per-piece"]}</td>
                    <td>
                      <Link to="/edit-product/prn10">
                        <BsPencil className="edit-product-icon" />
                      </Link>
                    </td>
                    <td>{item.company}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
