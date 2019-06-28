# B-filters

Javascript implementation of [Bloom Filters](http://en.wikipedia.org/wiki/Bloom_filter)

> A Bloom filter is a space-efficient probabilistic data structure, conceived by Burton Howard Bloom in 1970, that is used to test whether an element is a member of a set. False positive matches are possible, but false negatives are not. Elements can only be be added to the set.

## :package: Installation

```bash
npm install b-filters --save
```

## :rocket: Load

```js
// using es modules
import BloomFilter from 'b-filters'

// common.js
const BloomFilter = require('b-filters')
```

## :bulb: Usage

```js

//...n numbers of items
const data = ['word 1', 'word 2', 'word 3'];
const filter = new BloomFilter(data.length);

for(item in data) {
    filter.add(item);
}

filter.test('word 2') // true (probably)
filter.test('random') // false

```

## API

#### `BloomFilter(size: number, falsePositiveRate: number);` Default `falsePositiveRate` 0.05

`BloomFilter.test(item: string)` returns `boolean`

## Local Development

Below is a list of commands you will probably find useful.

### `npm start` or `yarn start`

Runs the project in development/watch mode. Your project will be rebuilt upon changes. TSDX has a special logger for you convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab.

### `npm run build` or `yarn build`

Bundles the package to the `dist` folder.

### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.

This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).