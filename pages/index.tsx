import * as React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { Mutation } from "react-apollo";

import { loginMutation } from "../graphql/user/mutations/login";
import {
  LoginVariables,
  LoginMutation,
  LoginComponent
} from "../generated/apolloComponents";

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>

      {/* mutation with type generics */}
      <LoginComponent>
        {(mutate) => (
          <button
            onClick={async () => {
              const response = await mutate({
                variables: {
                  email: "test@test.com",
                  password: "password01"
                }
              });

              console.log("response: ", response);
            }}
          >
            Call login mutation
          </button>
        )}
      </LoginComponent>
    </Layout>
  );
};

export default IndexPage;
