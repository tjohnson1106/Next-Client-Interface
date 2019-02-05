// @ts-ignore
import React from "react";
import Router from "next/router";

import { ApolloContext } from "../interfaces/ApolloContext";
import { logoutMutation } from "../graphql/user/mutations/logout";

const Logout = () => {
  return null;
};

Logout.getInitialProps = async ({ apolloClient }: ApolloContext) => {
  await apolloClient.mutate({
    mutation: logoutMutation
  });
  // Apollo store should be cleared after logout
  await apolloClient.resetStore();
  Router.push("/login");
  return {};
};

export default Logout;
