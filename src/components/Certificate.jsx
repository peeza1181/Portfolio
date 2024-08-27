import React from "react";
import certification from "../assets/certification.png";

export const Certificate = () => {
  return (
    <div
      name="certificate"
      className="w-full py-20 bg-black text-white rounded-[15px]"
    >
      <div className="w-full mx-auto flex flex-col justify-center items-center">
          <h1 className="sm:text-right text-4xl font-bold inline border-b-4 border-pink-600">Certificate</h1>
  
        <img className="pt-8 w-25 mx-auto" src={certification} alt="certification" />
      </div>
    </div>
  );
};
