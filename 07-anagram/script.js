/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    // Напишите код здесь
 
    if ((str1.length !== str2.length) || (str1.toLowerCase() === str2.toLowerCase())) {
        return false;
    } else {
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();

        for (let i = 0; i < str1.length; i++) {
            if (str2.indexOf(str1[i]) !== -1) {
                str2 = str2.replace(str1[i], ''); 
            } else return false;            
        } 

        return true;
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false