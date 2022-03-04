/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

function arrIsContainElement(arr, element) {
    const result = arr.some((item) => {
        return item === element;
    });

    return result;
}

function intersection(arr1, arr2) {
    // Напишите код здесь
    const arrResult = [];

    arr1.forEach((item) => {
        if (arrIsContainElement(arr2, item)) {
            if (!arrIsContainElement(arrResult, item)) {
                arrResult.push(item);
            }
        }
    });

    return arrResult;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []