// Task 1
// Додай вираз перевірки повноліття користувача, значення параметра age, в умову для інструкції if.
// Якщо користувач повнолітній, повинен виконуватися блок if і у змінну message записується рядок "You are an adult".
// В іншому випадку повинен виконуватися блок else і записується рядок "You are a minor".

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     // Change this line
//     message = "You are an adult";
//   } else {
//     message = "You are a minor";
//   }

//   return message;
// }
// console.log(20); // "You are an adult"
// console.log(8); // "You are a minor"
// console.log(14); // "You are a minor"

//-------------------------------------------------------------------------------------------------------------//

// Task 2
// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат.
// Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:
// available - загальна кількість товарів на складі
// ordered - одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, що:
// Якщо в замовленні вказане число, яке перевищує кількість товарів на складі, у змінну message записується рядок "Not enough goods in stock!".
// В іншому випадку записується рядок "Order is processed, our manager will contact you.".

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered > available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "Order is processed, our manager will contact you.";
//   }
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50)); // "Order is processed, our manager will contact you."
// console.log(checkStorage(100, 130)); // "Not enough goods in stock!"
// console.log(checkStorage(200, 20)); // "Order is processed, our manager will contact you."
// console.log(checkStorage(200, 150)); // "Order is processed, our manager will contact you."
// console.log(checkStorage(150, 180)); // "Not enough goods in stock!"

//-------------------------------------------------------------------------------------------------------------//

// Task 3
// Заміни вирази зі стандартними математичними операторами на комбінований оператор присвоєння з додаванням,
// відніманням, множенням і діленням.

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

//-------------------------------------------------------------------------------------------------------------//

// Task 4
// Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів.
// Функція makeTransaction(pricePerDroid, orderedQuantity, customerCredits) виконує транзакцію з продажу дроїдів
// і повертає повідомлення про результат операції.Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:
// pricePerDroid - ціна одного дроїда
// orderedQuantity - кіл-сть замовлених дроїдів
// customerCredits - сума коштів на рахунку клієнта
// Доповни її наступним функціоналом:
// Оголоси змінну totalPrice для зберігання загальної суми замовлення і присвой їй вираз розрахунку цієї суми.
// Додай перевірку, чи зможе клієнт оплатити замовлення:
// якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, запиши у змінну message рядок "Insufficient funds!";
// в іншому випадку, відніми суму покупки з рахунку клієнта і запиши у змінну message повідомлення:
// "You ordered <число> droids, you have <число> credits left".

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   }
//   // Change code above this line
//   return message;
// }
// console.log(makeTransaction(3000, 5, 23000)); // "You ordered 5 droids, you have 8000 credits left"
// console.log(makeTransaction(1000, 3, 15000)); // "You ordered 3 droids, you have 12000 credits left"
// console.log(makeTransaction(5000, 10, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(2000, 8, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(500, 10, 5000)); // "You ordered 10 droids, you have 0 credits left"

//-------------------------------------------------------------------------------------------------------------//

// Task 5
// Функція checkPassword(password) отримує пароль користувача в параметр password, перевіряє його на збіг
// з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння,
// яке зберігається у змінній message.
// Якщо значення параметра password дорівнює null, значить користувач скасував операцію і в message записується рядок "Canceled by user!".
// Якщо значення параметра password збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється рядок "Welcome!".
// Якщо жодна з попередніх умов не виконалася, у змінну message записується рядок "Access denied, wrong password!".

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//   if (password === null) {
//     // Change this line
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     // Change this line
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   return message;
// }
// console.log(checkPassword("mangohackzor")); // "Access denied, wrong password!"
// console.log(checkPassword(null)); // "Canceled by user!"
// console.log(checkPassword("polyhax")); // "Access denied, wrong password!"

//-------------------------------------------------------------------------------------------------------------//

// Task 6
// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат.
// Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.
// available - доступна кількість товарів на складі
// ordered - одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, що:
// Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, у змінну message
// присвоюється рядок "There are no products in the order!".
// Якщо товарів у замовленні більше, ніж доступно товарів на складі, то у змінну message присвоюється рядок
// "Your order is too large, there are not enough items in stock!".
// В іншому випадку у змінну message присвоюється рядок "The order is accepted, our manager will contact you".

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = "There are no products in the order!";
//   } else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50)); // "The order is accepted, our manager will contact you"
// console.log(checkStorage(100, 130)); // "Your order is too large, there are not enough items in stock!"
// console.log(checkStorage(70, 0)); // "There are no products in the order!"
// console.log(checkStorage(200, 20)); // "The order is accepted, our manager will contact you"
// console.log(checkStorage(200, 250)); // "Your order is too large, there are not enough items in stock!"
// console.log(checkStorage(150, 0)); // "There are no products in the order!"

//-------------------------------------------------------------------------------------------------------------//

// Task 7
// Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок. Вона оголошує три параметри,
// значення яких будуть задаватися під час її виклику:
// number - число, входження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку
// Присвой змінній isInRange вираз перевірки входження number у числовий проміжок від start до end.
// Тобто число повинно бути більшим або дорівнювати start, і меншим або дорівнювати end.Результатом виразу перевірки
// буде буль true або false.

// function isNumberInRange(start, end, number) {
//   const isInRange = start <= number && number <= end; // Change this line

//   return isInRange;
// }
// console.log(isNumberInRange(10, 30, 17)); // true
// console.log(isNumberInRange(10, 30, 5)); // false
// console.log(isNumberInRange(20, 50, 24)); // true
// console.log(isNumberInRange(20, 50, 76)); // false

//-------------------------------------------------------------------------------------------------------------//

// Task 8
// Функція checkIfCanAccessContent(subType) перевіряє, чи може користувач отримати доступ до контенту.
// Перевірка відбувається за типом передплати.Отримати доступ можуть тільки користувачі з передплатою pro або vip.
// Присвой змінній canAccessContent вираз перевірки передплати.
// Якщо значення параметра subType дорівнює рядкам "pro" або "vip", користувач отримає доступ.
// Результатом виразу перевірки буде буль true або false.

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip"; // Change this line

//   return canAccessContent;
// }
// console.log(checkIfCanAccessContent("pro")); // true
// console.log(checkIfCanAccessContent("starter")); // false
// console.log(checkIfCanAccessContent("vip")); // true

//-------------------------------------------------------------------------------------------------------------//

// Task 9
// Функція isNumberNotInRange(start, end, number) перевіряє, чи не входить число у проміжок.
// Тобто число повинно бути меншим або дорівнювати start і більшим або дорівнювати end.
// Результатом виразу перевірки буде буль true або false.
// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:
// number - число, невходження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку
// Присвой змінній isNotInRange вираз інверсії значення змінної isInRange, використовуючи оператор !.

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }
// console.log(isNumberNotInRange(10, 30, 17)); // false
// console.log(isNumberNotInRange(10, 30, 5)); // true
// console.log(isNumberNotInRange(20, 50, 24)); // false
// console.log(isNumberNotInRange(20, 50, 76)); // true

//-------------------------------------------------------------------------------------------------------------//

// Task 10
// Функція getDiscount(totalSpent) визначає значення знижки, залежно від загальної суми витрачених
// грошей(параметр totalSpent) в магазині за весь час(партнерська програма).Знижка записується у змінну discount
// і повертається з функції як результат її роботи.
// Використовуючи розгалуження і логічні оператори, доповни код функції.
// Якщо витрачено від 50000 (включно) або більше кредитів - знижка 10% (золотий партнер)
// Якщо витрачено від 20000 (включно) до 50000 кредитів - знижка 5% (срібний партнер)
// Якщо витрачено від 5000 (включно) до 20000 кредитів - знижка 2% (бронзовий партнер)
// Якщо витрачено менше 5000 кредитів - знижка 0 (базовий партнер)
// Значення знижок кожного рівня зберігаються в однойменних константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT і GOLD_DISCOUNT.

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent <= 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent <= 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }
// console.log(getDiscount(137000)); // 0.1
// console.log(getDiscount(46900)); // 0.05
// console.log(getDiscount(8250)); // 0.02
// console.log(getDiscount(1300)); // 0
// console.log(getDiscount(5000)); // 0.02
// console.log(getDiscount(20000)); // 0.05
// console.log(getDiscount(50000)); // 0.1

//-------------------------------------------------------------------------------------------------------------//

// Task 11
// Виконай рефакторинг рішення задачі «Склад товарів», замінивши інструкцію if...else тернарним оператором.

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   message =
//     ordered > available
//       ? "Not enough goods in stock!"
//       : "The order is accepted, our manager will contact you";
//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(100, 50)); // "The order is accepted, our manager will contact you"
// console.log(checkStorage(100, 130)); // "Not enough goods in stock!"
// console.log(checkStorage(200, 20)); // "The order is accepted, our manager will contact you"
// console.log(checkStorage(200, 150)); // "The order is accepted, our manager will contact you"
// console.log(checkStorage(150, 180)); // "Not enough goods in stock!"

//-------------------------------------------------------------------------------------------------------------//

// Task 12

//-------------------------------------------------------------------------------------------------------------//

// Task 13

//-------------------------------------------------------------------------------------------------------------//

// Task 14

//-------------------------------------------------------------------------------------------------------------//

// Task 15

//-------------------------------------------------------------------------------------------------------------//

// Task 16

//-------------------------------------------------------------------------------------------------------------//

// Task 17

//-------------------------------------------------------------------------------------------------------------//

// Task 18

//-------------------------------------------------------------------------------------------------------------//

// Task 19

//-------------------------------------------------------------------------------------------------------------//

// Task 20

//-------------------------------------------------------------------------------------------------------------//

// Task 21

//-------------------------------------------------------------------------------------------------------------//

// Task 22
