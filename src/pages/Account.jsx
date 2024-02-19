import React from "react";
import SavedShows from "../components/SavedShow";

const Account = () => {
  return (
    <div className="w-full text-white">
      <div className=" w-full h-[150px] "></div>
      <h1 className="text-xl md:text-3xl mx-5 bg-red-600 p-3 rounded">
        My Shows
      </h1>
      <SavedShows />
    </div>
  );
};

export default Account;
