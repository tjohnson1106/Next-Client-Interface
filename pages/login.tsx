import React from "react";
import { Formik, Field } from "formik";
import Router from "next/router";

import Layout from "../components/Layout";
import { InputField } from "../components/fields/InputField";
import { LoginComponent, MeQuery } from "../generated/apolloComponents";
import { meQuery } from "../graphql/user/queries/me";

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
                variables: data,
                update: (cache, { data }) => {
                  if (!data || !data.login) {
                    return;
                  }
                  cache.writeQuery<MeQuery>({
                    query: meQuery,
                    data: {
                      __typename: "Query",
                      me: data.login
                    }
                  });
                }
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
