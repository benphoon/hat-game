// Game Logic
const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
    constructor(fieldArray) {
        this._fieldArray = fieldArray
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
                result[i][j] = '░'
            }
        }
        return result;
    }
}


// Program Start
const name = prompt("What is your name?");
console.log(`Hi ${name}, let's find the hat!`);
console.log("You are here '*', explore the field '░' to find your hat '^' and mind the gaps 'O'.")

let myField = new Field(Field.generateField(4,4))
myField.print()

// Movement Loop
const move = prompt("Which direction do you want to go?");
