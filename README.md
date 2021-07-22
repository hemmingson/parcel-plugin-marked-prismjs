# parcel-plugin-marked-prismjs [![Build Status](https://travis-ci.com/hemmingson/parcel-plugin-marked-prismjs.svg?branch=main)](https://travis-ci.com/hemmingson/parcel-plugin-marked-prismjs) [![codecov](https://codecov.io/gh/hemmingson/parcel-plugin-marked-prismjs/branch/main/graph/badge.svg?token=XIK6WMEIBD)](https://codecov.io/gh/hemmingson/parcel-plugin-marked-prismjs)

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

