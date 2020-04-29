<div align="center">
  <h1> Performance </h1>
</div>

### Dictionary Functions

Use **dictionary functions** as an alternative for `switch` case or nested `if` to reduce the `cyclomatic complexity` of the code.

```javascript

function getEmoji(feelings) {
  let emoji;

  if (feelings === 'calm') {
    emoji = '😇';
  } else if (feelings === 'happy') {
    emoji = '😄';
  } else if (feelings === 'thinking') {
    emoji = '🤔';
  } else if (feelings === 'sleepy') {
    emoji = '🥱';
  } else {
    emoji = '🥳';
  }

  return emoji;
}

// can be re written as
const getEmoji = (feelings) => {
  var emojis =  {
    'calm': '😇',
    'happy': '😄',
    'thinking': '🤔',
    'sleepy': '🥱',
    'default': '🥳'
  };

	return emojis[feelings] || emojis['default']
}

getEmoji('calm'); // 😇
getEmoji(); // 🥳
getEmoji('whatever'); // 🥳
```


```javascript

// 💡 There are mixed opinions about function usage.

function calculate({ action = '+', val1 = 0, val2 = 0 }) {
  let result = 0;
  switch (action) {
    case '+': return val1 + val2;
    case '-': return val1 - val2;
    case '*': return val1 * val2;
    case '/': return val1 / val2;
  }

  return result;
}
// calculate('+', 1, 2);

// With the help of currying, can be re-written as
const calculate = opr => {
    const operationsMap = {
    '÷': x => y => x / y,
    '×': x => y => x * y,
    '+': x => y => x + y,
    '-': x => y => x - y,
  }
  
  return operationsMap[opr];
}

const result = calculate(opr)(val1)(val2)

// calculate('+')(2)(3)

```
