import React from "react";

function HomeFooter() {
  return (
    <div className="homeFooter">
      <div className="homeFooter__double">
        <div className="homeFooter__box">
          <i class="fas fa-box-open"></i>
          <span>Free shipping</span>
        </div>
        <div className="homeFooter__box">
          <i class="fas fa-shipping-fast"></i>
          <span>One day delivery</span>
        </div>
      </div>
      <div className="homeFooter__double">
        <div className="homeFooter__box">
          <i class="fas fa-store-alt"></i>
          <span>Pick up in store</span>
        </div>
        <div className="homeFooter__box">
          <i class="fas fa-tags"></i>
          <span>Exclusive discounts</span>
        </div>
      </div>
    </div>
  );
}

export default HomeFooter;
