// ------------------- Типы для селекторов. --------------------------------------------------- //

// Сушествет три типа 

/* 
    для DOM совместно с ts мы используем HTML елементы как их типы.

    И Type Script не имеет возможность вывзвать елементы прямо из id
    для этого нужно только использовать селекторов.
*/

// Generic
document.querySelector<HTMLButtonElement>("b");

// Type Assertion (Old method)
<HTMLParagraphElement>document.querySelector("p");

// Type Assertion ( Casting )
document.querySelector("a") as HTMLAnchorElement;



// ------------------------------  Events Types  -------------------------------------------//

/*
    В TypeScript дозволено писать тип даже для events:
*/

const myButton = document.createElement("button");
myButton.addEventListener("click" , (e:MouseEvent) => alert(e));

// ------------------------- Collection Types ------------------------------------------ //

// NodeList
const NodeLists:NodeList = document.querySelectorAll(".same"); // используй если елементы разные но селектор одинаковый
const NodeAsList = document.querySelectorAll(".same") as NodeList; // используй если елементы разные но селектор одинаковый

const Nodes = document.querySelectorAll("p") as NodeListOf<HTMLParagraphElement>; // используй если елементы одинаковые
const Nodejs:NodeListOf<HTMLParagraphElement> = document.querySelectorAll("p"); // используй если елементы одинаковые
const nodJS = document.querySelectorAll<HTMLParagraphElement>("p"); // используй если елементы одинаковые


// HTML Collection
const collections = document.getElementsByTagName("li") as HTMLCollectionOf<HTMLLIElement>; // используй если елементы одинаковые
const collect:HTMLCollectionOf<HTMLLIElement> = document.getElementsByTagName("li"); // используй если елементы одинаковые
const coll = document.querySelectorAll<HTMLLIElement>("li"); // используй если елементы одинаковые

const collection:HTMLCollection = document.getElementsByClassName("same");  // используй если елементы разные но селектор одинаковый
const col = document.getElementsByClassName("same") as HTMLCollection;  // используй если елементы разные но селектор одинаковый


// ---------------------- Installing Vanilla(TS) ----------------------------------------- //
/*
    npm install (i) vite@latest fileName( .)
    vanilla(typescript)
*/