import {
  deepEqual,
  deepCopy,
  getAllObjectKeys
} from './index.js';

console.log(deepEqual({1: 'a', 2: {3: 'c'}, 5: 'e'}, {1: 'a', 2: {3: 'c'}, 5: 'e'}));

console.log(deepCopy(['a', 'b', ['c','d','e'], 'j']))
console.log(deepCopy({1: 'a', 2: ['a','b','c'], 3: 'd'}))
console.log(deepCopy({1: 'a', 2: 'c', 3: 'd'}))

let obj = {a: 1, b: {c: 2, d: 3}, e: 4};
let copy = deepCopy(obj);
copy.b.c = 'baaaa';
console.log(obj, copy);

console.log(getAllObjectKeys({ name: { bohdan: { name: 'test' } } })); //['name','bohdan']