##### `ThemeProvider` - wrapper for MuiThemeProvider

Material-UI components require a theme and a style manager to be provided. 
You need to use the `<ThemeProvider />` component in order to inject them into your application context. 

```javascript
ThemeProvider.propTypes = {
    styleManager: PropTypes.object,
    theme: PropTypes.object
}
```