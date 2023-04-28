import React from "react";
import { Formik, Field, Form } from "formik";
import CustomSelect from "../CustomSelect";

export default function Index() {
  return (
    <div>
      <h1>Advanced Form</h1>
      <Formik
        initialValues={{ toggle: false, checked: [], name: "" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({ values, handleChange, handleBlur, errors }) => (
          <Form>
            <label>
              <Field type="checkbox" name="toggle" />
              {`${values.toggle}`}
            </label>
            <input
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              name="name"
            />
            <CustomSelect
              label="Job Type"
              name="jobType"
              placeholder="Please select a job"
            >
              <option value="">Please select a job type</option>
              <option value="developer">Developer</option>
              <option value="dentist">Dentist</option>
            </CustomSelect>
            {errors.name && <div id="feedback">{errors.name}</div>}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
