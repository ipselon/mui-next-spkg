##### `Paper`

In material design, the physical properties of paper are translated to the screen. 
The background of an application resembles the flat, 
opaque texture of a sheet of paper, 
and an application’s behavior mimics paper’s ability to be re-sized, shuffled, 
and bound together in multiple sheets.

```javascript
Paper.propTypes = {
  
  // The component used for the root node. 
  // Either a string to use a DOM element or a component.
  // default: 'div'
  component: PropTypes.string,
  
  // Shadow depth, corresponds to dp in the spec. 
  // It's accepting values between 0 and 24 inclusive.
  // default: 2
  elevation: PropTypes.number,
 
  // If true, rounded corners are disabled.
  // default: false
  square: PropTypes.bool
}
```