// @ts-ignore
import React, { PureComponent } from "react";
import { ApolloContext } from "../interfaces/ApolloContext";
import {
  ConfirmUserMutation,
  ConfirmUserVariables
} from "../generated/apolloComponents";
import { confirmUserMutation } from "../graphql/user/mutations/confirmUser";
import redirect from "../lib/redirect";

class Confirm extends PureComponent {
  static async getInitialProps({
    query: { token },
    apolloClient,
    ...ctx
  }: ApolloContext) {
    if (!token) {
      return {};
    }

    await apolloClient.mutate<ConfirmUserMutation, ConfirmUserVariables>({
      mutation: confirmUserMutation,
      variables: {
        token: token as string
      }
    });

    redirect(ctx, "/login");

    return {};
  }

  render() {
    console.log(this.props);
    return "Something went wrong!";
  }
}

export default Confirm;
