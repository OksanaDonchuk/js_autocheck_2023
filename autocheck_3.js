// Task 1
// Запиши умову в інструкції if таким чином, щоб функція працювала правильно.

// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// console.log(checkAge(20)); // "You are an adult"
// console.log(checkAge(8)); // "You are a minor"
// console.log(checkAge(14)); // "You are a minor"
// console.log(checkAge(38)); // "You are an adult"

//-------------------------------------------------------------------------------------------------------------//

// Task 2
// Функція checkPassword отримує пароль користувача у параметр password, перевіряє його на збіг з паролем адміністратора
// у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння.
// Виконай рефакторинг коду функції checkPassword, використовуючи патерн «раннє повернення»:
// видали змінну message
// видали else
// код повинен працювати так само, як і до оптимізації

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }

//   return "Access denied, wrong password!";
//   // Change code above this line
// }

// console.log(checkPassword("mangohackzor")); // "Access denied, wrong password!"
// console.log(checkPassword("polyhax")); // "Access denied, wrong password!"
// console.log(checkPassword("jqueryismyjam")); // "Welcome!"

//-------------------------------------------------------------------------------------------------------------//

// Task 3
// Функція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат.
// Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Виконай рефакторинг коду функції checkStorage, використовуючи патерн «раннє повернення».

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";
//   // Change code above this line
// }

// console.log(checkStorage(100, 50)); // "The order is accepted, our manager will contact you"
// console.log(checkStorage(100, 130)); // "Your order is too large, not enough goods in stock!"
// console.log(checkStorage(70, 0)); // "Your order is empty!"
// console.log(checkStorage(200, 20)); // "The order is accepted, our manager will contact you"
// console.log(checkStorage(200, 250)); // "Your order is too large, not enough goods in stock!"
// console.log(checkStorage(150, 0)); // "Your order is empty!"

//-------------------------------------------------------------------------------------------------------------//

// Task 4
// Оголоси змінну fruits і присвой їй масив фруктів - рядків "apple", "plum", "pear" і "orange".

// const fruits = ["apple", "plum", "pear", "orange"];

// console.log(fruits); // ["apple", "plum", "pear", "orange"]

//-------------------------------------------------------------------------------------------------------------//

// Task 5
// Оголоси три змінні і присвой кожній з них значення, використовуючи нотацію квадратних дужок.
// Ім'я змінної	Значення змінної
// firstElement	перший елемент масиву
// secondElement	другий елемент масиву
// lastElement	останній елемент масиву

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// console.log(firstElement); // "apple"
// console.log(secondElement); // "plum"
// console.log(lastElement); // "orange"

//-------------------------------------------------------------------------------------------------------------//

// Task 6
// Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".

// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";

// console.log(fruits); // ["apple", "peach", "pear", "banana"]

//-------------------------------------------------------------------------------------------------------------//

// Task 7
// Оголоси змінну fruitsArrayLength і присвой їй довжину масиву fruits, використовуючи властивість length.

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength); // 4

//-------------------------------------------------------------------------------------------------------------//

// Task 8
// Оголоси дві зміні:
// Ім'я змінної	Очікуване значення
// lastElementIndex	Індекс останнього елемента масиву fruits через довжина_масиву - 1
// lastElement	Значення останнього елемента масиву

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex); // 3
// console.log(lastElement); // "banana"

//-------------------------------------------------------------------------------------------------------------//

// Task 9
// Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини.
// Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.

// function getExtremeElements(array) {
//   // Change code below this line
//   const newArray = [];
//   newArray.push(array[0]);

//   newArray.push(array[array.length - 1]);

//   return newArray;
//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5])); // [1, 5]
// console.log(getExtremeElements(["Earth", "Mars", "Venus"])); // ["Earth", "Venus"]
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"])); // ["apple", "banana"]

//-------------------------------------------------------------------------------------------------------------//

// Task 10
// Доповни код функції splitMessage(message, delimiter) таким чином, щоб вона повертала у змінній words
// результат поділу рядка message за роздільником delimiter - масив рядків.

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }

// console.log(splitMessage("Mango hurries to the train", " ")); // ["Mango", "hurries", "to", "the", "train"]
// console.log(splitMessage("Mango", "")); // ["M", "a", "n", "g", "o"]
// console.log(splitMessage("best_for_week", "_")); // ["best", "for", "week"]

//-------------------------------------------------------------------------------------------------------------//

// Task 11
// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.
// Оголошена функція calculateEngravingPrice(message, pricePerWord).Ця функція приймає рядок, що складається зі слів,
// розділених лише пробілами(параметр message) та ціну гравірування одного слова(параметр pricePerWord).
// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   const messageWord = message.split(" ");
//   const price = messageWord.length * pricePerWord;
//   return price;

//   // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10)); // 50
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20)); // 100
// console.log(calculateEngravingPrice("Web-development is creative work", 40)); // 160
// console.log(calculateEngravingPrice("Web-development is creative work", 20)); // 80

//-------------------------------------------------------------------------------------------------------------//

// Task 12
// Доповни код функції makeStringFromArray(array, delimiter) таким чином, щоб вона повертала у змінній string
// результат з'єднання елементів масиву array з роздільником delimiter - рядок.

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line

//   string = array.join(delimiter);

//   // Change code above this line
//   return string;
// }

// console.log(
//   makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
// ); // "Mango hurries to the train"
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], "")); // "Mango"
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_")); // "top_picks_for_you"

//-------------------------------------------------------------------------------------------------------------//

// Task 13
// Термін slug - це людино-зрозумілий унікальний ідентифікатор, який використовується у веб-розробці для створення читабельних URL-адрес.
// Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com / posts / 1q8fh74tx, можна зробити slug з назви статті.
// В результаті адреса буде приємнішою для сприйняття: mysite.com / posts / arrays -for-begginers.
// Увага
// Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.
// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.
// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире

// function slugify(title) {
//   // Change code below this line
//   const titleArray = title.toLowerCase().split(" ");
//   const slug = titleArray.join("-");
//   return slug;

//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

//-------------------------------------------------------------------------------------------------------------//

// Task 14
// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.
// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(fruits); // ["apple", "plum", "pear", "orange", "banana"]
// console.log(firstTwoEls); // ["apple", "plum"]
// console.log(nonExtremeEls); // ["plum", "pear", "orange"]
// console.log(lastThreeEls); // ["pear", "orange", "banana"]

//-------------------------------------------------------------------------------------------------------------//

// Task 15
// Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients.

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients);

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Peach", "Houston"]
// console.log(allClients); // ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]

//-------------------------------------------------------------------------------------------------------------//

// Task 16
// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами
// двох вихідних firstArray і secondArray.Параметр maxLength містить максимально допустиму довжину нового масиву.
// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів.
// В іншому випадку функція повинна повернути новий масив повністю.

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let newArray = firstArray.concat(secondArray);
//   if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
//   }

//   return newArray;

//   // Change code above this line
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
