# parcel-plugin-marked-prismjs [![Build Status](https://travis-ci.com/hemmingson/parcel-plugin-marked-prismjs.svg?branch=main)](https://travis-ci.com/hemmingson/parcel-plugin-marked-prismjs)

Parcel plugin for easily integrating with prismjs plugins by custom marked renderer, feel free to fork this repository and make your own renderer for prismjs.

## Installation

```bash
npm i parcel-plugin-marked-prismjs -D

# via yarn
yarn add parcel-plugin-marked-prismjs --dev
```

## Features

### 0. match braces

support vscode extension `Bracket Pair Colorizer` like rainbow highlight

### 1. heading anchors

input:

```md
## Subtitle With Anchor
```

output:

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

### 2. line highlight

use `{}` for supporting code editor syntax highlight

input:

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

output:

![line highlight](example/img/line-highlight.png)

### 3. diff

input:

````md
```diff-js
- delete dev.confidence
+ const { confidence, ...$dev } = dev
+ dev = $dev
```
````

output:

![diff](example/img/diff.png)

Besides, codespan ought to be styled by class `codespan`.

## Test coverage

```powershell
--------------|---------|----------|---------|---------|-------------------
File          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------------|---------|----------|---------|---------|-------------------
All files     |     100 |     87.5 |     100 |     100 |
 __test__     |     100 |      100 |     100 |     100 |
  index.js    |     100 |      100 |     100 |     100 |
 src          |     100 |     87.5 |     100 |     100 |
  helper.js   |     100 |      100 |     100 |     100 |
  renderer.js |     100 |    83.33 |     100 |     100 | 14
--------------|---------|----------|---------|---------|-------------------
```
