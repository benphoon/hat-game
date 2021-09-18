// Game Logic
const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
    constructor(fieldArray) {
        this._fieldArray = fieldArray
        this._playerPosition = fieldArray[0][0]
    }

    print() {
        for (var i = 0; i < this._fieldArray.length; i++) {
            console.log(this._fieldArray[i].join(""));
        }
    }

    gameLoop() {
        
    }

    checkWin() {
        if (this._playerPosition === hatPosition) {
            console.log(`Congratulations ${name}, you found the hat!`);
            break
        }
    }

    static generateField(height, width) {
        let result = [];
        // Generate blank field
        for (var i = 0; i < height; i++) {
            result[i] = []
            for (var j = 0; j < width; j++) {
                result[i][j] = "░"
            }
        }
        
        // Place 8 holes on field
        for (var h = 0; h < 8; h++) {
            result[Math.floor(Math.random()*height)][Math.floor(Math.random()*width)] = "O"
        }

        // Place random hat on field
        result[Math.floor(Math.random()*height)][Math.floor(Math.random()*width)] = "^"

        // Place user starting point on field
        result[0][0] = "*"

        return result;
    }
}


// Program Start
const name = prompt("What is your name?");
console.log(`Hi ${name}, let's find the hat!`);
console.log("You have explored here '*', look through the field '░' to find your hat '^' and mind the gaps 'O'.")

let myField = new Field(Field.generateField(7,7))
myField.print()
myField.gameLoop()

// Game Loop
// const move = prompt("Which direction do you want to go?");


// Need to do the following:
// - randomise field generations to include holes and the hat - DONE!
// - incorporate movement and change field items to reflect exploration
// - fix the hat position variable in the win condition