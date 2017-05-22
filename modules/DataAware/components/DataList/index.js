/**
*
* DataList
*
*/
import {cloneDeep} from 'lodash';
import React, { Component } from "react";
import PropTypes from "prop-types";
import { List, ListItem, ListItemText } from "modules/MUI";

class DataList extends Component {
  constructor(props) {
    super(props);
  }

  handleSelectItem = (id, primaryText, secondaryText) => (e) => {
    const {onSelect} = this.props;
    if (onSelect) {
      onSelect(id, primaryText, secondaryText);
    }
  };

  render() {
    const { data } = this.props; // eslint-disable-line
    return (
      <List disablePadding>
        {data.map((item, index) => {
          return (
            <ListItem
              key={'' + item.id + index}
              divider={true}
              button={true}
              onClick={this.handleSelectItem(item.id, item.primaryText, item.secondaryText)}
            >
              <ListItemText
                primary={item.primaryText}
                secondary={item.secondaryText}
              />
            </ListItem>
          );
        })}
      </List>
    );
  }
}

DataList.propTypes = {
  data: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
};
DataList.defaultProps = {
  data: [
    {id: 1, primaryText: 'PrimaryText', secondaryText: 'SecondaryText'}
  ],
  onSelect: (id, primaryText, secondaryText) => {
    console.log(id, primaryText, secondaryText);
  },
};

export default DataList;
