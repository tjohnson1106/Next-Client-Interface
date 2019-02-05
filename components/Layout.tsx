import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

import { MeComponent } from "../generated/apolloComponents";

type Props = {
  title?: string;
};

const Container = styled("div")`
  background-color: #ececec;
`;

const Footer = styled("footer")`
  background-color: #ececec;
`;

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title"
}) => (
  <Container>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/hello">
          <a>hello</a>
        </Link>{" "}
        |{" "}
        <Link href="/register">
          <a>register</a>
        </Link>{" "}
        |{" "}
        <Link href="/forgot-password">
          <a>forgot password</a>
        </Link>{" "}
        |{" "}
        <Link href="/login">
          <a>login</a>
        </Link>{" "}
        |{" "}
        <MeComponent>
          {({ data, loading }) => {
            if (!data || loading || !data.me) {
              return null;
            }
            // update cache -> login page
            return (
              <Link href="/logout">
                <a>logout</a>
              </Link>
            );
          }}
        </MeComponent>
      </nav>
    </header>
    {children}
    <Footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </Footer>
  </Container>
);

export default Layout;
