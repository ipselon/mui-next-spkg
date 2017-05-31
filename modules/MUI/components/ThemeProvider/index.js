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
    const {styleManager, theme} = this.props;
    return (
      <MuiThemeProvider
        styleManager={styleManager}
        theme={theme}
      >
        <div>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
  styleManager: PropTypes.object,
  theme: PropTypes.object
};
ThemeProvider.defaultProps = {
  children: null
};

export default ThemeProvider;
