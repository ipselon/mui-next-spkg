##### DataList accepts array with primary and secondary texts.

```javascript
DataList.propTypes = {
  data: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
};
```
```javascript
DataList.defaultProps = {
  data: [
    {id: 1, primaryText: 'PrimaryText', secondaryText: 'SecondaryText'}
  ],
  onSelect: (id, primaryText, secondaryText) => {
    console.log(id, primaryText, secondaryText);
  },
};
```
