<div align="center">
  <h1>Closures </h1>
</div>

# Interview Questions

##### 1. What's the output?

```javascript
for (let i = 0; i < 8; i++) {
  setTimeout(function() { console.log(i) }, 1000);
}
```

##### Question Frequency : Common
##### Difficulty : Beginners

<details><summary><b>Answer</b></summary>

#### Answer: 
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

###### 2. What's the output?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function() { console.log(i) }, 1000);
}
```

<details><summary><b>Answer</b></summary>

#### Answer: 
```javascript
8
8
8
```

</details>

---
