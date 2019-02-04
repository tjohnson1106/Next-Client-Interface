import React from "react";
import { HelloComponent } from "../generated/apolloComponents";

export default () => {
  return (
    // HellComponent -> calls 'hello' query
    <HelloComponent>
      {({ data }) => (
        // render whatever the query returns
        <div>{data && data.hello ? data.hello : "loading..."}</div>
      )}
    </HelloComponent>
  );
};
