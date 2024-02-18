import React from "react";

const SignUp = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="absolute bg-black/30 w-full h-full bg-gradient-to-tr from-black"></div>
        <div className="fixed w-full px-5 py-24 z-50 text-white">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/80 ">
            <div className="max-w-[320px] mx-auto py-16 ">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form className="w-full flex flex-col my-4 gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="py-2 px-4 rounded-sm bg-white bg-opacity-15"
                />
                <input
                 
                  type="password"
                  placeholder="Password"
                  required
                  className="py-2 px-4 rounded-sm bg-white bg-white bg-opacity-15"
                />
                <button className="bg-red-600 hover:bg-red-800 py-3 px-4 my-6 rounded font-bold">
                  SignUp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
