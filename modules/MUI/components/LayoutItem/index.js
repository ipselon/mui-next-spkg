/**
*
* LayoutItem
*
*/

import React, { Component } from "react";
import PropTypes from "prop-types";
import Layout from 'material-ui/Layout';

class LayoutItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleValue: ""
    };
  }

  render() {
    return (
      <Layout item {...this.props}>
        {this.props.children}
      </Layout>
    );
  }
}

LayoutItem.propTypes = {
  children: PropTypes.node,
};
LayoutItem.defaultProps = {
  children: null,
};

export default LayoutItem;
