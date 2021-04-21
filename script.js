// let name, nameHere, number;
// var array = [1, 2, 3, 4, 5, 6, 7];
// function okey() {
//   console.clear();
//   number = document.getElementById("textarea").value;
//   if (
//     document.getElementById("textarea").value != "" &&
//     parseInt(document.getElementById("textarea").value) &&
//     document.getElementById("textarea").value > 0
//   ) {
//     list.push(number);
//   }
//   for (var i = 0; i < list.length; i++) {
//     console.log(list[i]);
//   }
//   document.getElementById("nameHere").innerHTML = list.toString();
//   document.getElementById("card").classList.toggle("card");
//   document.getElementById("card").classList.toggle("cards");
// }
// var array = [1, 2, 3, 4, 5, 6, 7];
// var array_two = [8, 9, 10];
// var list = array.concat(array_two);
// user = {
//   age: 18,
//   isname: "Alex",
//   isEnterUni: true,
//   sayHi: function () {
//     console.log(this.isname + " hi!");
//   },
// };

// people = {
//   age: 18,
//   isname: "Vitya",
//   isEnterUni: true,
// };

// if (user.isEnterUni == true) {
//   isUni.innerHTML = user.isname + " study in University";
// }

// if (user.age < 20) {
//   userNext = {
//     age: 25,
//     Name: "Sergey",
//     isEnterUni: true,
//   };
// }
// console.log(userNext.age);

// var k = 100;
// do {} while (k < 50);
// {
//   k -= 100;
//   console.log(k);
// }
// user.sayHi();
// people.sayHi = user.sayHi;
// people.sayHi();

// var sum = [4, 8, 1, 1, -2];

// function isPos(num) {
//   return num > 0;
// }
// console.log(sum.every(isPos));
// console.log(sum.some(isPos));

// function numberGen() {
//   var num = 1;
//   function check() {
//     console.log(num);
//   }
//   num++;
//   return check;
// }

// var number = numberGen();
// number();
//замыкание
// function calc(n) {
//   return function (num) {
//     return console.log(n * num);
//   };
// }
// const multy = calc(10);
// multy(22);

// var calculate = calc(5);
// calculate();
//промисы
// const prom = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Data prepare");
//     const back = {
//       server: "Asd",
//       port: 2000,
//       status: "working",
//     };
//     resolve(back);
//   }, 2000);
// });

// prom.then((back) => {
//   console.log("ok!", back);
// });

//object.create
// const person = Object.create(
//   {
//     calcAge() {
//       console.log("Age:", new Date().getFullYear() - this.birth);
//     },
//   },
//   {
//     name: {
//       value: "Sergey",
//       enumerable: true,
//       writable: true,
//       configurable: true,
//     },
//     birth: {
//       value: 2001,
//       enumerable: true,
//     },
//     age: {
//       get() {
//         return new Date().getFullYear() - this.birth;
//       },
//       set(value) {
//         document.body.style.background = "red";
//         console.log(value);
//       },
//     },
//   }
// );
// console.log(person);

// //person.name = "Sergyolly";

// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log(key, ":", person[key]);
//   }
// }
//классы
// const animal = {
//   name: "Animal",
//   age: 5,
//   hasTail: true,
// };
//Классы
// class Animal {
//   static type = "ANIMAL";
//   constructor(options) {
//     this.name = options.name;
//     this.age = options.age;
//     this.hasTail = options.hasTail;
//   }
//   voice() {
//     console.log("Way");
//   }
// }
// const animal = new Animal({
//   name: "Animal",
//   age: 25,
//   hasTail: true,
// });
// class Cat extends Animal {
//   static type = "CAT";
//   constructor(options) {
//     super(options);
//     this.color = options.color;
//   }
//   voice() {
//     super.voice();
//     console.log("Meow");
//   }
//   get ageInfo() {
//     return this.age * 7;
//   }
//   set ageInfo(newAge) {
//     this.age = newAge;
//   }
// }
// const cat = new Cat({
//   name: "Cat",
//   age: 2,
//   hasTail: true,
//   color: "Red",
// });
// class Component {
//   constructor(selector) {
//     this.sel = document.querySelector(selector);
//   }

//   hide() {
//     this.sel.style.display = "none";
//   }
//   show() {
//     this.sel.style.display = "block";
//   }
// }
// class Box extends Component {
//   constructor(opt) {
//     super(opt.selector);
//     this.sel.style.background = opt.color;
//     this.sel.style.width = opt.size + "px";
//     this.sel.style.height = opt.size + "px";
//   }
// }
// const box1 = new Box({
//   selector: "#box1",
//   size: 100,
//   color: "red",
// });
// const box2 = new Box({
//   selector: "#box2",
//   size: 100,
//   color: "blue",
// });
// class Circle extends Box {
//   constructor(opt) {
//     super(opt);
//     this.sel.style.borderRadius = "50%";
//   }
// }
// const circle = new Circle({
//   selector: "#circ",
//   size: 100,
//   color: "green",
// });
//async await
// const delay = (ms) => {
//   return new Promise((r) => setTimeout(() => r(), ms));
// };

// function fetchTodos() {
//   return delay(2000).then(() => {
//     return fetch("https://jsonplaceholder.typicode.com/todos").then((r) =>
//       r.json()
//     );
//   });
// }
// fetchTodos().then((data) => console.log(data));

// async function fetchAsync() {
//   console.log("Start");
//   try {
//     await delay(2000);
//     const r = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const data = await r.json();
//     console.log(data);
//   } catch (e) {
//     console.error(e);
//   } finally {
//     console.log("Responce requests");
//   }
// }
// fetchAsync();
//Proxy????????

// const person = {
//   name: "Serg",
//   age: 19,
// };
// const op = new Proxy(person, {
//   get(target, prop) {
//     if (!(prop in target)) {
//       return prop
//         .split("_")
//         .map((p) => target[p])
//         .join(" ");
//     }
//     return target[prop];
//   },
//   set(target, prop, value) {
//     if (prop in target) {
//       target[prop] = value;
//     } else {
//       throw new Error("No prop in target");
//     }
//   },
//   has(target, prop) {
//     return ["name", "age"].includes(prop);
//   },
//   deleteProperty(target, prop) {
//     console.log("Delete...");
//     delete target[prop];
//     return true;
//   },
// });

// //funcproxy

// const log = (text) => `log ${text}`;

// const fp = new Proxy(log, {
//   apply(target, thisArg, args) {
//     return target.apply(thisArg, args);
//   },
// });
// //class
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const PP = new Proxy(Person, {
//   construct(target, arg) {
//     console.log("Compiling...");
//     //можно завернуть в Proxy
//     return new Proxy(new target(...arg), {
//       get(t, prop) {
//         console.log(`Get prop ${prop}`);
//         return t[prop];
//       },
//     });
//   },
// });

// const p = new PP("Maxim", 22);

// const defPos = (target, defVal = 0) => {
//   return new Proxy(target, {
//     get: (obj, prop) => (prop in obj ? obj[prop] : defVal),
//   });
// };

// const position = defPos(
//   {
//     x: 1,
//     y: 1,
//   },
//   2
// );

// const withHid = (target, pref = "_") => {
//   return new Proxy(target, {
//     has: (obj, prop) => prop in obj && !prop.startsWith(pref),
//     ownKeys: (obj) => Reflect.ownKeys(obj).filter((p) => !p.startsWith(pref)),
//     get: (obj, prop, receive) => (prop in receive ? obj[prop] : void 0),
//   });
// };

// const pos = withHid({
//   name: "Sergey",
//   age: 19,
//   _second: "Epishko",
// });

// const IndexedArr = new Proxy(Array, {
//   construct(target, [args]) {
//     const index = {};
//     args.forEach((item) => (index[item.id] = item));
//     return new Proxy(new target(...args), {
//       get(arr, prop) {
//         switch (prop) {
//           case "push":
//             return (item) => {
//               index[item.id] = item;
//               arr[prop].call(arr, item);
//             };
//           case "findById":
//             return (id) => index[id];
//           default:
//             return arr[prop];
//         }
//       },
//     });
//   },
// });

// const userData = new IndexedArr([
//   { id: 1, name: "Sergey", age: 22 },
//   { id: 2, name: "Sasha", age: 23 },
//   { id: 3, name: "Anya", age: 15 },
//   { id: 4, name: "Katya", age: 27 },
// ]);
//
//Proto
// const personTit = new Object({
//   name: "Max",
//   age: 22,
//   greet: function () {
//     console.log("Greet " + this.name);
//   },
// });
// function name(params) {}

// Object.prototype.sayHello = function () {
//   console.log("Hello " + this.name);
// };
// const lena = Object.create(personTit);
// lena.name = "Lena";

// this/////////////////////// this/////////////////////// this/////////////////////// this/////////////////////
// function hello() {
//   console.log("Hello ", this);
// }
// const per = {
//   name: "Sergey",
//   age: 20,
//   sayHi: hello,
//   sayHiWindow: hello.bind(this),
//   logInfo: function () {
//     console.log(`Name is ${this.name}`);
//   },
// };
// const lena = {
//   name: "Lena",
//   age: 21,
// };
// per.logInfo.bind(lena)();

const items = [];

function fetchingData() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((r) => r.json())
    .then((r) => items.push(...r));

  items.forEach((item) => {
    document.querySelector(".info").innerHTML += `
    <p class="item">${item.title}</p>
    `;
  });
}

function matrix(w, h) {
  let result = new Array(h).fill().map(() => new Array(w));
  let counter = 1;
  let startRow = 0;
  let endRow = h - 1;
  let startCol = 0;
  let endCol = w - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      result[i][endCol] = counter;
      counter++;
    }
    endCol--;

    for (let i = endCol; i >= startCol; i--) {
      result[endRow][i] = counter;
      counter++;
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      result[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }
  return result;
}

console.log(matrix(5, 5));
console.log("Hi Git");
