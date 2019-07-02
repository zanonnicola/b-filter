# B-filters

Javascript implementation of [Bloom Filters](http://en.wikipedia.org/wiki/Bloom_filter)

> A Bloom filter is a space-efficient probabilistic data structure, conceived by Burton Howard Bloom in 1970, that is used to test whether an element is a member of a set. False positive matches are possible, but false negatives are not. Elements can only be be added to the set.

## :package: Installation

```bash
npm i @zanonnicola/b-filter
```

## :rocket: Load

```js
// using es modules
import bfilter from '@zanonnicola/b-filter';
const BloomFilter = bFilter.default;

// common.js
const bfilter = require('@zanonnicola/b-filter');
const BloomFilter = bFilter.default;

// UMD
const bfilter = bfilter.default;
```

## :bulb: Usage

```js
//...n numbers of items
const data = ['word 1', 'my second word 2', 'random chars 3'];
const filter = new BloomFilter(data.length);

for (const item in data) {
  filter.add(item);
}

filter.test('word 1'); // true (probably)
filter.test('random'); // false
```

## API

#### `BloomFilter(size: number, falsePositiveRate: number);` Default `falsePositiveRate` 0.005

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
