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

filmList.innerHTML = ``;

movies.forEach((item, i) => {
    filmList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}) ${item}  
        <div class="delete"></div>
    </li>`;
});




