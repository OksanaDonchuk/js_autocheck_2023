// Task 1
// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент,
// значення якого - це парне число, додаючи до нього значення параметра value.
// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers,
// а створювала, наповнювала і повертала новий масив з оновленими значеннями.

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newNumbers = [];
//   numbers.forEach((element) => {
//     if (element % 2 === 0) {
//       newNumbers.push(element + value);
//     } else {
//       newNumbers.push(element);
//     }
//   });
//   return newNumbers;
//   // Change code above this line
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10)); // [1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // [12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100)); // [17, 124, 168, 31, 142]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // [144, 13, 81, 192, 136, 154]

//-------------------------------------------------------------------------------------------------------------//

// Task 2
// Доповни код таким чином, щоб у змінній planetsLengths вийшов масив довжин назв планет. Обов'язково використовуй метод map().

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((planet) => planet.length);

// console.log(planetsLengths); // [5, 4, 5, 7]

//-------------------------------------------------------------------------------------------------------------//

// Task 3
// Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв книг (властивість title) з усіх об'єктів масиву books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map((book) => book.title);

// console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]

//-------------------------------------------------------------------------------------------------------------//

// Task 4
// Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив усіх жанрів книг (властивість genres) з масиву книг books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap((book) => book.genres);

// console.log(genres); // [ "adventure", "history", "fiction", "horror", "mysticism" ]

//-------------------------------------------------------------------------------------------------------------//

// Task 5
// Доповни функцію getUserNames(users) таким чином, щоб вона повертала масив імен користувачів (властивість name) з масиву об'єктів в параметрі users.

// const getUserNames = (users) => {
//   return users.map((user) => user.name);
// };

//-------------------------------------------------------------------------------------------------------------//

// Task 6
// Доповни функцію getUserEmails(users) таким чином, щоб вона повертала масив поштових адрес користувачів (властивість email) з масиву об'єктів в параметрі users.

// const getUserEmails = (users) => {
//   return users.map((user) => user.email);
// };

//-------------------------------------------------------------------------------------------------------------//

// Task 7
// Доповни код таким чином, щоб у змінній evenNumbers утворився масив парних чисел з масиву numbers,
// а в змінній oddNumbers - масив непарних.Обов'язково використовуй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);

// console.log(numbers); // [17, 24, 82, 61, 36, 18, 47, 52, 73]
// console.log(evenNumbers); // [24, 82, 36, 18, 52]
// console.log(oddNumbers); // [17, 61, 47, 73]

//-------------------------------------------------------------------------------------------------------------//

// Task 8
// Доповни код таким чином, щоб у змінній allGenres був масив всіх жанрів книг (властивість genres) з масиву books,
// а у змінній uniqueGenres - масив унікальних жанрів, без повторень.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index
// );

// console.log(allGenres); // ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
// console.log(uniqueGenres); // ["adventure", "history", "fiction", "mysticism", "horror"]

//-------------------------------------------------------------------------------------------------------------//

// Task 9
// Використовуючи метод filter(), доповни код таким чином, щоб
// У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);

// console.log(AUTHOR); // "Bernard Cornwell"
// console.log(topRatedBooks); // 8
// console.log(booksByAuthor); // "Bernard Cornwell"

//-------------------------------------------------------------------------------------------------------------//

// Task 10
// Доповни функцію getUsersWithEyeColor(users, color) таким чином, щоб вона повертала масив користувачів,
// у яких колір очей(властивість eyeColor) збігається зі значенням параметра color.

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter((user) => user.eyeColor === color);
// };

//-------------------------------------------------------------------------------------------------------------//

// Task 11
// Доповни функцію getUsersWithAge(users, minAge, maxAge) таким чином, щоб вона повертала масив користувачів,
// вік яких(властивість age) потрапляє у проміжок від minAge до maxAge.

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter((user) => user.age > minAge && user.age < maxAge);
// };

//-------------------------------------------------------------------------------------------------------------//

// Task 12
// Доповни функцію getUsersWithFriend(users, friendName) таким чином, щоб вона повертала масив користувачів,
// у яких є один з ім'ям в параметрі friendName. Масив друзів користувача зберігається у властивості friends.

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(({ friends }) => friends.includes(friendName));
// };

//-------------------------------------------------------------------------------------------------------------//

// Task 13
// Доповни функцію getFriends(users) таким чином, щоб вона повертала масив друзів всіх користувачів (властивість friends).
// У декількох користувачів можуть бути однакові друзі, зроби так, щоб масив, що повертається, не містив повторень.

// const getFriends = (users) => {
//   return users
//     .flatMap((user) => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index);
// };

//-------------------------------------------------------------------------------------------------------------//

// Task 14
// Доповни функцію getActiveUsers(users) таким чином, щоб вона повертала масив активних користувачів, значення властивості isActive яких - true.

// const getActiveUsers = (users) => {
//   return users.filter((user) => user.isActive);
// };

//-------------------------------------------------------------------------------------------------------------//

// Task 15
// Доповни функцію getInactiveUsers(users) таким чином, щоб вона повертала масив неактивних користувачів, значення властивості isActive яких - false.

// const getInactiveUsers = (users) => {
//   return users.filter((user) => !user.isActive);
// };

//-------------------------------------------------------------------------------------------------------------//

// Task 16
// Використовуючи метод find(), доповни код таким чином, щоб:
// У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) збігається зі значенням змінної BOOK_TITLE.
// У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається зі значенням змінної AUTHOR.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);

// console.log(BOOK_TITLE); // "The Dream of a Ridiculous Man"
// console.log(AUTHOR); // "Robert Sheckley"
// console.log(bookWithTitle); // "The Dream of a Ridiculous Man"
// console.log(bookByAuthor); // "Robert Sheckley"

//-------------------------------------------------------------------------------------------------------------//

// Task 17
// Доповни функцію getUserWithEmail(users, email) таким чином, щоб вона повертала об'єкт користувача,
// пошта якого(властивість email) збігається зі значенням параметра email.

// const getUserWithEmail = (users, email) => {
//   return users.find((user) => user.email === email);
// };

//-------------------------------------------------------------------------------------------------------------//

// Task 18
// Використовуючи метод every(), доповни код таким чином, щоб:
// У змінній eachElementInFirstIsEven був результат перевірки всіх елементів масиву firstArray на парність.
// У змінній eachElementInFirstIsOdd був результат перевірки всіх елементів масиву firstArray на непарність.
// У змінній eachElementInSecondIsEven був результат перевірки всіх елементів масиву secondArray на парність.
// У змінній eachElementInSecondIsOdd був результат перевірки всіх елементів масиву secondArray на непарність.
// У змінній eachElementInThirdIsEven був результат перевірки всіх елементів масиву thirdArray на парність.
// У змінній eachElementInThirdIsOdd був результат перевірки всіх елементів масиву thirdArray на непарність.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);

// console.log(firstArray); // [26, 94, 36, 18]
// console.log(secondArray); // [17, 61, 23]
// console.log(thirdArray); // [17, 26, 94, 61, 36, 23, 18]
// console.log(eachElementInFirstIsEven); // true
// console.log(eachElementInFirstIsOdd); // false
// console.log(eachElementInSecondIsEven); // false
// console.log(eachElementInSecondIsOdd); // true
// console.log(eachElementInThirdIsEven); // false
// console.log(eachElementInThirdIsOdd); // false

//-------------------------------------------------------------------------------------------------------------//

// Task 19
// Доповни функцію isEveryUserActive(users) таким чином, щоб вона перевіряла,
// чи всі користувачі зараз активні(властивість isActive) і повертала true або false.

// const isEveryUserActive = (users) => {
//   return users.every((user) => user.isActive);
// };

//-------------------------------------------------------------------------------------------------------------//

// Task 20
// Використовуючи метод some(), доповни код таким чином, щоб:
// У змінній anyElementInFirstIsEven був результат перевірки наявності парних елементів в масиві firstArray.
// У змінній anyElementInFirstIsOdd був результат перевірки наявності непарних елементів в масиві firstArray.
// У змінній anyElementInSecondIsEven був результат перевірки наявності парних елементів в масиві secondArray.
// У змінній anyElementInSecondIsOdd був результат перевірки наявності непарних елементів в масиві secondArray.
// У змінній anyElementInThirdIsEven був результат перевірки наявності парних елементів в масиві thirdArray.
// У змінній anyElementInThirdIsOdd був результат перевірки наявності непарних елементів в масиві thirdArray.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some((value) => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((value) => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((value) => value % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((value) => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 !== 0);

// console.log(firstArray); // [26, 94, 36, 18]
// console.log(secondArray); // [17, 61, 23]
// console.log(thirdArray); // [17, 26, 94, 61, 36, 23, 18]
// console.log(anyElementInFirstIsEven); // true
// console.log(anyElementInFirstIsOdd); // false
// console.log(anyElementInSecondIsEven); // false
// console.log(anyElementInSecondIsOdd); // true
// console.log(anyElementInThirdIsEven); // true
// console.log(anyElementInThirdIsOdd); // true

//-------------------------------------------------------------------------------------------------------------//

// Task 21
// Доповни функцію isAnyUserActive(users) таким чином, щоб вона перевіряла наявність активних користувачів (властивість isActive) і повертала true або false.

// const isAnyUserActive = (users) => {
//   return users.some((user) => user.isActive);
// };

//-------------------------------------------------------------------------------------------------------------//

// Task 22
// Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх. Доповни код таким чином,
// щоб у змінній totalPlayTime вийшло загальний ігровий час з масиву playtimes.

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((acc, value) => {
//   return acc + value;
// }, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(playtimes); // [1270, 468, 710, 244]
// console.log(totalPlayTime); // 2692
// console.log(averagePlayTime); // 673

//-------------------------------------------------------------------------------------------------------------//

// Task 23
// Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця,
// і отримати загальну суму цих значень часу.Розрахувати час для кожного з гравців можна, розділивши його час(властивість playtime)
// на кількість ігор(властивість gamesPlayed).

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   return acc + player.playtime / player.gamesPlayed;
// }, 0);

// console.log(totalAveragePlaytimePerGame); // 1023

//-------------------------------------------------------------------------------------------------------------//

// Task 24
// Доповни функцію calculateTotalBalance(users) таким чином, щоб вона рахувала
// і повертала суму всіх коштів(властивість balance), які зберігають користувачі з масиву users.

// const calculateTotalBalance = (users) => {
//   return users.reduce((ass, user) => ass + user.balance, 0);
// };

//-------------------------------------------------------------------------------------------------------------//

// Task 25
// Доповни функцію getTotalFriendCount(users) таким чином, щоб вона рахувала і повертала загальну кількість друзів
// (властивість friends) усіх користувачів з масиву users.

// const getTotalFriendCount = (users) => {
//   return users.reduce((acc, user) => acc + user.friends.length, 0);
// };

//-------------------------------------------------------------------------------------------------------------//

// Task 26
// Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням,
// а у змінній alphabeticalAuthors - копія масиву імен авторів authors, відсортована за алфавітом.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// console.log(releaseDates); // [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// console.log(authors); // ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"]
// console.log(ascendingReleaseDates); // [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// console.log(alphabeticalAuthors); // ["Bernard Cornwell", "Tanith Lee", "Robert Sheckley", "Fyodor Dostoevsky"]

//-------------------------------------------------------------------------------------------------------------//

// Task 27
// Онлайн бібіліотеці необхідно відображати книги, відсортовані за датою видання, за її зростанням або спаданням.
// Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням,
// а у змінній descendingReleaseDates - копія, відсортована за спаданням.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(releaseDates); // [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// console.log(ascendingReleaseDates); // [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// console.log(descendingReleaseDates); // [2016, 2012, 2008, 1997, 1984, 1973, 1967]

//-------------------------------------------------------------------------------------------------------------//

// Task 28
// Онлайн бібіліотеці необхідно відображати книги, відсортовані за автором, в алфавітному і зворотному алфавітному порядку.
// Доповни код таким чином, щоб у змінній authorsInAlphabetOrder вийшла копія масиву authors, відсортована за алфавітом,
// а у змінній authorsInReversedOrder - копія, відсортована у зворотному алфавітному порядку.

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// console.log(authors); // ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky", "Howard Lovecraft"]
// console.log(authorsInAlphabetOrder); // ["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]
// console.log(authorsInReversedOrder); // ["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Fyodor Dostoevsky", "Bernard Cornwell"]

//-------------------------------------------------------------------------------------------------------------//

// Task 29
// Доповни код таким чином, щоб:
// У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
//   firstBook.author.localeCompare(secondBook.author)
// );

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
//   secondBook.author.localeCompare(firstBook.author)
// );

// const sortedByAscendingRating = [...books].sort(
//   (firstBook, secondBook) => firstBook.rating - secondBook.rating
// );

// const sortedByDescentingRating = [...books].sort(
//   (firstBook, secondBook) => secondBook.rating - firstBook.rating
// );

//-------------------------------------------------------------------------------------------------------------//

// Task 30
// Доповни функцію sortByAscendingBalance(users) таким чином, щоб вона повертала масив користувачів,
// відсортований за зростанням їх балансу(властивість balance).

// const sortByAscendingBalance = (users) => {
//   return [...users].sort((a, b) => a.balance - b.balance);
// };

//-------------------------------------------------------------------------------------------------------------//

// Task 31
// Доповни функцію sortByDescendingFriendCount(users) таким чином, щоб вона повертала масив користувачів,
// відсортований за спаданням кількості їхніх друзів(властивість friends).

// const sortByDescendingFriendCount = (users) => {
//   return [...users].sort((a, b) => b.friends.length - a.friends.length);
// };

//-------------------------------------------------------------------------------------------------------------//

// Task 32
// Доповни функцію sortByName(users) таким чином, щоб вона повертала масив користувачів, відсортований за їх ім'ям (властивість name) в алфавітному порядку.

// const sortByName = (users) => {
//   return [...users].sort((a, b) => a.name.localeCompare(b.name));
// };

//-------------------------------------------------------------------------------------------------------------//

// Task 33
// Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort((a, b) => a.localeCompare(b));

// console.log(MIN_BOOK_RATING); // 8
// console.log(names); // ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]

//-------------------------------------------------------------------------------------------------------------//

// Task 34
// Доповни функцію getNamesSortedByFriendCount(users) таким чином, щоб вона повертала масив імен користувачів,
// відсортований за зростанням кількості їхніх друзів(властивість friends).

// const getNamesSortedByFriendCount = (users) => {
//   return [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map((user) => user.name);
// };

//-------------------------------------------------------------------------------------------------------------//

// Task 35
// Доповни функцію getSortedFriends(users) таким чином, щоб вона повертала масив унікальних імен друзів (властивість friends), відсортований за алфавітом.

// const getSortedFriends = (users) => {
//   return users
//     .flatMap((user) => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//     .sort((a, b) => a.localeCompare(b));
// };

//-------------------------------------------------------------------------------------------------------------//

// Task 36
// Доповни функцію getTotalBalanceByGender(users, gender) таким чином, щоб вона повертала загальний баланс користувачів (властивість balance),
// стать яких(властивість gender) збігається зі значенням параметра gender.

// const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter((user) => user.gender === gender)
//     .reduce((ass, user) => ass + user.balance, 0);
// };
