/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n.
 * Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
*/

/* function checkMultiplicity(num, count) {
    if (num % 10 === 0) {
        count++;

        checkMultiplicity(num / 10, count);
    } else return;   
}
 */
function countZeros(n) {
    // Напишите код здесь
    
    let result = 0;
    
    for (let i = 1; i <= n; i++) {
        let lastCompare;

        while (lastCompare !== -1) {
            lastCompare = String(i).indexOf('0', lastCompare + 1);
            if (lastCompare !== -1) result++;
        }
    } 

    return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
