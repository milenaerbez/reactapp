import React from "react";


function NavBar({cartNum}) {
  //const cartNum=0;
  return (
    <div className="navBar">
      <a>My Store</a>
      <a className="cart-items">
      
        <div className="cart-num">{cartNum}</div>
      </a>
    </div>
  );
}

export default NavBar;
