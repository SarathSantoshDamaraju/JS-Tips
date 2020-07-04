<div align="center">
  <h1>Closures </h1>
</div>

# Interview Questions

#### 0. Simple example of closure?

##### Question Frequency: Frequent

<details><summary><b>Answer</b></summary>

```javascript
function createUser(name) {
  const greetText = "Hello ";

  const greetUser = () => {
    return greetText + name
  }

  return {
    greetUser
  };
}

var krishna = createUser("Krishna");
krishna.greetUser(); // Hello Krishna
```

or

```javascript
const greetText = "Hello ";

function createUser(name) {
  const greetUser = () => {
    return greetText + name
  }

  return {
    greetUser
  };
}

var krishna = createUser("Krishna");
krishna.greetUser(); // Hello Krishna
```

</details>

---

#### 1. What's the output?

```javascript
for (let i = 0; i < 8; i++) {
  setTimeout(function() { console.log(i) }, 1000);
}
```

##### Question Frequency: Frequent

<details><summary><b>Answer</b></summary>

```javascript
0
1
2
3
4
5
6
7
8
```

</details>

---

#### 2. What's the output?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function() { console.log(i) }, 1000);
}
```
##### Question Frequency: Frequent

<details><summary><b>Answer</b></summary>

```javascript
8
8
8
```

</details>

---

#### 3. Explain how closure is formed in the below two examples?

```javascript
// example 1
for (var i = 0; i < 8; i++) {
  setTimeout(function() { console.log(i) }, 1000);
}
```

```javascript
// example 2
for (let i = 0; i < 8; i++) {
  setTimeout(function() { console.log(i) }, 1000);
}
```

##### Question Frequency: Rare

<details><summary><b>Answer</b></summary>
As we know closures is like a memory (scope) for the function on its surroundings when declared. And closures have three scope chains,
<ol>
<li>Local</li>
<li>Outer function (parent function)</li>
<li>global scope</li>
</ol>  

So, whenever something is needed, a closure would start searching from 1 -> 3. 

**In example 1**, by the time `setTimeout` is called, loop would have already executed and the value of `i` is 8. So, `anonymousFunction` cannot find value of `i` in itself, and in the outer function scope so it will go to the global scope and finds `i` there with value 8. So, prints `8`

> `var` used in for-loop would define itself in the parent scope of the forloop. Hence using var may have unwanted side effects. 

Hence, in our example, as the for-loop is not included in any other function, it would be declared in the global scope.

**In example 2**, block scope is used, that is the variable `i` is instead of  delcared in the parent scope of the for-loop, defined inside the loop itself. So, the `anonymousFunction` would find the value of the `i` in its outer function itself.
</details>

---

#### 4. Create a Counter function with closure?

##### Question Frequency: Frequent

<details><summary><b>Answer</b></summary>

One way of writing would be 

```javascript
function counter(startValue = 0) {
    const increment = () => {startValue++};
    const decrement = () => {startValue--};
    const show = () => {return startValue};

    return {
        increment: increment,
        decrement: decrement,
        show: show
    };
}

var myCounter = counter();
myCounter.increment(); // 1
myCounter.show(); // 1
mycounter.decrement(); // 0
```

</details>

---

#### 5. Run function only once?

Create a function to run only once despite multiple times calling.

##### Question Frequency: Rare

<details><summary><b>Answer</b></summary>

One way of writing would be 

```javascript
function runOnce(func) {
    var ran = false, returnedValue;

    return function() {
      if (ran) return returnedValue;

      ran = true;
      returnedValue = func.apply(this, arguments);
      func = null;
      return returnedValue;
    };

}

function initializeApp() {
  console.log('this should be shown once');
  return {"appStarted": true};
}

const MyApp = once(initializeApp);
MyApp(); // 'this should be shown once'
MyApp(); // no console return

```

</details>

---

#### 6. Show one example for encapsulation with closures

##### Question Frequency: Frequent
<details><summary><b>Answer</b></summary>

One way of writing would be 

```javascript

function createUser(name, age) {

    const validateAge = (age) => {
        if(age < 18) return false;
        return true;
    }

    const createUserHandle = (name) => {
        return !!name && name.trim().split(' ').join('_');
    }

    const getDetails = () => ({
        name,
        userId: createUserHandle(name),
        status: validateAge(age) ? "User created" : "Waiting for Approval"
    });

    return {
        getDetails: getDetails
    }

}

let Krishna = createUser(' krishna damaraju', 27);
Krishna.getDetails(); 

// validateAge and createUserHandle are still being used, but not revealed.
```

</details>

---


#### 7. What JS pattern you observe in the below example

```javascript
var MyModule = (function() {
  var myPrivateData = 303;
  function myPrivateFunction() {
    alert('private');
  }
  
  function myPublicFunction() {
      alert('public');
  }

  return {
    myPublicFunction
  };
})();
```

##### Question Frequency: Rare

<details><summary><b>Answer</b></summary>

Module Pattern
</details>

---

#### 8. List some realtime usage of closures

##### Question Frequency: Frequent

<details><summary><b>Answer</b></summary>

<ol>
  <li>Currying</li>
  <li>Higher Order Functions</li>
  <li>Stateful functions</li>
  <li>EventHandlers</li>
  <li>Array.[Map, Reduce, filter ..]</li>
  <li> Callback Functions </li>
  <li> Its like Everywhere in JS, all we need it to see</li>
</ol>
</details>

---


#### 9. Write a function with IIFE and closure

##### Question Frequency: Rare

<details><summary><b>Answer</b></summary>

```javascript
var _= (function() {
    const toUpper = (el) => el && el.toUpperCase();
    const toLower = (el) => el && el.toLowerCase();
    const dasherise = (el) => el && el.trim().split(' ').join('-');

    return {
      toUpper,
      toLower,
      dasherise
    }
})();

_.toLower('HELLO'); //"Krishna-Sarath"
_.dasherise('Krishna Sarath'); //"Krishna-Sarath"
```

Above is also know as module pattern
</details>

---
