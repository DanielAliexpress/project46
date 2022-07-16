"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

if (numberOfFilms < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    alert("Вы классический зритель");
} else if (numberOfFilms > 50) {
    alert ("Вы продвинутый киноман");
} else {
    alert ("Произошла ошибка");
}

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres: {},
    privat : false,
};

for (let i = 0; i < 3; i++) {
    const a = prompt("Один из последних просмотренных фильмов", ""),
          b = prompt("На сколько оцените его", "");
    if (a !== null && b !==null && a !== '' && b !== '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
    } else {
    console.log('error');
    i--;
    }
}


console.log(personalMovieDB);



