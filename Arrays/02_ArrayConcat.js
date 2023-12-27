const marvel_heros=["Thor","Iron Man","Spider Man"];
const dc_heros=["Wonder Woman","Super Man","Aqua Man"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
//console.log(marvel_heros[3][0]);

const new_heros_array=marvel_heros.concat(dc_heros);
console.log(new_heros_array+"\n");

const another_heros_array=[...marvel_heros,...dc_heros];
console.log(`${another_heros_array}\n`);

const nested_array=[1,2,3,[4,5,6],[7,[8,9]]];
console.log(nested_array);
const flat_array=nested_array.flat(Infinity);
console.log(flat_array);