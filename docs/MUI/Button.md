##### `Button` - communicate the action that will occur when the user touches them.

```javascript
Button.propTypes = {
  
  // If true, the button will use the theme's accent color.
  // default: false
  accent: PropTypes.bool,
  
  // Useful to extend the style applied to components.
  classes: PropTypes.object,
  
  // Uses a smaller minWidth, ideal for things like card actions.
  // default: false
  compact: PropTypes.bool,
  
  // The component used for the root node. 
  // Either a string to use a DOM element or a component.
  // default: 'button'
  component: PropTypes.oneOfType([
                 PropTypes.string,
                 PropTypes.func,
               ]),
  
  // If true, the button will use the theme's contrast color.
  // default: false
  contrast: PropTypes.bool,
  
  // If true, the button will be disabled.
  // default: false
  disabled: PropTypes.bool,
  
  // If true, the keyboard focus ripple will be disabled. 
  // ripple must also be true.
  // default: false
  disableFocusRipple: PropTypes.bool,
  
  // If true, the ripple effect will be disabled.
  // default: false
  disableRipple: PropTypes.bool,
  
  // If true, well use floating action button styling.
  // default: false
  fab: PropTypes.bool,
  
  // The URL to link to when the button is clicked. 
  // If defined, an a element will be used as the root node.
  href: PropTypes.string,
  
  // If true, the button will use the theme's primary color.
  // default: false
  primary: PropTypes.bool,
  
  // If true, the button will use raised styling.
  // default: false
  raised: PropTypes.bool,
  
};
```


