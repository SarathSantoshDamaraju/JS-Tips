<div align="center">
  <h1> Statements </h1>
</div>

#### 1. Which of the option(s) would throw an error?

```javascript
const userDetails = {
  name: "Jay", 
  location: "India", 
  emojisUsed: ['😀', '😏', '😋', '🥺']
  };

/* 1 */ userDetails.name = "Andrew"; // updating
/* 2 */ userDetails.length = 12; // extension
/* 3 */ userDetails.emojisUsed.push(' 😡'); // extension
/* 4 */ userDetails = {}; // Assignment
/* 5 */ userDetails.emojiUsed = []; // Assignment
```

##### Question Frequency: Rare
##### Difficulty: Medium

<details><summary><b>Answer</b></summary>

Option: **4**

- The value of a constant **cannot** be changed through **reassign**ment, **and** it can't be **redeclare**d.
- `Const` wont make value immutable, just the highlevel variable identifier (`userDetails` in the example) cannot be changed. If the identifier is an object, its children values can be changed.

``` javascript
// 1
const name = "Krishna";

name = "Krishna D"; // would throw an error

const person = {
  name: "Krishna", 
  location: "India"
  };

person.name = "Krishna D"; // Still possible

```



</details>
