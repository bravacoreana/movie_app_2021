## Object Destructing

```js
const human = {
  name: "Nico",
  lastName: "Serrano",
  nationality: "Almost Korean",
  favFood: {
    breakfast: "pasta",
    lunch: "pizza",
    dinner: "steak",
  },
};

// * Not efficient!
// const name = human.name;
// const lastName = human.lastName;
// console.log(name, lastName);  //Nico Serrano

// * Better way!
const {
  name,
  lastName,
  nationality: country,
  favFood: { breakfast, lunch, dinner }, // One level deeper
} = human;

console.log(name, lastName); //Nico Serrano
console.log(name, lastName, country); //Nico Serrano Almost Korean
console.log(breakfast, lunch, dinner); //pasta pizza steak
```

## Spread Operator

### Array

```js
const weeks = ["mon", "tue", "wed", "thu", "fri"];
const weekends = ["sat"];

// const allDay = weeks + weekends;
// console.log(allDay); // mon,tue,wed,thu,frisat  // it's not an array anymore.

// const allDay = [weeks + weekends];
// console.log(allDay); //  ["mon,tue,wed,thu,frisat"] // one string in the array.

// const allDay = [weeks, weekends];
// console.log(allDay); //  [Array(5), Array(1)]

const allDay = [...weeks, ...weekends, "sun"];
console.log(allDay); // ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
```

### Object

```js
const ob = {
  first: "hi",
  second: "hello",
};

const ob2 = {
  third: "bye",
};

// const object = { ob, ob2 };
// console.log(object);  //{ob: Object, ob2: Object}

const object = { ...ob, ...ob2 };
console.log(object); // {first: "hi", second: "hello", third: "bye"}
```

Example: `const shi = (something, args) => console.log(...args); `

### Classes

```js
class Human {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
}

// const nico = new Human("nico", "serrano");
// console.log(nico); // Human {name: "nico", lastName: "serrano", constructor: Object}
// console.log(nico.name)  // nico

class Baby extends Human {
  cry() {
    console.log("WAAAAA");
  }
  sayName() {
    console.log(`My name is ${this.name}`);
  }
}

const myBaby = new Baby("bilbo", "k.t.");
console.log(myBaby); // Baby {name: "bilbo", lastName: "k.t.", constructor: Object}
myBaby.cry(); //WAAAAA
myBaby.sayName(); //My name is bilbo
```

### Array map

```js
const days = ["mon", "tue", "wed", "thu", "fri"];

const starDays = days.map((day, index) => `#${index + 1} ${day}⭐️`);
console.log(starDays); // ["mon⭐️", "tue⭐️", "wed⭐️", "thu⭐️", "fri⭐️"]

const happy = (day, index) => `#${index + 1} ${day} 😍`;
const happyDays = days.map(happy);
console.log(happyDays); //  ["mon 😍", "tue 😍", "wed 😍", "thu 😍", "fri 😍"]
```

### Array filter

The filter() method creates a **new array** with all elements that pass(returns true) the test implemented by the provided function.

```js
const numbers = [2, 45, 123, 4, 345, 45, 8788, 3, 222, 64, 456];

const biggerThan15 = numbers.filter((number) => number > 15);
console.log(biggerThan15); // [45, 123, 345, 45, 8788, 222, 64, 456]

const over15 = (number) => number > 15;
const filter_numbers = numbers.filter(over15);
console.log(filter_numbers); //  [45, 123, 345, 45, 8788, 222, 64, 456]

let posts = ["hi", "hello", "bye"];
posts = posts.filter((post) => post !== "bye");
console.log(posts); // ["hi", "hello"]

const numbers2 = [1, 2, 3, 4, 5];
const filteredArray = numbers2.filter((number) => number);
console.log(filteredArray); // [1, 2, 3, 4, 5]
newNumbers === filteredArray ? console.log("same") : console.log("diff"); // diff
```

### forEach, includes, push

```js
let greets = ["hi", "hello", "bye"];

greets.forEach((greet) => console.log(greet));
// hi
// hello
// bye

greets.push("new");
console.log(greets); // ["hi", "hello", "bye", "new"]

if (!greets.includes("howdy")) greets.push("howdy");

console.log(greets); //["hi", "hello", "bye", "howdy"]
console.log(greets.reverse()); //["howdy", "bye", "hello", "hi"]
```
