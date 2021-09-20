// Game Logic
const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
    constructor(fieldArray) {
        this._fieldArray = fieldArray;
        this._playerPositionVertical = 0;
        this._playerPositionHorizontal = 0;
        this._hatPositionVertical = 0;
        this._hatPositionHorizontal = 0;
    }

    print() {
        for (var i = 0; i < this._fieldArray.length; i++) {
            console.log(this._fieldArray[i].join(""));
        }
    }

    findHat() {
        let hatPosition = [];
        for (var i = 0; i < this._fieldArray.length; i++) {
            var index = this._fieldArray[i].indexOf("^");
            if (index > -1) {
                hatPosition = [i, index];
                this._hatPositionVertical = hatPosition[0];
                this._hatPositionHorizontal = hatPosition[1];
            }
        }
    }

    move() {
        let direction = prompt(
            "Which direction would you like to go? (u/d/l/r): "
        );
        if (direction === "u") {
            this._fieldArray[this._playerPositionVertical - 1][
                this._playerPositionHorizontal
            ] = pathCharacter;
            this._playerPositionVertical -= 1;
        } else if (direction === "d") {
            this._fieldArray[this._playerPositionVertical + 1][
                this._playerPositionHorizontal
            ] = pathCharacter;
            this._playerPositionVertical += 1;
        } else if (direction === "l") {
            this._fieldArray[this._playerPositionVertical][
                this._playerPositionHorizontal - 1
            ] = pathCharacter;
            this._playerPositionHorizontal -= 1;
        } else if (direction === "r") {
            this._fieldArray[this._playerPositionVertical][
                this._playerPositionHorizontal + 1
            ] = pathCharacter;
            this._playerPositionHorizontal += 1;
        } else {
            console.log("Please enter a valid direction.");
        }
    }

    checkWin() {
        if (
            this._playerPositionVertical === this._hatPositionVertical &&
            this._playerPositionHorizontal === this._hatPositionHorizontal
        ) {
            console.log(`Congratulations ${name}, you found the hat!`);
            return true;
        } else {
            return false;
        }
    }

    static generateField(height, width) {
        let result = [];
        // Generate blank field
        for (var i = 0; i < height; i++) {
            result[i] = [];
            for (var j = 0; j < width; j++) {
                result[i][j] = fieldCharacter;
            }
        }

        // Place 8 holes on field
        for (var h = 0; h < 8; h++) {
            result[Math.floor(Math.random() * height)][
                Math.floor(Math.random() * width)
            ] = hole;
        }

        // Place random hat on field
        result[Math.floor(Math.random() * height)][
            Math.floor(Math.random() * width)
        ] = hat;

        // Place user starting point on field
        result[0][0] = pathCharacter;

        return result;
    }
}

// Program Start
const name = prompt("What is your name? ");
console.log(`Hi ${name}, let's find the hat!`);
console.log(
    "You have explored here '*', look through the field '░' to find your hat '^' and mind the gaps 'O'."
);

let myField = new Field(Field.generateField(7, 7));
myField.print();
myField.findHat();

// Game Loop
while (myField.checkWin() === false) {
    myField.move();
    myField.print();
}

// To Do:
// - randomise field generations to include holes and the hat - DONE!
// - incorporate movement and change field items to reflect exploration - DONE!
// - Build game loop - DONE!
// - fix the hat position variable in the win condition - DONE!
// - incorporate game loss functionality (ie falling in hole, out of bounds)
