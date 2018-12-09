/*
 ДЗ 7 - Создать редактор cookie с возможностью фильтрации

 7.1: На странице должна быть таблица со списком имеющихся cookie. Таблица должна иметь следующие столбцы:
   - имя
   - значение
   - удалить (при нажатии на кнопку, выбранная cookie удаляется из браузера и таблицы)

 7.2: На странице должна быть форма для добавления новой cookie. Форма должна содержать следующие поля:
   - имя
   - значение
   - добавить (при нажатии на кнопку, в браузер и таблицу добавляется новая cookie с указанным именем и значением)

 Если добавляется cookie с именем уже существующией cookie, то ее значение в браузере и таблице должно быть обновлено

 7.3: На странице должно быть текстовое поле для фильтрации cookie
 В таблице должны быть только те cookie, в имени или значении которых, хотя бы частично, есть введенное значение
 Если в поле фильтра пусто, то должны выводиться все доступные cookie
 Если дабавляемая cookie не соответсвуте фильтру, то она должна быть добавлена только в браузер, но не в таблицу
 Если добавляется cookie, с именем уже существующией cookie и ее новое значение не соответствует фильтру,
 то ее значение должно быть обновлено в браузере, а из таблицы cookie должна быть удалена

 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
const homeworkContainer = document.querySelector('#homework-container');
// текстовое поле для фильтрации cookie
const filterNameInput = homeworkContainer.querySelector('#filter-name-input');
// текстовое поле с именем cookie
const addNameInput = homeworkContainer.querySelector('#add-name-input');
// текстовое поле со значением cookie
const addValueInput = homeworkContainer.querySelector('#add-value-input');
// кнопка "добавить cookie"
const addButton = homeworkContainer.querySelector('#add-button');
// таблица со списком cookie
const listTable = homeworkContainer.querySelector('#list-table tbody');

filterNameInput.addEventListener('keyup', function() {
    // здесь можно обработать нажатия на клавиши внутри текстового поля для фильтрации cookie
});

addButton.addEventListener('click', () => {
    // здесь можно обработать нажатие на кнопку "добавить cookie"
});


function isMatching (full, chunk) {
    return full.toLowerCase().indexOf(chunk.toLowerCase()) > -1;
}

function getCookies () {
    let cookieArr = document.cookie.split('; ');

    return cookieArr.reduce((prev, elem) => {
        let [name, value] = elem.split('=');

        if (name) {
            prev.push({ name, value });
        }

        return prev;
    }, []);
}

function getFilteredCookies (value) {
    let cookies = getCookies();

    return cookies.filter(cookie =>
        isMatching(cookie.name, value) || isMatching(cookie.value, value));
}

function addCookie (name, value) {
    document.cookie = `${name}=${value}`;
}

function deleteCookie (name) {
    let date = new Date(0);

    document.cookie = `${name}=;expires=${date.toUTCString()}`;
}

function renderCookies (cookies) {
    listTable.innerHTML = '';

    cookies.forEach(cookie => {
        let tr = document.createElement('tr');
        let nameTD = document.createElement('td');
        let valueTD = document.createElement('td');
        let actionsTD = document.createElement('td');
        let btn = document.createElement('button');

        nameTD.textContent = cookie.name;
        valueTD.textContent = cookie.value;
        btn.textContent = 'Удалить';
        btn.setAttribute('data-name', cookie.name);
        actionsTD.appendChild(btn);
        tr.appendChild(nameTD);
        tr.appendChild(valueTD);
        tr.appendChild(actionsTD);
        listTable.appendChild(tr);
    });
}

listTable.addEventListener('click', function (e) {
    if (e.target.tagName !== 'BUTTON') return;

    let name = e.target.getAttribute('data-name');

    deleteCookie(name);
    e.target.closest('tr').remove();
});

filterNameInput.addEventListener('keyup', function() {
    let filterValue = filterNameInput.value;
    let cookies = [];

    if (!filterValue) {
        cookies = getCookies();
    } else {
        cookies = getFilteredCookies(filterValue);
    }

    renderCookies(cookies)
});

addButton.addEventListener('click', function () {
    let name = addNameInput.value;
    let value = addValueInput.value;
    let filterValue = filterNameInput.value;
    let cookies = [];

    addCookie(name, value);

    if (!filterValue) {
        cookies = getCookies();
    } else {
        cookies = getFilteredCookies(filterValue);
    }

    renderCookies(cookies);

    addNameInput.value = '';
    addValueInput.value = '';
});