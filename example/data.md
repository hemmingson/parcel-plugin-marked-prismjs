## Subtitle With Anchor

`line highlight`

```js{4,10}
window.confidence = true

const dev = {
  confidence: false,
  success() {
    return this.confidence
  },
}

console.log((0, dev.success)()) // true
```

`diff`

```diff-js
- delete dev.confidence
+ const { confidence, ...$dev } = dev
+ dev = $dev
```
