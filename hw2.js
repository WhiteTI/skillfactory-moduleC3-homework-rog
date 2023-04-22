function checkPropInObj (str, obj) {
    return (str in obj);
}

const shoppingMallData = {
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

console.log(checkPropInObj('budget', shoppingMallData));