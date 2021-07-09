import React from "react";
import Logo from "../public/logo.svg";
import Image from "next/image";

const Top = () => {
  return (
    <div className="text-center ">
      <div className="pt-12">
        {" "}
        <Image src={Logo} />
      </div>
    </div>
  );
};

export default Top;
