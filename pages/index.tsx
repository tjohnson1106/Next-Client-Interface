import * as React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>

      <Mutation
        mutation={gql`
          mutation {
            login(email: "tytyty@tytytyfailTest.com", password: "password01") {
              id
              firstName
              lastName
              name
              email
            }
          }
        `}
      >
        {(mutate) => (
          <button
            onClick={async () => {
              const response = await mutate();
              console.log("response: ", response);
            }}
          >
            Call login mutation
          </button>
        )}
      </Mutation>
    </Layout>
  );
};

export default IndexPage;
