const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

// const si = orders.map(item => item.total)
// const precioImpuesto = orders.map(item => ({
//     ...item, impuesto: item.total * 2
// }));

// const rta2 = orders.map(item => {
//     item.tax = .19;
//     return item;
// });

const rta3 = orders.map(item => {
    return {
        ...item,
        tax: .19
    };
});

console.table(rta3);
console.table(orders); 