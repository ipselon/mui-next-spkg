/**
*
* LayoutContainer
*
*/

import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from 'material-ui/Grid';

class LayoutContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid container {...this.props}>
        {this.props.children}
      </Grid>
    );
  }
}

LayoutContainer.propTypes = {
  children: PropTypes.node,
};
LayoutContainer.defaultProps = {
  children: null,
};

export default LayoutContainer;
