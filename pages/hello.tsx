import React from "react";
import { HelloComponent } from "../generated/apolloComponents";
import Layout from "../components/Layout";

export default () => {
  return (
    // HellComponent -> calls 'hello' query
    <Layout title="hello">
      <HelloComponent>
        {({ data }) => (
          // render whatever the query returns
          <div>{data && data.hello ? data.hello : "loading..."}</div>
        )}
      </HelloComponent>
    </Layout>
  );
};
