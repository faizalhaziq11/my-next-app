import React from "react";
import { Formik, useFormik } from "formik";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

export default function Index() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      fetch("/api/feeback", {
        method: "POST",
        body: JSON.stringify(values),
      });
    },
  });

  console.log(formik);
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
