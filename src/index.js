/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */

/*function arrMulty(value) {
    if (typeof(value) == "number") {
        return value * 2;

    }
    return false;
}

var testArr = [1, 2, 3, 4, 5, 6];*/

function map(array, fn) {
    var new_array = [];
    for (let i = 0; i < array.length; i++) {
        var x = fn(array[i], i, array);
        new_array.push(x);
    }
    return new_array;
}

/*
var a = ['2','1', 'yuio', '5'];

var b = [];

for (var i = 0; i < a.length; i++) {
    b.push(
        parseInt(a[i])
    )
}*/



    /*
    var new_array = Array(array.length);
    for (let i = 0; i < array.length; i++) {
        new_array[i] = fn(array[i], i, array);
    }
    return new_array;
    */

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */

function reduce(array, fn, initial) {
    var accumulator, start_index;
    if (arguments.length < 3) {
        // initial не передали.
        accumulator = array[0];
        start_index = 1;
    } else {
        // initial передали.
        accumulator = initial;
        start_index = 0;
    }

    for (var i = start_index; i < array.length; i++) {
        accumulator = fn(accumulator, array[i], i, array);
    }
    return accumulator;
}

/*function sum(a, b) {
    return a + b;
}

var arr = [1, 5, 7];

var reduce_result = reduce(arr, sum);*/

// var array = [1, 2, 3, 4];
//
// var sum = 0;
// for (var i = 0; i < array.length; i++) {
//     sum += array[i];
// }
//



/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    var array = [];
    for (var key in obj) {
        array.push(key.toUpperCase());
    }
    return array;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
    var new_arr = [];

    if (from === undefined) {
        from = 0;
    }

    if (to === undefined) {
        to = array.length;
    } else if (to > array.length) {
        to = array.length;
    }

    if (from < 0) {
        from = array.length + from;
        if (from < 0) {
            from = 0;
        }
    }

    if (to < 0) {
        to = array.length + to;
    }

    for (var i = from; i < to; i++) {
        new_arr.push(array[i]);
    }
    return new_arr;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
