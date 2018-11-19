var a = [
    {name: 'Москва'},
    {name: 'Амстердам'},
    {name: 'Мадрид'},
    {name: 'Ростов'},
    {name: 'Астрахань'}
];
a.sort(function (a, b) {
    if (a.name > b.name){
        return 1;
    }
});
console.log(a);