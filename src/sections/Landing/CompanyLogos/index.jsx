import React from "react";
import tarjimlyLogo from "../../../assets/tarjimly-logo-gray.png";
import sophilabsLogo from "../../../assets/sophilabs-logo-gray.png";
import ripioLogo from "../../../assets/ripio-logo-gray.png";
import lunaryLogo from "../../../assets/lunary-logo-gray.png";
import CompanyLogo from "./CompanyLogo";

const CompanyLogos = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <CompanyLogo image={tarjimlyLogo} />
      <CompanyLogo image={sophilabsLogo} />
      <CompanyLogo image={ripioLogo} />
      <CompanyLogo image={lunaryLogo} />
    </div>
  );
};

export default CompanyLogos;
