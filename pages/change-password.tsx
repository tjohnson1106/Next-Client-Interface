import React from "react";
import { Formik, Field } from "formik";
import Router from "next/router";

import Layout from "../components/Layout";
import { InputField } from "../components/fields/InputField";
import { ChangePasswordComponent } from "../generated/apolloComponents";

export default () => {
  return (
    <Layout title="Change Password page">
      {/* mutation */}
      <ChangePasswordComponent>
        {(changePassword) => (
          <Formik
            onSubmit={async (data) => {
              const response = await changePassword({
                variables: {
                  data: {
                    password: data.password,
                    token: ""
                  }
                }
              });
              console.log("response", response, "response");
              Router.push("/");
            }}
            initialValues={{
              password: ""
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="password"
                  placeholder="password"
                  component={InputField}
                  type="password"
                />

                <button type="submit">change password</button>
              </form>
            )}
          </Formik>
        )}
      </ChangePasswordComponent>
    </Layout>
  );
};
