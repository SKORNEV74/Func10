//Стандартное об-ние ф-ции с ключ. словом, именем, параметром и блоком кода
function quack(num) {
    for (let i = 0; i < num; i++) {
        console.log("Quack!");
    }
}

quack(3);

//Функц-ное выражение
let fly = function (num) {
    for (let i = 0; i < num; i++) {
        console.log("Flying!");
    }
};

fly(3);

//Осн. принципы функций на примере игры в "наперстки"
let winner = function () { alert("WINNER!"); };
let loser = function () { alert("LOSER!"); };

winner();

let a = winner;
let b = loser;
let c = loser;
a();
b();

c = a;
a = b;
b = c;
c = a;
a = c;
a = b;
b = c;
a();

//массив пассажиров
let passengers = [
    {name: "Jane", paid: true},
    {name: "Evel", paid: true},
    {name: "Bro", paid: false},
    {name: "John", paid: true}
];

//самостоятельные функции черного списка, оплаченного билета и списка пассажиров
let blackList = function (passengers) {
    let count = [];
    for (let i = 0; i < passengers.length; i++) {
        if (passengers[i].paid === false) {
            count.push(passengers[i].name);
        }
    }
    if (count.length === 0) {
        console.log("BlackList is empty!");
    } else {
        console.log("BlackList:");
        for (let i = 0; i < count.length; i++) {
            console.log(count[i]);
        }
    }
};

let payPass = function (passengers) {
    let count = [];
    for (let i = 0; i < passengers.length; i++) {
        if (passengers[i].paid === true) {
            count.push(passengers[i].name);
        }
    }
    if (count.length === 0) {
        console.log("Nobody for passengers paid tickets!");
    } else {
        console.log("Passengers, who paid:");
        for (let i = 0; i < count.length; i++) {
            console.log(count[i]);
        }
    }
};

let allPass = function (passengers) {
    if (passengers.length === 0) {
        console.log("List of passengers is empty!");
    } else {
        console.log("Passengers:");
        for (let i = 0; i < passengers.length; i++) {
            console.log(passengers[i].name);
        }
    }
};

blackList(passengers);
payPass(passengers);
allPass(passengers);

//Предложенные тогоже
function checkPaid(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        if (!passengers[i].paid) {
            return false;
        }
    }
    return true;
}

function checkNoFly(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        if (onNoFlyList(passengers[i].name)) {
            return false;
        }
    }
    return true;
}

function printPassengers(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        console.log(passengers[i].name);
        return false;
    }
    return true;
}

//Пример передачи функции другой функции
function sayIt(translator) {
    let phrase = translator("Hello");
    alert(phrase);
}

function hawaiianTranslator(word) {
    if (word === "Hello") return "Aloha";
    if (word === "Goodbye") return "Aleha";
}

sayIt(hawaiianTranslator);

//Как нужно было сделать с учетом последнего
function processPassengers(passengers, testFunction) {
    for (let i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}

function checkNoFlyList(passenger) {
    return (passenger.name === "Evel");
}

function checkNotPaid(passenger) {
    return (!passenger.paid);
}

let allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
    console.log("The plane can't take off: we have a passenger on the no-fly-list.");
}

let allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
    console.log("The plane can't take off: not everyone has paid.");
}

//Вывести имя и инф-цию об оплате
function printPassenger(passenger) {
    let msg = passenger.name;
    if (passenger.paid === true) {
        msg += " has paid";
    } else {
        msg += " hasn't paid";
    }
    console.log(msg);
    return false;
}

processPassengers(passengers, printPassenger);

//Проверка на вшивость
function fun(echo) {
    console.log(echo);
}
fun("hello");
function boo(aFunction) {
    aFunction("boo");
}
boo(fun);
console.log(fun);
fun(boo);
let moreFun = fun;
moreFun("hello again");
function echoMaker() {
    return fun;
}
let bigFun = echoMaker();
bigFun("Is there an echo?");

//Возвращение ф-ций из ф-ций
let passengers2 = [
    {name: "Jane", paid: true, ticket: "coach"},
    {name: "Evel", paid: true, ticket: "firstclass"},
    {name: "Bro", paid: false, ticket: "firstclass"},
    {name: "John", paid: true, ticket: "premium"}
];

function serveCustomer(passenger) {
    let getDrinkOrderFunction = createDrinkOrder(passenger);
    let getDinnerOrderFunction = createDinnerOrder(passenger);

    getDrinkOrderFunction();

    getDinnerOrderFunction();

    getDrinkOrderFunction();
    getDrinkOrderFunction();
    //On movie
    getDrinkOrderFunction();
    //Забрать мусор
}

function createDrinkOrder(passenger) {
    let orderFunction;

    if (passenger.ticket === "firstclass") {
        orderFunction = function () {
            alert("Would you like a cocktail or wine?");
        };
    } else if (passenger.ticket === "premium") {
        orderFunction = function () {
            alert("Lemonade, water or wine?");
        };
    } else {
        orderFunction = function () {
            alert("Your choice is cola or water?");
        };
    }
    return orderFunction;
}

function createDinnerOrder(passenger) {
    let orderFunction;

    if (passenger.ticket === "firstclass") {
        orderFunction = function () {
            alert("Would you like a chicken or pasta?");
        };
    } else if (passenger.ticket === "premium") {
        orderFunction = function () {
            alert("Snacks or cheese plate?");
        };
    } else {
        orderFunction = function () {
            alert("Your choice is nuts or fried bread?");
        };
    }
    return orderFunction;
}

function servePassengers(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

servePassengers(passengers2);

//Web-cola
let products = [
    {name: "Grapefruit", calories: 170, color: "red", sold: 8200},
    {name: "Orange", calories: 160, color: "orange", sold: 12101},
    {name: "Cola", calories: 210, color: "caramel", sold: 25412},
    {name: "Diet Cola", calories: 0, color: "caramel", sold: 43922},
    {name: "Lemon", calories: 200, color: "clear", sold: 14983},
    {name: "Raspberry", calories: 180, color: "pink", sold: 9427},
    {name: "Root Beer", calories: 200, color: "caramel", sold: 9909},
    {name: "Water", calories: 0, color: "clear", sold: 62123}
];

