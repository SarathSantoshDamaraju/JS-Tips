<div align="center">
  <h1> Statements </h1>
</div>

### Improve the **Readability** of the large number declarations.

```javascript
// regular
const million = 1000000;

// Using Exponential notation
const million = 1e6;

// Numeric separators 
const million = 1_000_000;

```

💡 [Numerical Separators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Numeric_separators) is recent to most of the browsers and **not supported in IE**