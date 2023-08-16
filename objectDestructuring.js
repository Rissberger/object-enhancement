const teaOrder = {
variety : 'oolong',
teaName : 'winter sprout',
origin : 'taiwan',
price : 12.99,
hasCaffeine : true,
quanity : 3
};

const { price, quanity, ...others} = teaOrder;

const { brewTemp: temp = 175} = teaOrder;

const { teaName: tea } = teaOrder;

function checkout(tea) {
    const { quantity, price } = tea;
    return quanity * price;
}
const order1 = {
    variety : 'green',
    teaName : 'silver needle',
    origin : 'taiwan',
    price : 12.99,
    hasCaffeine : true,
    };



    const students = [
       { name: 'Cheh', GPA: 4.6,}
        {name: 'zach', GPA: 4.4,}
        {name: 'ken', GPA: 3.8,}
       {name: 'steve', GPA: 3.6,}
       {name: 'Chris', GPA: 4.8,}   
    ];

    const [topStudent, secondBest, , fourth] = students;
    const [first, ...losers] = students;

    const teaOrder = {
        variety : 'oolong',
        teaName : 'winter sprout',
        origin : 'taiwan',
        price : 12.99,
        hasCaffeine : true,
        quanity : 3
        };

function getTotal({price, quantity}){
    return quanity * price;
}