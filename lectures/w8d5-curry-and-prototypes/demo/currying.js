function boringAddThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}

// function coolAddThreeNumbers(num1) {
//     return function(num2) {
//         return function(num3) {
//             return num1 + num2 + num3;
//         }
//     }
// }

// const coolAddThreeNumbers = num1 => {
//     return num2 => {
//         return num3 => {
//             return num1 + num2 + num3;
//         }
//     }
// }

const coolAddThreeNumbers = num1 => num2 => num3 => num1 + num2 + num3;

const bestAddThreeNumbers = () => {
    
    const args = [];
    return (num) => {
        console.log(this);
        args.push(num);
        if (args.length === 3) {
            return args.reduce((acc, el) => {
                return acc + el;
            });
        }
    }
}