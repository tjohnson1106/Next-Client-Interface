// @ts-ignore
import React from "react";

import { ApolloContext } from "../interfaces/ApolloContext";
import { logoutMutation } from "../graphql/user/mutations/logout";
import redirect from "../lib/redirect";

const Logout = () => {
  return null;
};

Logout.getInitialProps = async ({ apolloClient, ...ctx }: ApolloContext) => {
  await apolloClient.mutate({
    mutation: logoutMutation
  });
  // Apollo store should be cleared after logout
  await apolloClient.resetStore();
  redirect(ctx, "/login");
  return {};
};

export default Logout;
