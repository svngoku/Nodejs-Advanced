/* Persistent data structures with Mori */

const mori = require('mori')

let f = mori.vector(1,2);
let t = mori.conj(f,3)

console.log(t);
console.log(f);

