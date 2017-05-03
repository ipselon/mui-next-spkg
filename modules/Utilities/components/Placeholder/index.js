/**
*
* Placeholder
*
*/

import React, { PureComponent } from "react";

const style = {
  display: "flex",
  justifyContent: "center",
  height: "100px",
  alignItems: "center",
  backgroundColor: "#fcecd7",
  borderRadius: "4px",
  padding: "1em",
};

class Placeholder extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={style}>

        <span>Placeholder. Replace with component.</span>

      </div>
    );
  }
}

export default Placeholder;
