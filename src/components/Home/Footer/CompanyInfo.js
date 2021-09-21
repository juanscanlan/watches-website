import React from "react";

function CompanyInfo() {
  const companyInfoData = [
    {
      title: "About WatchMe",
      line1: "About Us",
      line2: "FAQ",
      line3: "Partners",
      line4: "Charities",
    },
    {
      title: "Orders & Policies",
      line1: "Privacy Policy",
      line2: "Track Your Order",
      line3: "Payment Options",
      line4: "Returns",
    },
    {
      title: "Why Us?",
      line1: "30 Days Return Policy",
      line2: "Free Standard Shipping",
      line3: "International Shipping",
      line4: "8 Year Warranty",
    },
    {
      title: "Support",
      line1: "Contact Us",
      line2: "Watch Resources",
      line3: "Buying Guide",
      line4: "Gift Vouchers",
    },
  ];

  const columnJSX = (column) => (
    <div className="companyInfo__box">
      <h4>{column.title}</h4>
      <div className="companyInfo__content">
        <a href="#companyInfo">
          <span>{column.line1}</span>
        </a>
        <a href="#companyInfo">
          <span>{column.line2}</span>
        </a>
        <a href="#companyInfo">
          <span>{column.line3}</span>
        </a>
        <a href="#companyInfo">
          <span>{column.line4}</span>
        </a>
      </div>
    </div>
  );

  return (
    <div className="companyInfo" id="companyInfo">
      {columnJSX(companyInfoData[0])}
      {columnJSX(companyInfoData[1])}
      {columnJSX(companyInfoData[2])}
      {columnJSX(companyInfoData[3])}
    </div>
  );
}

export default CompanyInfo;
