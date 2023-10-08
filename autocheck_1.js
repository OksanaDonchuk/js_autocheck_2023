// Task 1
//Оголоси дві змінні, productName для назви товару, і pricePerItem для зберігання ціни за штуку.
// При оголошенні надай змінним наступні значення:
// назва - рядок "Droid";
// ціна за штуку - число 2000.

// Change code below this line
// const productName = "Droid";
// const pricePerItem = 2000;
// console.log(productName);
// 'Droid'

// console.log(pricePerItem);
// 2000

//-------------------------------------------------------------------------------------------------------------//

// Task 2
// Ім'я товару змінили на "Repair droid" і збільшили його ціну на 1500 кредитів.
// Перевизнач значення змінних pricePerItem і productName після їх оголошення.

// let productName = "Droid";
// let pricePerItem = 2000;

// // Change code below this line
// productName = "Repair droid";
// pricePerItem = 3500;

//-------------------------------------------------------------------------------------------------------------//

// Task 3
// Оголоси наступні змінні, використовуючи ключове слово const або let, і присвой їм відповідні значення.
// topSpeed - число 160.
// distance - число 617.54.
// login - рядок "mango935".
// isOnline - буль true.
// isAdmin - буль false.

// Change code below this line
// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;

//-------------------------------------------------------------------------------------------------------------//

// Task 4
// Доповни код, присвоївши змінній totalPrice вираз для підрахунку загальної суми замовлення.
// Змінна pricePerItem зберігає ціну однієї одиниці товару, а orderedQuantity - кількість одиниць товару в замовленні.

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;

//-------------------------------------------------------------------------------------------------------------//

// Task 5
// Оголоси змінну message і запиши в неї повідомлення про покупку, рядок у форматі:
// "You picked <назва товару>, price per item is <ціна товару> credits".Де < назва товару > і < ціна товару >
// — це значення змінних productName і pricePerItem.Використовуй синтаксис шаблонних рядків.

//const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`

//-------------------------------------------------------------------------------------------------------------//

// Task 6
// Магазин з продажу ремонтних дроїдів готовий до відкриття, залишилося написати скрипт для їх замовлення.
// Оголоси змінні та присвой їм відповідні значення:
// pricePerDroid - ціна одного дроїда, значення 800
// orderedQuantity - кількість дроїдів у замовленні, значення 6
// deliveryFee - вартість доставки, значення 50
// totalPrice - загальна сума замовлення до сплати, не забудь про вартість доставки
// message - повідомлення про стан замовлення у форматі
// "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."

// Change code below this line
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

//-------------------------------------------------------------------------------------------------------------//

// Task 7
// Оголоси функцію sayHi, всередині якої додай console.log() з рядком "Hello, this is my first function!".
// Після оголошення виклич функцію sayHi.

// Change code below this line
// function sayHi(){
//     console.log("Hello, this is my first function!");
// }

// sayHi();

//-------------------------------------------------------------------------------------------------------------//

// Task 8
// Функція add повинна вміти додавати три числа і виводити результат у консоль. Додай функції add три параметри: a, b і c,
// які будуть отримувати значення аргументів під час її виклику.
// Доповни console.log() таким чином, щоб він логував рядок "Addition result equals <result>",
// де < result > - це сума переданих

// Change code below this line
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

//-------------------------------------------------------------------------------------------------------------//

// Task 9
// Доповни код функції add таким чином, щоб вона повертала результат додавання значень трьох параметрів: a, b і c.

// function add(a, b, c) {
//   // Change code below this line
//   return a + b + c;

//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

//-------------------------------------------------------------------------------------------------------------//

// Task 10
// Функція makeMessage(name, price) складає і повертає повідомлення про покупку.
// Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.
// name - назва товару
// price - ціна товару
// Доповни код функції таким чином, щоб у змінну message записувався рядок
// "You picked <product name>, price per item is <product price> credits", де < product name > і < product price > -
// це значення параметрів name і price.Використовуй синтаксис шаблонних рядків.

// function makeMessage(name, price) {
//   // Change code below this line
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// }

// console.log(makeMessage("Radar", 6150)); // "You picked Radar, price per item is 6150 credits"
// console.log(makeMessage("Scanner", 3500)); // "You picked Scanner, price per item is 3500 credits"
// console.log(makeMessage("Reactor", 8000)); // "You picked Reactor, price per item is 8000 credits"
// console.log(makeMessage("Engine", 4070)); // "You picked Engine, price per item is 4070 credits"

//-------------------------------------------------------------------------------------------------------------//

// Task 11
// Функція calculateTotalPrice рахує і повертає загальну суму покупки. Вона приймає два параметри,
// значення яких будуть задаватися під час її виклику.
// orderedQuantity - кількість одиниць товару в замовленні;
// pricePerItem - ціна однієї одиниці товару.
// Доповни код функції таким чином, щоб у змінну totalPrice записувалася загальна сума покупки -
// результат множення кількості товарів на ціну одного.

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
// }

// console.log(calculateTotalPrice(5, 100)); // 500
// console.log(calculateTotalPrice(8, 60)); // 480
// console.log(calculateTotalPrice(3, 400)); // 1200
// console.log(calculateTotalPrice(1, 3500)); // 3500
// console.log(calculateTotalPrice(12, 70)); // 840

//-------------------------------------------------------------------------------------------------------------//

// Task 12
// Функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) складає і повертає повідомлення
// про покупку ремонтних дроїдів.Вона оголошує три параметри, значення яких будуть задаватися під час її виклику.
// orderedQuantity - кількість дроїдів у замовленні
// pricePerDroid - ціна одного дроїда
// deliveryFee - вартість доставки
// Доповни код функції таким чином, щоб вона повертала повідомлення про замовлення у форматі
// "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.".
// Не забудь про ціну доставки в обчисленнях загальної вартості.

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   // Change code above this line
//   return message;
// }

// console.log(makeOrderMessage(2, 100, 50)); // "You ordered droids worth 250 credits. Delivery (50 credits) is included in total price."
// console.log(makeOrderMessage(4, 300, 100)); // "You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price."
// console.log(makeOrderMessage(10, 70, 200)); // "You ordered droids worth 900 credits. Delivery (200 credits) is included in total price."

//-------------------------------------------------------------------------------------------------------------//

// Task 13
// Функція isAdult оголошує один параметр age (вік), значення якого буде задаватися під час її виклику.
// Присвой змінній passed вираз перевірки віку користувача на повноліття.Людина вважається повнолітньою у віці 18 років і старше.

// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;

//   // Change code above this line
//   return passed;
// }

// console.log(isAdult(20)); // true
// console.log(isAdult(14)); // false
// console.log(isAdult(8)); // false
// console.log(isAdult(37)); // true

//-------------------------------------------------------------------------------------------------------------//

// Task 14
// Функція isValidPassword (password) перевіряє рівність збереженого і введеного паролів і повертає результат перевірки -
// буль true або false.Змінна SAVED_PASSWORD зберігає значення попередньо збереженого пароля.
// Введений пароль передається у параметр password.
// Присвой змінній isMatch вираз перевірки рівності введених і попередньо збережених паролів.
// Результатом виразу перевірки повинно бути true, якщо значення збігаються, і false - якщо ні.

// function isValidPassword(password) {
//   const SAVED_PASSWORD = "jqueryismyjam";
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;

//   // Change code above this line
//   return isMatch;
// }

// console.log(isValidPassword("mangodab3st")); // false
// console.log(isValidPassword("kiwirul3z")); // false
// console.log(isValidPassword("jqueryismyjam")); // true
