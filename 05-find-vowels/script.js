/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 * 
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
*/

function findVowels(str) {
    // Напишите код здесь
    const vowels = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];

    let strLowerCase = str.toLowerCase();
    let vowelsCount = 0;

    vowels.forEach((item) => {
        let lastCompare;

        while (lastCompare !== -1) {
            lastCompare = strLowerCase.indexOf(item, lastCompare + 1);
            if (lastCompare !== -1) vowelsCount++;
        }
    });
    
    return vowelsCount; 
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels('здравствуй')); // 2
console.log(findVowels('привет')); // 2
console.log(findVowels('хеллоу')); // 3