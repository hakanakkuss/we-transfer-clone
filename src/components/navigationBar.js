import React from "react";
import { Link } from "react-router-dom";

export default function navigationBar() {
  return (
    <div className="navbar">
      <Link to={`/`}>
        <img src="we_icon.png" width="47" height="47" className="left-icon" />
      </Link>
      <Link to={`/help`}>
        <button className="btn-1">Help</button>
      </Link>

      <Link to={`/products`}>
        <button className="btn-2">Products</button>
      </Link>

      <Link to={`/company`}>
        <button className="btn-3">Company</button>
      </Link>

      <Link to={`/signup`}>
        <button className="btn-4">Sign Up</button>
      </Link>

      <Link to={`/login`}>
        <button className="btn-5">Log In</button>
      </Link>
    </div>
  );
}

//  ;
