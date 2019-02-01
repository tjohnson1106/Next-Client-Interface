import { NextContext } from "next";
import { ApolloClient, NormalizedCacheObject } from "apollo-boost";

export interface ApolloContext extends NextContext {
  apolloClient: ApolloClient<NormalizedCacheObject>;
}
