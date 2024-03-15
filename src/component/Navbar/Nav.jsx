import React, { useState } from "react";
import "./style.scss";

import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Nav() {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);

  //handle menu option
  function handleMenu() {
    setMenu(!menu);
  }

  //handle search option
  function handleSearch() {
    setSearch(!search);
  }
  return (
    <div className="nav">
      <div className="nav-left">
        <h1>
          <Link to={"/"}>Logo</Link>
        </h1>
      </div>
      <div className="nav-right">
        <div className="nav-right-icon">
          <div className="search-icon">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="search keyword, product, company"
              className={search ? "search active" : "search"}
            />
            {search ? (
              <RxCross1 onClick={handleSearch} className="search-click-icon" />
            ) : (
              <CiSearch onClick={handleSearch} className="search-click-icon" />
            )}
          </div>

          <div className="menu-icon" onClick={handleMenu}>
            {menu ? <RxCross1 /> : <CiMenuBurger />}
          </div>
        </div>
        <div className={menu ? "nav-menu active" : "nav-menu"}>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/company">Company</Link>
            <Link to="/add-product">Add new products</Link>
            <Link to="/browse-product">Browse Product</Link>
            <Link>Edit existing Item</Link>
            <Link>Purchase</Link>
            <Link>Barcode Scan</Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
