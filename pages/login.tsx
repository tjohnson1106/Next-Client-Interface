import React from "react";
import { Formik, Field } from "formik";
import Router from "next/router";

import Layout from "../components/Layout";
import { InputField } from "../components/fields/InputField";
import { LoginComponent } from "../generated/apolloComponents";

export default () => {
  return (
    <Layout title="Login page">
      {/* mutation */}
      <LoginComponent>
        {(login) => (
          <Formik
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={async (data, { setErrors }) => {
              const response = await login({
                variables: data
              });
              console.log("response", response, "response");
              if (response && response.data && !response.data.login) {
                setErrors({
                  email: "Invalid login"
                });
                return;
              }

              Router.push("/");
            }}
            initialValues={{
              email: "",
              password: ""
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="email"
                  placeholder="email"
                  component={InputField}
                />
                <Field
                  name="password"
                  placeholder="password"
                  type="password"
                  component={InputField}
                />
                <button type="submit">Submit</button>
              </form>
            )}
          </Formik>
        )}
      </LoginComponent>
    </Layout>
  );
};
