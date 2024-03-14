import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Company from "./pages/Company/Company";
import AddCompany from "./pages/Company/AddCompany";
import EditCompany from "./pages/Company/EditCompany";
import Product from "./pages/AddProduct/Product";
import BrowsProduct from "./pages/AddProduct/BrowsProduct";
import EditProduct from "./pages/EditProduct/EditProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Home />} />
          {/* company page */}
          <Route path="/company" element={<Company />} />
          <Route path="/company/add-new-company" element={<AddCompany />} />
          <Route path="/company/edit-company-details" element={<EditCompany />} />

          {/* product page  */}
          <Route path="/add-product" element={<Product />} />
          <Route path="/browse-product" element={<BrowsProduct />} />
          <Route path="/edit-product/:productId" element={<EditProduct />} />

          <Route path="*" element={
            <Error />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
