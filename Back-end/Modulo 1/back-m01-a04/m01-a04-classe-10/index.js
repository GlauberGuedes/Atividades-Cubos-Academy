const original = [1, 4, 12, 21, 53, 88, 112];
let array = [];
    for(let i = 0; i < original.length; i++) {
    const par = original[i] % 2;
    if(par === 0) {
        array.push(original[i]);
    }
}
console.log(array)
