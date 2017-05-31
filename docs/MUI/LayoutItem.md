##### `LayoutItem` - wrapper for MUI Grid item

Material design’s responsive UI is based on a 12-column grid layout. This grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs.

There is two type of layout: containers and items.

```javascript
LayoutContainer.propTypes = {
  
  // Useful to extend the style applied to components.
  classes: PropTypes.object,
  
  // The component used for the root node. 
  // Either a string to use a DOM element or a component.
  // default: 'div'
  component: PropTypes.oneOfType([
                 PropTypes.string,
                 PropTypes.func,
             ]),

  // Defines the align-items style property. 
  // It's applied for all screen sizes.
  // default: 'stretch'    
  align: PropTypes.oneOf([
            'flex-start',
            'center',
            'flex-end',
            'stretch'
         ]),
  
  // Defines the flex-direction style property. 
  // It is applied for all screen sizes.
  // default: 'row'    
  direction: PropTypes.oneOf([
                'row',
                'row-reverse',
                'column',
                'column-reverse'
             ]),
                           
  // Defines the space between the type item component. 
  // It can only be used on a type container component.
  // default: 16    
  gutter: PropTypes.oneOf([
                0, 8, 16, 24, 40
             ]),
                           
  // Defines the justify-content style property. 
  // It is applied for all screen sizes.
  // default: 'flex-start'    
  justify: PropTypes.oneOf([
                'flex-start', 
                'center', 
                'flex-end', 
                'space-between', 
                'space-around'
             ]),
                           
  // Defines the number of grids the component is going to use. 
  // It's applied for all the screen sizes with the lowest priority.
  xs: PropTypes.oneOf([
                boolean, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
             ]),
                   
  // Defines the number of grids the component is going to use. 
  // It's applied for the sm breakpoint and wider screens if not overridden.
  sm: PropTypes.oneOf([
                boolean, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
             ]),
                   
  // Defines the number of grids the component is going to use. 
  // It's applied for the md breakpoint and wider screens if not overridden.
  md: PropTypes.oneOf([
                boolean, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
             ]),
                   
  // Defines the number of grids the component is going to use. 
  // It's applied for the lg breakpoint and wider screens if not overridden.
  lg: PropTypes.oneOf([
                boolean, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
             ]),
                   
  // Defines the number of grids the component is going to use. 
  // It's applied for the xl breakpoint and wider screens if not overridden.
  xl: PropTypes.oneOf([
                boolean, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
             ]),
                                              
}
```
