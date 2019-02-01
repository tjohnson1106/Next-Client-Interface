import React from "react";
import PureComponent = React.PureComponent;

class Confirm extends PureComponent {
  getInitialProps = (...vals: any[]) => {
    console.log(vals);
  };

  render() {
    return <div>Confirm</div>;
  }
}

export default Confirm;
