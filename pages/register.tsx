import React from "react";
import { Formik } from "formik";

import Layout from "../components/Layout";

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
        {({ values }) => <form onSubmit={handleSubmit} />}
      </Formik>
    </Layout>
  );
};
