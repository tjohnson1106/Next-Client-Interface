import React from "react";
import { Formik, Field } from "formik";

import Layout from "../components/Layout";
import { InputField } from "../components/fields/InputField";

export default () => {
  return (
    <Layout title="Register page">
      <Formik
        onSubmit={() => {}}
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          password: ""
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="firstName"
              placeholder="firstName"
              component={InputField}
            />
            <Field
              name="lastName"
              placeholder="lastName"
              component={InputField}
            />
            <Field name="email" placeholder="email" component={InputField} />
            <Field
              name="password"
              placeholder="password"
              component={InputField}
            />
          </form>
        )}
      </Formik>
    </Layout>
  );
};
