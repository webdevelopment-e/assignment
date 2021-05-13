






// // 1. qs-kilometerToMeter

function kilometerToMeter(kilometer) {
    var meter = 0;
    for (var i = 1; i <= kilometer; i++) {
        meter = 1000 * kilometer;
    }
    return meter;
}
var result = kilometerToMeter(12);
console.log(result);



// // 2. qs-budgetCalculator

function budgetCalculator(watch, mobile, laptop) {
    var total = 50 * watch + 100 * mobile + 500 * laptop;
    return total;
}

var result = budgetCalculator(2, 2, 1);
console.log('result', result);



// // 3. qs-hotelCost

function hotelCost(travelDay) {
    amount = 0;
    if (travelDay <= 10) {
        amount = 10 * 100;
    }
    else if (travelDay <= 20) {
        var firstPart = 10 * 100;
        var remaining = travelDay - 10;
        var secondPart = remaining * 80;
        var amount = firstPart + secondPart;
    }

    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = travelDay - 20;
        var thirdPart = remaining * 50;
        var amount = firstPart + secondPart + thirdPart;
    }
    return amount;
}

var result = hotelCost(22);
console.log('result', result);



// // 4. qs-megaFriend

function megaFriend(friends) {
    var larger = "";
    for (var i = 0; i < friends.length; i++) {
        var element = friends[i];
        if (element.length > larger.length) {
            larger = element;
        }
    }
    return larger;
}

var friends = ["chipmank", "dottie", "piet", "sweetums", "buttercup"];
var result = megaFriend(friends);
console.log("larger value is: ", result);

