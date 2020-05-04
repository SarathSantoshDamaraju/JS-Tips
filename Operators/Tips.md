<div align="center">
  <h1> Operators </h1>
</div>

### Destructuring with default values

```javascript

// 1 -- Destructuring with functions
function getDetails({ id = Date.now(), name }) {
  // ...
}

getDetails({name : "javaScript"});

// 2 -- Destructuring with arrays
let feelings = ['🥳', '😄', '🤓'];
let [party, happy, geekish, sleepy = '😴'] = feelings;

// 2.1 -- You can also selectively choose values
let [party, , geekish ] = feelings; // party = '🥳', geekish = '🤓'

// 3 -- Destructuring with Objects
let yoda = {
  name: 'Yoda',
  title: 'Master',
  details: {
    planet: 'Dagobah',
    type: 'jedi',
    age: '900'
  }
}

let {name, details: {type: CharacterType}} = yoda;
// name = Yoda
// CharacterType = jedi


// 3.1 -- Using different variable names
let {
      name : characterName, 
      title: characterTitle, 
      weapon: characterWeapon = 'lightsaber'
    } = yoda;
// characterName = Yoda
// characterTitle = Master
// characterWeapon = lightsaber
```

#### **🤔 Why destructuring** 
-  Easy and readable way to extract from Objects and Arrays.  
-  Prevent unnecessary looping and validations.

#### **🤕 Pitfalls**

```javascript
// 1
let title;
{title} = yoda; //Syntax error

// this is possible, but not sure if this is a good practice.
({title} = yoda); 

// 2 - this is much better
let {title} = yoda;
```

#### References
- [ExploringJs](https://exploringjs.com/es6/ch_destructuring.html#sec_pitfalls-destructuring)
- [Mother MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)