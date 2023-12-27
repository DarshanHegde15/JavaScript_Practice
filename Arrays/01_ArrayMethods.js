let arr=new Array(1,2,3,4,5);
console.log(`${arr}\n`);

arr.push(6);
console.log(`${arr}\n`);

console.log(arr.slice(0,3));

arr.unshift(0);
console.log(`\n${arr}\n`);

let str=arr.join();
console.log(typeof(str)+"\n");

arr.shift();
console.log(`${arr}\n`);

console.log(`${arr.includes(3)}\n${arr.includes(10)}\n`);

console.log(`${arr.indexOf(3)}\n${arr.indexOf(9)}\n`);

console.log(arr.splice(1,3));
console.log(`\n${arr}`);