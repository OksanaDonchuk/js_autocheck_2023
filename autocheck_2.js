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
// Функція checkPassword(password) порівнює переданий їй пароль (параметр password) зі збереженим паролем адміністратора (константа ADMIN_PASSWORD)
// і повертає рядок з повідомленням про результат.
// Використовуючи тернарний оператор, доповни функцію таким чином, що:
// Якщо значення password і ADMIN_PASSWORD збігаються, присвой змінній message рядок "Access is allowed".
// В іншому випадку, присвой message рядок "Access denied, wrong password!".

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   message =
//     password === ADMIN_PASSWORD
//       ? "Access is allowed"
//       : "Access denied, wrong password!";
//   // Change code above this line
//   return message;
// }

// console.log(checkPassword("jqueryismyjam")); // "Access is allowed"
// console.log(checkPassword("angul4r1sl1f3")); // "Access denied, wrong password!"
// console.log(checkPassword("r3actsux")); // "Access denied, wrong password!"

//-------------------------------------------------------------------------------------------------------------//

// Task 13
// Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача (параметр type), перевіряє її на збіг
// з трьома можливими типами щомісячної передплати та повертає ціну, що зберігається у змінній price.
// Якщо значення параметра type - це рядок:
// "starter" - ціна передплати 0 кредитів.
// "professional" - ціна передплати 20 кредитів.
// "organization" - ціна передплати 50 кредитів.
// Спочатку в тілі функції була інструкція if...else
// Після рефакторингу інструкція if..else була замінена на switch. Доповни код інструкції switch, щоб функція працювала правильно.

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//   switch (
//     type // Change this line
//   ) {
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }

// console.log(getSubscriptionPrice("professional")); // 20
// console.log(getSubscriptionPrice("organization")); // 50
// console.log(getSubscriptionPrice("starter")); // 0

//-------------------------------------------------------------------------------------------------------------//

// Task 14
// Функція checkPassword(password) отримує пароль в параметр password, перевіряє його на збіг з паролем адміністратора
// у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння, яке зберігається у змінній message.
// Якщо значення параметра password:

// дорівнює null, значить користувач скасував операцію і в message записується рядок "Canceled by user!".
// збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється рядок "Welcome!".
// не задовольняє жодну з попередніх умов, у змінну message записується рядок "Access denied, wrong password!".
// Зроби рефакторинг коду, замінивши інструкцію if..else на switch, і не забудь про блок default (аналог else).

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;

//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;

//     default:
//       message = "Access denied, wrong password!";
//   }

//   // Change code above this line
//   return message;
// }

// console.log(checkPassword("mangohackzor")); // "Access denied, wrong password!"
// console.log(checkPassword(null)); // "Canceled by user!"
// console.log(checkPassword("polyhax")); // "Access denied, wrong password!"
// console.log(checkPassword("jqueryismyjam")); // "Welcome!"

//-------------------------------------------------------------------------------------------------------------//

// Task 15
// Функція getShippingCost(country) повинна перевіряти можливість доставки товару в країну користувача (параметр country)
// і повертати повідомлення про результат, що зберігається у змінній message.Обов'язково використовуй інструкцію switch.
// Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість < country > і < price >,
// необхідно підставити відповідні значення.
// Список країн і вартість доставки:
// China - 100 кредитів
// Chile - 250 кредитів
// Australia - 170 кредитів
// Jamaica - 120 кредитів
// Зі списку видно, що доставка можлива не скрізь.Якщо зазначена країна відсутня у списку,
// то функція повинна повернути рядок "Sorry, there is no delivery to your country"

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case "China":
//       message = `Shipping to ${country} will cost 100 credits`;
//       break;
//     case "Chile":
//       message = `Shipping to ${country} will cost 250 credits`;
//       break;
//     case "Australia":
//       message = `Shipping to ${country} will cost 170 credits`;
//       break;
//     case "Jamaica":
//       message = `Shipping to ${country} will cost 120 credits`;
//       break;
//     default:
//       message = "Sorry, there is no delivery to your country";
//   }
//   // Change code above this line
//   return message;
// }

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

//-------------------------------------------------------------------------------------------------------------//

// Task 16
// Функція getNameLength(name) приймає ім'я (параметр name) і повертає рядок, в якому вказана його довжина.
// Доповни шаблонний рядок у змінній message довжиною рядка з параметра name.

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }

// console.log(getNameLength("Poly")); // "Name Poly is 4 characters long"
// console.log(getNameLength("Harambe")); // "Name Harambe is 6 characters long"
// console.log(getNameLength("Billy")); // "Name Billy is 5 characters long"
// console.log(getNameLength("Joe")); // "Name Joe is 3 characters long"

//-------------------------------------------------------------------------------------------------------------//

// Task 17
// Доповни код, присвоївши оголошеним змінним вирази звертання до відповідних елементів або властивостей рядка у змінній course.
// courseTopicLength - довжина рядка.
// firstElement - перший символ рядка.
// lastElement - останній символ рядка.

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(courseTopic); // "JavaScript essentials"
// console.log(courseTopicLength); // 21
// console.log(firstElement); // J
// console.log(lastElement); // s

//-------------------------------------------------------------------------------------------------------------//

// Task 18
// Функція getSubstring(string, length) приймає рядок і повертає підрядок від початку і до length символів.
// Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:
// string - оригінальний рядок
// length - кількість символів з початку рядка для підрядка
// Присвой змінній substring вираз створення підрядка довжиною length символів (від початку) з рядка string.

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }

// console.log(getSubstring("Hello world", 3)); // "Hel"
// console.log(getSubstring("Hello world", 6)); // "Hello"
// console.log(getSubstring("Hello world", 8)); // "Hello wo"
// console.log(getSubstring("Hello world", 11)); // "Hello world"
// console.log(getSubstring("Hello world", 0)); // ""

//-------------------------------------------------------------------------------------------------------------//

// Task 19
// Функція formatMessage(message, maxLength) приймає рядок (параметр message) і форматує його, якщо довжина перевищує значення в параметрі maxLength.
// Доповни код функції таким чином, що якщо довжина рядка:
// не перевищує maxLength, функція повертає його в початковому вигляді.
// більша за maxLength, то функція обрізає рядок до maxLength символів і додає в кінець три крапки "...", після чого повертає скорочену версію.

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = `${message.slice(0, maxLength)}...`;
//   }
//   /// Change code above this line
//   return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

//-------------------------------------------------------------------------------------------------------------//

// Task 20
// Функція normalizeInput(input) приймає рядок (параметр input) і повертає такий самий рядок, але в нижньому регістрі.
// Присвой змінній normalizedInput вираз створення рядка у нижньому регістрі з параметра input.

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }

// console.log(normalizeInput("Hello world")); // "hello world"
// console.log(normalizeInput("This ISN'T SpaM")); // "this isn't spam"
// console.log(normalizeInput("Big SALE")); // "big sale"

//-------------------------------------------------------------------------------------------------------------//

// Task 21
// Функція checkForName(fullname, name) приймає два параметри та повертає буль true або
// false - результат перевірки входження підрядка name у рядок fullname.
// fullname - повне ім'я, що складається з двох слів (імені та прізвища), розділених пробілом.
// name - ім'я для перевірки входження в повне ім'я.
// Присвой змінній result вираз перевірки входження імені(параметр name), у повне ім'я (параметр fullname).
// Нехай функція чітко розрізняє регістр літер, тобто «Петя» і «петя» - для неї різні імена.

// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//   return result;
// }

// console.log(checkForName("Egor Kolbasov", "Egor")); // true
// console.log(checkForName("Egor Kolbasov", "egor")); // false
// console.log(checkForName("Egor Kolbasov", "egOr")); // false
// console.log(checkForName("Egor Kolbasov", "Zhenya")); // false
// console.log(checkForName("Vadim Nekrasov", "Vadim")); // true
// console.log(checkForName("Vadim Nekrasov", "vadim")); // false
// console.log(checkForName("Vadim Nekrasov", "Dima")); // false

//-------------------------------------------------------------------------------------------------------------//

// Task 22
// Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale,
// і повертає результат перевірки.Слова в рядку параметра message можуть бути у довільному регістрі, наприклад SPAM або sAlE
// Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
// Якщо в рядку відсутні заборонені слова, функція повертає буль false.

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   const normilizedMessage = message.toLowerCase();
//   result =
//     normilizedMessage.includes("spam") || normilizedMessage.includes("sale");
//   // Change code above this line
//   return result;
// }

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); //true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); //true
