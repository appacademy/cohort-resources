// console.log("this is the top of file1");

class Drink {

    constructor(type, size) {
        this.type = type;
        this.size = size;
    }
}

export const coffee = new Drink("Mocha", "Venti");
export const smoothie = new Drink("Fruit smoothie", "Medium");
export const tea = new Drink("English Bfast", "Small");

// console.log("this is b4 my exports");

// module.exports = { coffee, smoothie, tea, Drink};

// console.log("this is the bottom of file1");
