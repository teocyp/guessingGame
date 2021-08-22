let maximum = parseInt(prompt('Enter your maximum number!'));

while (!maximum) {
    maximum = parseInt(prompt('Please enter a valid number!'));
}


const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt('enter your first guess:'));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt('Too high! Enter a new guess:')
    } else {
        guess = prompt('Too low! Enter a new guess:')
    }
}

console.log(`You got it! It took you ${attempts} guesses..`);