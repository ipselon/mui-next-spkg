##### The `TextField` component is a complete form control including a label, input and help text.

```javascript
TextField.propTypes = {
  
  // The default value of the Input element.
  defaultValue: PropTypes.string,
  
  // If true, the input will be disabled.
  disabled: PropTypes.bool,
  
  // If true, the label will be displayed 
  // in an error state.
  error: PropTypes.bool,
  
  // The CSS class name of the input element.
  inputClassName: PropTypes.string,
  
  // Properties applied to the input element.
  inputProps: PropTypes.object,
  
  // Use that property to pass a ref callback 
  // to the native input component.
  inputRef: PropTypes.func,
  
  // The label content.
  label: PropTypes.node,
  
  // The CSS class name of the label element.
  labelClassName: PropTypes.string,
  
  // If true, a textarea element will be rendered 
  // instead of an input.
  multiline: PropTypes.bool,
  
  // Name attribute of the Input element.
  name: PropTypes.string,
  
  // If true, the label is displayed as required.
  // default: false
  required: PropTypes.bool,
  
  // Number of rows to display when 
  // multiline option is set to true.
  rows: PropTypes.number,
  
  // Maxium number of rows to display when 
  // multiline option is set to true.
  rowsMax: PropTypes.number,
  
  // Type attribute of the Input element. 
  // It should be a valid HTML5 input type.
  type: PropTypes.string,

  // The value of the Input element, 
  // required for a controlled component.
  value: PropTypes.string,
    
};
```


