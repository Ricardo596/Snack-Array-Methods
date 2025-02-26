const nums = [2, 8, 4, 7, 12, 87];

const even = [];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2===0)
        even.push(nums[i])
    console.log(even)
}



// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]