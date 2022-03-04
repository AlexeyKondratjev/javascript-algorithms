/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    // Напишите код здесь
    let strResult = '';
    let newWordBegin = true;

    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] !== " " && newWordBegin) {
            strResult += str[i].toUpperCase(); 
            newWordBegin = false; 
        } else if (str[i] === " ") {
            strResult += str[i];
            newWordBegin = true; 
        } else {
            strResult += str[i];
        }
    };

    return strResult;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"