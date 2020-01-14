# @test-easy/babel-preset

Automatically load the css for the @test-easy design system.

## Installation

```sh
npm i --save-dev @test-easy/babel-preset
# or
yarn add -D @test-easy/babel-preset
```

## Usage

.babelrc:

```json
{
  "presets": ["@test-easy/babel-preset"]
}
```

## Example

Input:

```js
import Card from '@test-easy/card';
```

Output:

```js
import Card from '@test-easy/card';
import '@test-easy/card/dist/main.css';
```
