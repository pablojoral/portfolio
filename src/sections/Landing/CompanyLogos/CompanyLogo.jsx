import React from "react";

const CompanyLogo = ({ image }) => {
  return (
    <div className="w-40">
      <img className="object-cover" src={image} />
    </div>
  );
};

export default CompanyLogo;
