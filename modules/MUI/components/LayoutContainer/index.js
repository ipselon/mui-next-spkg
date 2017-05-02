/**
*
* LayoutContainer
*
*/

import React, { Component } from "react";
import PropTypes from "prop-types";
import Layout from 'material-ui/Layout';

const style = {
  flexGrow: 1,
};

class LayoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleValue: ""
    };
  }

  render() {
    return (
      <Layout container {...this.props}>
        {this.props.children}
      </Layout>
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
