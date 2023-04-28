import React from "react";
import { useFormik } from "formik";

const Index = (props) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      fetch("/api/feedback", {
        method: "POST",
        body: JSON.stringify(values, null, 2),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    validationSchema: "",
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="rounded-md border border-green-500 p-4"
    >
      <div className="flex flex-col justify-between">
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <label htmlFor="lastName" className="">
            Last Name:
          </label>
        </div>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email Address:</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <button type="submit" className="bg-indigo-500 px-6 py-2">
        Submit
      </button>
    </form>
  );
};

export default Index;
