<div align="center">
  <h1> Arrays </h1>
</div>

### Pushing to array

```javascript
let shoppingList = ['✏️', '🎒', '📱', '🕶', '🥾'];

// ❌ Least performant don't use it for pushing to array
shoppingList = shoppingList.concat(['🍦'])

// ⚠️ Airbnb lint throws error for this
shoppingList[shoppingList.length] = '🍦';

// ✅ This is better
shoppingList.push('🍦');
```

💡 Don't use `Array.prototype.concat` to push the elements to `Arrays`. This is very costly and might hang the browser if the array is larger.

📊 Jsperf metrics [here](https://jsperf.com/pushing-to-arrays)