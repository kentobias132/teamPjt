import React from "react";

function MoreDetails({ heading, parag, img, flip }) {
  return (
    <div className=" bg-black w-full my-2">
      <div
        className={`flex w-full max-w-[85%] flex-col sm:flex-row items-center mx-auto text-white py-20 ${
          flip ? "sm:flex-row-reverse" : "sm:flex-row"
        } `}
      >
        <div className=" sm:w-1/2 flex flex-col justify-center ">
          <h1 className="text-[2rem] text-center sm:text-5xl font-extrabold    ">
            {" "}
            {heading}{" "}
          </h1>
          <p className=" text-lg text-center sm:text-2xl py-4"> {parag} </p>
        </div>
        <div className=" sm:w-1/2">
          <img src={img} alt="img" className=" w-[90%]" />
        </div>
      </div>
    </div>
  );
}

export default MoreDetails;
