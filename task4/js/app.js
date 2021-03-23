const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
 },
];

const productImg = products.filter(prod => { // Получаем массив из объектов где есть фотографии
    return prod.photos && prod.photos.length;
})

const arrPrice = products.sort((a,b) => {
    return a.price - b.price;
});

console.log(productImg);
console.log(arrPrice);