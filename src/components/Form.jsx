import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setName((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = { ...name };
    console.log(formData);
  };

  return (
    <div className="text-2xl bg-white py-8 px-20 rounded-md">
      <h1 className="text-center text-5xl my-12 font-medium">Crud</h1>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={submitHandler}
      >
        <label htmlFor="fullName">
          <input
            className="text-white m-6 py-3 px-12 pl-6 bg-slate-600 rounded-sm"
            type="text"
            name="fullName"
            placeholder="Enter your name"
            value={name.fullName}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="email">
          <input
            className="text-white m-6 py-3 px-12 pl-6 bg-slate-600 rounded-sm"
            type="text"
            name="email"
            placeholder="Enter your email"
            value={name.email}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="phoneNumber">
          <input
            className="text-white m-6 py-3 px-12 pl-6 bg-slate-600 rounded-sm"
            type="text"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={name.phoneNumber}
            onChange={handleInputChange}
          />
        </label>
        <button
          type="submit"
          className="my-16 py-4 px-8 bg-slate-600 text-white rounded-md hover:bg-slate-500"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default Form;
