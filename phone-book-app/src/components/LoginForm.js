import React from "react";

const LoginForm = () => {
  return (
    <div className="w-[450px] h-[500px] mx-auto py-14 px-4 ">
      <h1 className="text-2xl font-bold text-center mb-4">
        Create your Free Account
      </h1>
      <form className="flex flex-col">
        <label className="mt-8">Full Name</label>
        <input
          className="rounded-lg bg-neutral-200 text-neutral-800 py-3 px-5 outline-none"
          name="fullName"
          type="text"
          placeholder="Enter your Full Name here"
        />
        <label className="mt-8">Email</label>
        <input
          type="text"
          name="email"
          className="rounded-lg bg-neutral-200 text-neutral-800 py-3 px-5 outline-none"
          placeholder="Enter your email here"
        />
        <label className="mt-8">Password</label>
        <input
          className="rounded-lg bg-neutral-200 text-neutral-800 py-3 px-5 outline-none"
          placeholder="Enter your password here"
        />
        <button className="bg-[#f9ed32] text-neutral-800 text-lg font-medium py-2 px-3 mt-6 mb-4 w-48 mx-auto rounded-md">
          Create Account
        </button>

        <span className="text-sm">
          Already have an account?{" "}
          <a href="/" className="text-[#f9ed32]">
            Sign in
          </a>
        </span>
      </form>
    </div>
  );
};

export default LoginForm;
