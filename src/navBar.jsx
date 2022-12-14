import React from "react";


function NavBar() {
  return (
    <div className="navBar">
      <a>My Store</a>
      <a className="cart-items">
      
        <div className="cart-num">0</div>
      </a>
    </div>
  );
}

export default NavBar;
