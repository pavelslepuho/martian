/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let promoAdv = document.querySelector('.promo__adv'),
    genre = document.querySelector('.promo__genre'),
    bcgnd = document.querySelector('.promo__bg'),
    filmList = document.querySelector('.promo__interactive-list');

promoAdv.style.display = 'none';

genre.textContent = 'драма';

bcgnd.style.backgroundImage  = "url('../img/bg.jpg')";

movieDB.movies.sort();

// filmList.forEach((item, i) => {
//     item.textContent = `${i + 1}) ${movieDB.movies[i]}`;
// });

let {movies} = movieDB;

function filmParse() {
    filmList.innerHTML = ``;

    movies.forEach((item, i) => {
        filmList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}) ${item}  
            <div class="delete"></div>
        </li>`;
    });
}

filmParse();

// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.

// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

// 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
// "Добавляем любимый фильм"

// 5) Фильмы должны быть отсортированы по алфавиту */

let input = document.querySelector('.adding__input'),
    submit = document.querySelector('.add'),
    favourite = document.querySelector('[type=checkbox]'),
    deleteFilm = document.querySelectorAll('.delete');

submit.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        if (input.value.length < 21) {
            movies.push(input.value);
        } else {
            input.value = input.value.slice(0, 21) + '...';
            movies.push(input.value);
        }

        if (favourite.checked === true) {
            console.log('Добавляем любимый фильм');
        }

        movieDB.movies.sort();
        filmParse();
        e.target.reset();
    }
});

function delFilm() {
    deleteFilm = document.querySelectorAll('.delete');
    deleteFilm.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            item.parentElement.remove();
            movies.splice(i, 1);
            filmParse();
            console.log('!!!!');
            delFilm();
        });
    });
}

delFilm();




