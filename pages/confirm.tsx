import React, { PureComponent } from "react";
import { NextContext } from "next";

class Confirm extends PureComponent {
  static getInitialProps = ({ query: { token } }: NextContext) => {
    return { token };
  };

  render() {
    console.log(this.props);
    return <div>Confirm</div>;
  }
}

export default Confirm;
