/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function isPrime(n) {
    if (n <= 1) return false;

    let dividerCount = 0;
  
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        dividerCount++; 
      }
    }
    
    return dividerCount === 2; 
}

function primes(num) {
    // Напишите код здесь
    const resultArr = [];

    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            resultArr.push(i);
        }        
    }
   
    return resultArr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]