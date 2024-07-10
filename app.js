// write code here
const sales = [
    { price: 1000, discount: 0.1},
    { price: 500, discount: 0.05},
    { price: 100}
  ];

function total(sales) {
    let summary = sales.map(item => {
        let netPrice;
        if (item.discount) {
            netPrice = item.price * (1 - item.discount)
        } else {
            netPrice = item.price
        }
        return {...item, netPrice: netPrice};
    });
    return summary;
}

const summary= total(sales);
console.log(summary);