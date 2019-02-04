import React from "react";
import { Formik, Field } from "formik";
import Router from "next/router";

import Layout from "../components/Layout";
import { InputField } from "../components/fields/InputField";
import { RegisterComponent } from "../generated/apolloComponents";

export default () => {
  return (
    <Layout title="Register page">
      {/* mutation */}
      <RegisterComponent>
        {(register) => (
          <Formik
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={async (data, { setErrors }) => {
              try {
                const response = await register({
                  variables: {
                    data
                  }
                });
                console.log("response", response, "response");
                Router.push("/check-email");
              } catch (err) {
                // most likely validation will be handled via Yup, placeholder for now
                console.log("err: ", err.graphQLErrors);
                const errors: { [key: string]: string } = {};
                err.graphQLErrors[0].validationErrors.forEach(
                  (validationErr: any) => {
                    Object.values(validationErr.constraints).forEach(
                      (message: any) => {
                        errors[validationErr.property] = message;
                      }
                    );
                  }
                );
                console.log(errors);
                setErrors(errors);
              }
            }}
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
      </RegisterComponent>
    </Layout>
  );
};
