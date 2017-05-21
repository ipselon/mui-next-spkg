/**
*
* ThemeProvider
*
*/

import React, { Component } from "react";
import PropTypes from "prop-types";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ThemeProvider extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

ThemeProvider.propTypes = {
  children: PropTypes.node
};
ThemeProvider.defaultProps = {
  children: null
};

export default ThemeProvider;
