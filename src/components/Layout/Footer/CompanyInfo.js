import React from "react";

function CompanyInfo() {
  return (
    <div className="companyInfo">
      <div className="companyInfo__box">
        <h4>About WatchMe</h4>
        <div className="companyInfo__content">
          <a>
            <span>About Us</span>
          </a>
          <a>
            <span>FAQ</span>
          </a>
          <a>
            <span>Partners</span>
          </a>
          <a>
            <span>Charities</span>
          </a>
        </div>
      </div>
      <div className="companyInfo__box">
        <h4>Orders & Policies</h4>
        <div className="companyInfo__content">
          <a>
            <span>Privacy Policy</span>
          </a>
          <a>
            <span>Track Your Order</span>
          </a>
          <a>
            <span>Payment Options</span>
          </a>
          <a>
            <span>Returns</span>
          </a>
        </div>
      </div>
      <div className="companyInfo__box">
        <h4>Why Us?</h4>
        <div className="companyInfo__content">
          <a>
            <span>30 Days return policy</span>
          </a>
          <a>
            <span>Free Standard Shipping</span>
          </a>
          <a>
            <span>International Shipping</span>
          </a>
          <a>
            <span>Warranty</span>
          </a>
        </div>
      </div>
      <div className="companyInfo__box">
        <h4>Support</h4>
        <div className="companyInfo__content">
          <a>
            <span>Contact Us</span>
          </a>
          <a>
            <span>Watch Resources</span>
          </a>
          <a>
            <span>Buying Guide</span>
          </a>
          <a>
            <span>Gift Vouchers</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo;
