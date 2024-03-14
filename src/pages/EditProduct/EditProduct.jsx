import React from 'react'
import './EditProduct.scss';
import Layout from '../../Layout';
import Navigation from '../../component/Tools/Navigation';
import { useParams } from 'react-router-dom';


export default function EditProduct() {
  const { productId } = useParams();
  return (
    <Layout>
      <div className='edit-product'>
        <Navigation path="/browse-product" pathTitle={`/browse-product/edit-product/${productId}`} />
        <h2>Edit product details</h2>

        <form action="">
          <div>
            <label htmlFor="product-id">Product ID(<span>you cannot edit ID</span>)</label>
            <input type="text" name="product-id" id="product-id" readOnly placeholder='product id' />
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
    </Layout>
  )
}
