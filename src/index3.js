function f1 (fn) {
    var r = fn();
    console.log('Результат работы:', r);
}

function f2 () {
    return 10 + 10;
}

f1(f2);


function f1 () {
    var r = f2();
    console.log('Результат работы:', r);
}

function f2 () {
    return 10 + 10;
}

f1();

