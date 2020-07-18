<div align="center">
  <h1>Promises </h1>
</div>

# Interview Questions

#### 0. Simple example of a Promise?

##### Question Frequency: Frequent

<details><summary><b>Answer</b></summary>

```javascript
function getPromise() {
  return new Promise((resolve, reject) => {
    resolve('Promise is Successful/Fulfilled');
  })
}

getPromise().then((resp) => {console.log(resp)}) //Promise is Successful/Fulfilled
```

or

```javascript
function getPromise() {
  return new Promise((resolve, reject) => {
    reject('Promise is Failed');
  })
}

getPromise().catch((resp) => {console.log(resp)}) //Promise is Failed
```

</details>

---

#### 1. what does this statement suggests?


```javascript
  Uncaught (in promise) ...
```

##### Question Frequency: Rare

<details><summary><b>Answer</b></summary>

The above says, that there is a un-caught `Promise` failure and it was not `catched`. that means there is no `catch` in promise handlers.

<b>Example</b>

```javascript
function getPromise() {
  return new Promise((resolve, reject) => {
    reject('Promise is Failed');
  })
}

getPromise().then((resp) => {console.log(resp)}) 
//Uncaught (in promise) Promise is Failed
```

</details>

---

#### 2. I want to fetch some data from an Endpoint, how do you accomplish that?

##### Question Frequency: For beginners, Frequent

<details><summary><b>Answer</b></summary>

To fetch any data from any endpoint/API/Url, we must use HTTP calls, there are two ways of making such calls with Native JS.

- using Ajax (a.k.a `XMLHttpRequest()`)
- `fetch` api
  
```javascript
function loadData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
   
      console.log(this.responseText);
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xhttp.send();
}

loadData();

```

</details>

---

#### 3. What is the difference between `fetch` and `XMLHttpRequest()`?


##### Question Frequency: Rare

<details><summary><b>Answer</b></summary>
Both of them are used to communicate with the Cross origin resources. Fetch is the combination of `XMlHttpRequests()` and `Promise`
</details>

---

#### 4. Example of Promise usage with SetInterVal/SetTimeout API

##### Question Frequency: Frequent

<details><summary><b>Answer</b></summary>

One way of writing would be 

```javascript
function aPromise() {
    return new Promise(() => {
        setInterval(() => console.log("Hello"), 1000); //1 second
    })
}

aPromise();
```

</details>

---

#### 5. Write a Function to load resources from various endpoints ?

I want the response if **all** of them are Successful/Resolved.

##### Question Frequency: Rare

<details><summary><b>Answer</b></summary>

One way of writing would be 

```javascript
let dataTypes = ["posts", "comments", "photos", "albums"];

// function to make API calls
function fetchData(type) {
  return fetch(`https://jsonplaceholder.typicode.com/${type}`).then(response =>
    response.json()
  );
}

/*
 * Using `Promise.all`
 * 💡 Resolves if all the requests are successful
 * 💡 Rejects immediately if any request is failed
 */
async function loadAll(arr) {
  let promises = [];

  for (let i = 0; i < arr.length; i++) {
    promises.push(fetchData(arr[i]));
  }
  return await Promise.all(promises);
}

loadAll(dataTypes).then(res => console.log(res));

```

</details>

---

#### 5.1 Above Example with 'any' of them are Settled.


##### Question Frequency: Frequent

<details><summary><b>Answer</b></summary>

Below code returns, if any of the calls get Fulfilled/Rejected first.

One way of writing would be 

```javascript
let dataTypes = ["posts", "comments", "photos", "albums"];

// function to make API calls
function fetchData(type) {
  return fetch(`https://jsonplaceholder.typicode.com/${type}`).then(response =>
    response.json()
  );
}

/*
 * Using `Promise.all`
 * Resolves if all the requests are successful
 * Rejects immediatly if any request is failed
 */
async function parallel(arr) {
  let promises = [];

  for (let i = 0; i < arr.length; i++) {
    promises.push(fetchData(arr[i]));
  }
  return await Promise.race(promises);
}

parallel(dataTypes).then(res => console.log(res));
```

</details>

---

#### 5.2 Above Example with 'ALL' of them are Settled.


##### Question Frequency: Frequent

<details><summary><b>Answer</b></summary>

Below code returns, if any of the calls get Fulfilled/Rejected first.

One way of writing would be 

```javascript
let dataTypes = ["posts", "comments", "photos", "albums"];

// function to make API calls
function fetchData(type) {
  return fetch(`https://jsonplaceholder.typicode.com/${type}`).then(response =>
    response.json()
  );
}

/*
 * Using `Promise.all`
 * Resolves if all the requests are successful
 * Rejects immediatly if any request is failed
 */
async function parallel(arr) {
  let promises = [];

  for (let i = 0; i < arr.length; i++) {
    promises.push(fetchData(arr[i]));
  }
  return await Promise.allSettled(promises);
}

parallel(dataTypes).then(res => console.log(res));
```

</details>

---

#### 6 what is the correct output

```javascript

function apromise() {
    new Promise(() => {
        setTimeout(() => console.log("from promise"), 1000);
    })
}


function atimeout() {
  setTimeout(() => console.log("from timeout"), 1000);
}


(() => {
    atimeout();
    apromise();
})()
```

<ol>
<li>from timeout, from promise</li>
<li>from promise, from timeout</li>
<li>from timeout, undefined</li>
</ol>

##### Question Frequency: Rare/Advanced

<details><summary><b>Answer</b></summary>

**Answer**: 1

Though Promise is given priority over setTimeout. In the above code, Promise calls setTimeout, so the code is executed in the called order, timeout first and Promise second.
</details>

---