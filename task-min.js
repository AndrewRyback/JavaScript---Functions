


// Task 1



const greet = function () {
  console.log("Привіт!");
};


greet();


const greet = function sayHello() {
  console.log("Привіт!");
};


greet();



function greet() {
    console.log("Привіт!");
}


greet();



const greet = () => {
    console.log("Привіт!");
};


const greetName = (name) => {
    console.log(`Привіт, ${name}!`);
};


const greetNameShort = name => {
    console.log(`Привіт, ${name}!`);
};


const add = (a, b) => a + b;


greet();
greetName("Олександр");
console.log(add(2, 3));


// Task 2

function countArguments() {
    console.log(`Кількість переданих аргументів: ${arguments.length}`);
}


countArguments(1, 2, 3);       
countArguments("a", "b", "c"); 
countArguments();              

// Task 3
function compareNumbers(num1, num2) {
    if (num1 < num2) {
        return -1;
    } else if (num1 > num2) {
        return 1;
    } else {
        return 0;
    }
}


console.log(compareNumbers(5, 10));  
console.log(compareNumbers(15, 10)); 
console.log(compareNumbers(10, 10)); 


// Task 4

function factorial(n) {
   
    if (n < 0) {
        return "Факторіал не визначений для від'ємних чисел.";
    }
    
    
    if (n === 0 || n === 1) {
        return 1;
    }
    
    
    return n * factorial(n - 1);
}


console.log(factorial(5)); 
console.log(factorial(0)); 
console.log(factorial(7)); 


// Task 5

function combineDigits(digit1, digit2, digit3) {
    let number = parseInt(`${digit1}${digit2}${digit3}`);
    return number;
}


console.log(combineDigits(1, 4, 9)); 

//Task 6

function calculateArea(length, width) {
  
    if (width === undefined) {
        return length * length;
    }
    
    return length * width;
}


console.log(calculateArea(5, 10)); 
console.log(calculateArea(4));   
