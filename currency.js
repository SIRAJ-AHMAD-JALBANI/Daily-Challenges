function buyItems(amount, items) {
    const rates = {
        USD: 1.00,
        EUR: 1.10,
        GBP: 1.25,
        JPY: 0.0070,
        CAD: 0.75
    };
    let money = parseFloat(amount[0]) * rates[amount[1]];
    let count = 0;

    // Buy items in order
    for (let [price, currency] of items) {
        let cost = parseFloat(price) * rates[currency];

        if (money >= cost) {
            money -= cost;
            count++;
        } else {
            break;
        }
    }

    // Final result
    if (count === items.length) {
        return "Buy them all!";
    } else {
        return `Buy the first ${count} items.`;
    }
}
