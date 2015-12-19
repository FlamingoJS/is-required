# isset
Determine if a variable is set and is not NULL

## Install
```
$ npm install --save isset
```

## Usage
```js
const isset = require('isset');

console.log(isset('hello'));
//=> true

console.log(isset());
//=> { 'module': 'isset', 'message': 'This field is required.' }
```

## License
MIT © [Bruno Queiros](https://github.com/brunoqueiros)
