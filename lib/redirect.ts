import Router from "next/router";

export default (context: any, target: string) => {
  if (context.res) {
    // server
    // 303: "See other"

    context.res.writeHead(303, { Location: target });
    context.res.end();
  } else {
    // default expected behaviour
    Router.replace(target);
  }
};
