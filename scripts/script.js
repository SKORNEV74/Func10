function quack(num) {
    for (let i = 0; i < num; i++) {
        console.log("Quack!");
    }
}

quack(3);

let fly = function (num) {
    for (let i = 0; i < num; i++) {
        console.log("Flying!");
    }
};

fly(3);

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

let passengers = [
    {name: "Jane", paid: true},
    {name: "Evel", paid: true},
    {name: "Bro", paid: false},
    {name: "John", paid: true}
];

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

function sayIt(translator) {
    let phrase = translator("Hello");
    alert(phrase);
}

function hawaiianTranslator(word) {
    if (word === "Hello") return "Aloha";
    if (word === "Goodbye") return "Aleha";
}

sayIt(hawaiianTranslator);

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