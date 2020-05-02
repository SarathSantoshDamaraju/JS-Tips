<div align="center">
  <h1> Arrays </h1>
</div>

### Pushing to array

Don't use `Array.prototype.concat` to push the elements to `Arrays`. This is very costly if the arrays are large.

```javascript
let shoppingList = ['✏️', '🎒', '📱', '🕶', '🥾'];

// ❌ Least performant don't use it for pushing to array
shoppingList = shoppingList.concat(['🍦'])

// 1
shoppingList.push('🍦');

// 2
shoppingList[shoppingList.length] = '🍦';
```

📊 Jsperf metrics [here](https://jsperf.com/pushing-to-arrays)