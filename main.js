const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
    constructor(fieldArray) {
        this._fieldArray = fieldArray;
    }

    print() {
        for (var i = 0; i < this._fieldArray.length; i++) {
            console.log(this._fieldArray[i].join(""));
        }
    }
}

const myField = new Field([
    ["*", "░", "O"],
    ["░", "O", "░"],
    ["░", "^", "░"],
]);

const name = prompt("What is your name?");
console.log(`Hi ${name}, let's find the hat!`);

myField.print();
