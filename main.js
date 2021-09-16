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

    static generateField(height, width) {
        let result = [];
        for (var i = 0; i < height; i++) {
            result[i] = []
            for (var j = 0; j < width; j++) {
                result[i][j] = '*'
            }
        }
    }
}

const myField = Field.generateField(5, 5)
console.log(myField)
new Field(myField)

const name = prompt("What is your name?");
console.log(`Hi ${name}, let's find the hat!`);

// myField.print();

const move = prompt("Which direction do you want to go?");