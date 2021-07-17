# parcel-plugin-marked-prismjs

Parcel plugin for easily integrating with prismjs plugins by custom marked renderer, feel free to fork this repository and make your own renderer for prismjs.

## How to use

```
npm i -D parcel-bundler-marked-prismjs
```

## Features

### 0. match brackets

support vscode extension `Bracket Pair Colorizer 2` like rainbow highlight

<br>

### 1. heading anchors

`before`

```md
## Subtitle With Anchor
```

`after`

```html
<h2>
  <a
    name="subtitle-with-anchor"
    class="anchor"
    href="#subtitle-with-anchor"
  ></a>
  Subtitle With Anchor
</h2>
```

<br>

### 2. line highlight

use `{}` for supporting code editor syntax highlight

`before`

````md
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
````

`after`

<image src="https://user-images.githubusercontent.com/35368511/126040055-4c492e10-8118-45b9-89b8-8a3fb4af76a4.png" alt="line highlight" width="450"></image>

<br>

### 3. diff

`before`

````md
```diff-js
- delete dev.confidence
+ const { confidence, ...$dev } = dev
+ dev = $dev
```
````

`after`

<image src="https://user-images.githubusercontent.com/35368511/126040039-3958cb17-9ece-4b2b-9769-bc80e614d09f.png" alt="diff" width="450"></image>

<br>

Besides, codespan ought to be styled by class `codespan`.
