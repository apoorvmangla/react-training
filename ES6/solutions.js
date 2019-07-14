window.addEventListener('load', () => {

// Question 1

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var solution = arr.filter(numb => numb % 3 === 0);
console.log(solution);

// Question 2

const meta = {
    title: 'Destructuring Assignment',
    authors: [{ firstname: 'Craig', lastname: 'Buckler' }],
    publisher: {
        name: 'SitePoint',
        url: 'http://www.sitepoint.com/'
    }
};
const { title } = meta;
const { firstname } = meta.authors[0];
const { url } = meta.publisher;
console.log (title, firstname, url);

const { title : doc } = meta;
const { firstname : name} = meta.authors[0];
const { url : web} = meta.publisher;
console.log(doc, name, web);

// Question 3
const books = [
    { title: 'Full Stack JavaScript', author: 'Colin Ihrig and Adam Bretz', url: 'http://www.sitepoint.com/store/full-stack-javascript/' },
    { title: 'JavaScript: Novice to Ninja', author: 'Darren Jones', url: 'http://www.sitepoint.com/store/leaern-javascript/' },
    { title: 'Jump Start CSS', author: 'Louis Lazaris', url: 'http://www.sitepoint.com/store/jump-start-css/' },
];
const bookItems = books.map( book => {
    let {title, author} = book;
    console.log(title, author);
})

//Question 4
var prices = [1.1, 2.32, 3.68, 4.9];
class priceCalculator {
    constructor(inputPrice) {
        this.inputPrice = inputPrice;
        this.tax = 0.07;
    }
    calculatePrice() {
        return 'Price is:' + this.inputPrice + (this.inputPrice * this.tax) + '';
    }
}

let calc = prices.map(price => {
    let totalPrice = new priceCalculator(price);
    console.log(totalPrice.calculatePrice());
})

// Question 5
const mapperFns = (number) => {
    return {
        "isEven": number % 2 === 0 ? true : false,
        "number": number,
        "squared": number * number
    }
}
console.log([1, 2, 3].map(mapperFns));

// Question 6
const first = 'Mohan';
const last = 'Singh';
const person = {
    first,
    last,
    favouriteColor : 'blue',
    address: {
        city : 'Gurgaon',
        street : 'Sector 21',
        state : 'HR'
    }
}
console.log(person);

// Question 7
const urlPrinter = (url, method) => fetch(url, { method: method }).then(() => { url }, { method }).catch(() => '{ url }, { method }');
//console.log(urlPrinter('http://www.google.com','GET'));

// Question 8
const person1 = {
    first: 'Mohan',
    last: 'Singh',
    address: {
        lines: ['Sector 47', 'Chestor Lane', 'Apt 23'],
        city: 'Gurgaon',
        state: 'Haryana'
    }
}
const [ addressLine1, addressLine2 ] = person1.address.lines;
console.log(addressLine2)

// Question 9
let text = "";
let nodes = document.querySelectorAll('h1');
for (let node of nodes) {
    text = text + node.innerHTML[0];
};
console.log(text);

// Question 10
const someArray = ["item 1", "item 2", "item 3", "item 4"];
[, ...newArray] = someArray
console.log(newArray);

})