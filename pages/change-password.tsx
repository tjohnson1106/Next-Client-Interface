import React from "react";
import { Formik, Field } from "formik";
import Router from "next/router";
import { NextContext } from "next";

import Layout from "../components/Layout";
import { InputField } from "../components/fields/InputField";
import { ChangePasswordComponent } from "../generated/apolloComponents";

const ChangePassword = ({ token }: { token: string }) => {
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
                    token
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

// remember it's better type checking to pass the value to NextContext
ChangePassword.getInitialProps = ({
  query: { token }
}: NextContext<{ token: string }>) => {
  return {
    token
  };
};

export default ChangePassword;
