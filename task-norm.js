//Task 1 

function isPerfectNumber(num) {
   
    if (num <= 1) {
        return false;
    }

    let sum = 0;

   
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

   
    return sum === num;
}


console.log(isPerfectNumber(6));  
console.log(isPerfectNumber(28)); 
console.log(isPerfectNumber(12)); 
console.log(isPerfectNumber(496)); 


//Task 2 



function isPerfectNumber(num) {
    if (num <= 1) {
        return false;
    }

    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum === num;
}


function findPerfectNumbersInRange(min, max) {
    let perfectNumbers = [];

    for (let i = min; i <= max; i++) {
        if (isPerfectNumber(i)) {
            perfectNumbers.push(i);
        }
    }

    return perfectNumbers;
}


console.log(findPerfectNumbersInRange(1, 10000));
console.log(findPerfectNumbersInRange(1, 500));   
console.log(findPerfectNumbersInRange(500, 1000));
