// Task 1
// Надійшов триденний прогноз максимальних температур і ми рахуємо середню температуру за три дні (meanTemperature).
// Заміни оголошення змінних yesterday, today і tomorrow однією операцією деструктуризації властивостей об'єкта highTemperatures.

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(yesterday); // 28
// console.log(today); // 26
// console.log(tomorrow); // 33
// console.log(meanTemperature); // 29

//-------------------------------------------------------------------------------------------------------------//

// Task 2
// У прогнозі максимальних температур також може бути необов'язкова властивість icon - іконка погоди. Заміни оголошення змінних yesterday,
// today, tomorrow і icon однією операцією деструктуризації властивостей об'єкта highTemperatures.
// Задай значення за замовчуванням для icon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(yesterday); // 28
// console.log(today); // 26
// console.log(tomorrow); // 33
// console.log(icon); // "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"

//-------------------------------------------------------------------------------------------------------------//

// Task 3
// Заміни оголошення змінних highYesterday, highToday, highTomorrow і highIcon однією операцією деструктуризації
// властивостей об'єкта highTemperatures. Задай значення за замовчуванням для highIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(highYesterday); // 28
// console.log(highToday); // 26
// console.log(highTomorrow); // 33
// console.log(highIcon); // "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"

//-------------------------------------------------------------------------------------------------------------//

// Task 4
// Виконай рефакторинг циклу for...of таким чином, щоб в ньому використовувалася деструктуризація об'єкта.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors); // ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// console.log(rgbColors); // ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

//-------------------------------------------------------------------------------------------------------------//

// Task 5
// Ми отримали прогноз погоди на два дні, з мінімальними і максимальними температурами, а також необов'язковими іконками.
// Заміни оголошення всіх змінних однією операцією деструктуризації властивостей об'єкта forecast.
// Задай значення за замовчуванням для іконок, змінних todayIcon і tomorrowIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: {
//     high: highToday,
//     low: lowToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     high: highTomorrow,
//     low: lowTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// console.log(highToday); // 32
// console.log(lowToday); // 28
// console.log(todayIcon); // "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
// console.log(highTomorrow); // 31
// console.log(lowTomorrow); // 27
// console.log(tomorrowIcon); // "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"

//-------------------------------------------------------------------------------------------------------------//

// Task 6
// Функція calculateMeanTemperature(forecast) приймає один параметр forecast - об'єкт температур на два дні наступного формату.
// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Заміни оголошення змінних todayLow, todayHigh, tomorrowLow і tomorrowHigh однією операцією деструктуризації властивостей об'єкта forecast.

// Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { high: todayHigh, low: todayLow },
//     tomorrow: { high: tomorrowHigh, low: tomorrowLow },
//   } = forecast;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(
//   calculateMeanTemperature({
//     today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 29 },
//   })
// ); // 28.5
// console.log(
//   calculateMeanTemperature({
//     today: { low: 37, high: 40 },
//     tomorrow: { low: 33, high: 38 },
//   })
// ); // 37

//-------------------------------------------------------------------------------------------------------------//

// Task 7
// У змінній scores зберігається масив результатів тестування. Використовуючи розподіл і методи Math.max() і Math.min(),
// доповни код таким чином, щоб у змінній bestScore був найвищий бал, а у worstScore - найнижчий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore); // 93
// console.log(worstScore); // 17

//-------------------------------------------------------------------------------------------------------------//

// Task 8
// У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати тестування окремих груп.
// Використовуючи розподіл, доповни код таким чином, щоб:
// У змінній allScores зберігався масив всіх результатів від першої до третьої групи.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(firstGroupScores); // [64, 42, 93]
// console.log(secondGroupScores); // [89, 14, 51, 26]
// console.log(thirdGroupScores); // [29, 47, 18, 97, 81]
// console.log(allScores); // [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
// console.log(bestScore); // 97
// console.log(worstScore); // 14

//-------------------------------------------------------------------------------------------------------------//

// Task 9
// В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням, які зберігаються у змінній defaultSettings.
// Під час створення тесту, усі або частину налаштувань можна перевизначити, вони зберігаються у змінній overrideSettings.
// Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування за замовчуванням і поверх них застосувати перевизначені налаштування.
// Доповни код таким чином, щоб у змінній finalSettings утворився об'єкт фінальних налаштувань тесту.

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings.theme); // "light"
// console.log(finalSettings.public); // "false"
// console.log(finalSettings.withPassword); // "true"
// console.log(finalSettings.minNumberOfQuestions); // 10
// console.log(finalSettings.timePerQuestion); // 30

//-------------------------------------------------------------------------------------------------------------//

// Task 10
// Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями.
// text - текст завдання.
// category - категорія завдання.
// priority - пріоритет завдання.
// Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму параметр data.
// У новому об'єкті повинна бути властивість completed, значення якої зберігається в однойменній локальній змінній.
// В параметрі data гарантовано буде тільки властивість text, а інші дві, category і priority, можуть бути відсутніми.
// Тоді, в новому об'єкті завдання, у властивостях category і priority повинні бути значення за замовчуванням, що зберігаються в однойменних локальних змінних.

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   return { ...{ category, priority, completed }, ...data };
//   // Change code above this line
// }

// console.log(makeTask({})); // { category: "General", priority: "Normal", completed: false }
// console.log(
//   makeTask({
//     category: "Homemade",
//     priority: "Low",
//     text: "Take out the trash",
//   })
// ); // { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// console.log(makeTask({ category: "Finance", text: "Take interest" })); // { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" })); // { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// console.log(makeTask({ text: "Buy bread" }); // { category: "General", priority: "Normal", text: "Buy bread", completed: false }

//-------------------------------------------------------------------------------------------------------------//

// Task 11
// Використовуючи операцію rest, доповни код функції add() таким чином, щоб вона приймала будь-яку кількість аргументів, рахувала і повертала їх суму.

// function add(...args) {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }

// console.log(add(15, 27)); // 42
// console.log(add(12, 4, 11, 48)); // 75
// console.log(add(32, 6, 13, 19, 8)); // 78
// console.log(add(74, 11, 62, 46, 12, 36)); // 241

//-------------------------------------------------------------------------------------------------------------//

// Task 12
// Функція addOverNum() рахує суму всіх аргументів. Зміни параметри і тіло функції addOverNum() таким чином,
// щоб вона рахувала суму тільки тих аргументів, які більші за задане число.Це число повинно бути першим параметром функції.

// function addOverNum(first, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > first) {
//       total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(50, 15, 27)); // 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); // 51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); // 218

//-------------------------------------------------------------------------------------------------------------//

// Task 13
// Функція findMatches() приймає довільну кількість аргументів. Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.
// Доповни код функції таким чином, щоб вона повертала новий масив matches, в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.
// Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив [1, 2], тому що тільки вони є в масиві першого аргументу.

// function findMatches(arr, ...args) {
//   const matches = []; // Don't change this line

//   for (const arg of args) {
//     if (arr.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); // [1, 2]
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); // [17, 89, 2]
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)); // [24, 9, 41]
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16)); // []

//-------------------------------------------------------------------------------------------------------------//

// Task 14
// Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки за аналогією з getBooks() і addBook(bookName).
// Метод removeBook(bookName) буде видаляти книгу за назвою.Повертає рядок "Deleting book <назва книги>",
// де < назва книги > - це значення параметра bookName.
// Метод updateBook(oldName, newName) буде оновлювати назву книги на нову.Повертає рядок "Updating book <стара назва> to <нова назва>",
// де < стара назва > і < нова назва > - це значення параметрів oldName і newName відповідно.

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };

// console.log(bookShelf.getBooks()); // "Returning all books"
// console.log(bookShelf.addBook("Haze")); // "Adding book Haze"
// console.log(bookShelf.removeBook("Red sunset")); // "Deleting book Red sunset"
// console.log(bookShelf.updateBook("Sands of dune", "Dune")); // "Updating book Sands of dune to Dune"

//-------------------------------------------------------------------------------------------------------------//

// Task 15
// Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з oldName на newName у властивості books.
// Використовуй indexOf() для того, щоб знайти потрібний елемент масиву, і splice() для того, щоб замінити цей елемент.

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);

//     this.books.splice(bookIndex, 1, newName);
//     return this.books;

//     // Change code above this line
//   },
// };

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles")); // ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// console.log(bookShelf.updateBook("The last kingdom", "Dune")); // ["Dune", "Haze", "The guardian of dreams"]

//-------------------------------------------------------------------------------------------------------------//

// Task 16
// До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю - додавання, видалення,
// пошуку та оновлення зілля.Додай об'єкту atTheOldToad властивість potions, значенням якої зроби порожній масив.

// const atTheOldToad = {
//   // Change code below this line
//   potions: [],

//   // Change code above this line
// };

// console.log(atTheOldToad); // []

//-------------------------------------------------------------------------------------------------------------//

// Task 17
// Додай об'єкту atTheOldToad метод getPotions(), який просто повертає значення властивості potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad); // ["Speed potion", "Dragon breath", "Stone skin"]
// console.log(atTheOldToad.getPotions()); // ["Speed potion", "Dragon breath", "Stone skin"]

//-------------------------------------------------------------------------------------------------------------//

// Task 18
// Доповни метод addPotion(potionName) таким чином, щоб він додавав зілля potionName в кінець масиву зілля у властивості potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     return this.potions.push(potionName);

//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.potions); // ["Speed potion", "Dragon breath", "Stone skin"]
// console.log(atTheOldToad.addPotion("Invisibility")); // ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
// console.log(atTheOldToad.addPotion("Power potion")); // ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]

//-------------------------------------------------------------------------------------------------------------//

// Task 19
// Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля potionName з масиву зілля у властивості potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (potionName === this.potions[i]) {
//         this.potions.splice(i, 1);
//       }
//     }
//     return this.potions;

//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.potions); // ["Speed potion", "Dragon breath", "Stone skin"]
// console.log(atTheOldToad.removePotion("Dragon breath")); // ["Speed potion", Stone skin"]
// console.log(atTheOldToad.removePotion("Speed potion")); // ["Stone skin"]

//-------------------------------------------------------------------------------------------------------------//

// Task 20
// Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const potionsIndex = this.potions.indexOf(oldName);

//     this.potions.splice(potionsIndex, 1, newName);
//     return this.potions;

//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.potions); // ["Speed potion", "Dragon breath", "Stone skin"]
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth")); // ["Speed potion", "Polymorth", "Stone skin"]
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility")); // ["Speed potion", "Polymorth", "Invisibility"]

//-------------------------------------------------------------------------------------------------------------//

// Task 21
// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому, можливо, й іншими характеристиками.
// Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.
// {
//   name: "Dragon breath",
//   price: 700
// }
// Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків, а з масивом об'єктів.
// getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.
// addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив у властивості potions, але тільки, якщо такого зілля ще немає в інвентарі. В іншому випадку повертається рядок.
// removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
// updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на newName в масиві potions.

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (const item of this.potions) {
//       if (item.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }

//     this.potions.push(newPotion);

//     return this.potions;
//   },

//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];
//       if (potionName === potion.name) {
//         this.potions.splice(i, 1);
//         return this.potions;
//       }
//     }
//   },

//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];
//       if (oldName === potion.name) {
//         potion.name = newName;
//         return this.potions;
//       }
//     }
//   },
// };

// console.log(atTheOldToad.getPotions()); // [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 })); // додається новий в кінець списку
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })); // масив не змінюється, попередження
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 })); // масив не змінюється, попередження
// console.log(atTheOldToad.removePotion("Dragon breath")); // [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// console.log(atTheOldToad.removePotion("Speed potion")); // [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth")); // [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// console.log(
//   atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
// ); // [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]
