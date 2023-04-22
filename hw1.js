function printObject (obj) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log(prop, obj[prop]);
        }
    }
}

const shoppingMallData = {
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

printObject(shoppingMallData);