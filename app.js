function randomNum(n) {
    return Math.floor(Math.random() * n) + 1;
  }


function getName () {
    let result = prompt(`Please enter your name`)
    return result
}

function playAgain () {
    let answer = prompt(`Would you like to play again? Please enter "YES" or "NO"`)
    if (answer.toLowerCase() === 'yes') {
        playGame()
    } else if (answer.toLowerCase() === 'no') {
        alert(`Thanks for playing!`)
    } else {
        prompt(`Please enter "YES" or "NO"`)
    }
    
}

let players = {}

function playGame () {
let secretNumber = randomNum(10);
let name = getName()
let guess = prompt(`Try to guess the secret number between 1 and 10 ${name}`)
let number = Number(guess)
let tries = 1
let keepTrack = [number]

    while (!Number.isInteger(number) || guess === '') {
    number = Number(prompt(`Oops, try again ${name}, please enter a whole number: `))
}

while (number !== secretNumber) {
    if (guess === null) {
        alert(`Goodbye`)
        return;
    } if (number < secretNumber) {
    number = Number(prompt(`Your guess was too low ${name}, Try Again`))
    tries++
  } else if (number > secretNumber) {
    number = Number(prompt(`Your guess was too high ${name}, Try Again`))
    tries++
  }
 giveTries(number)
}

if (number === secretNumber) {
    //alert(`Correct ${name}! The secret number was ${secretNumber}. It only took you ${tries} guesses!`)
    //alert(`Your previous guesses were ${keepTrack}`) 
    //playAgain()
    if (players[name] === undefined) {
        alert(`Correct! Your previous attempts were ${keepTrack}`)
        players[name] = keepTrack
    }
    if (players[name] !== undefined) {
        let numGuesses = keepTrack.length
        let prevGuesses = players[name].length
        if (numGuesses > prevGuesses) {
            alert(`That's Correct ${name} You did better in your last game by ${numGuesses - prevGuesses} guesses!`);
        } else {
            alert(`That's correct ${name}! And you beat your previous guesses by ${prevGuesses - numGuesses} guesses!`);
        } 
        players[name] = keepTrack
    }
}

playAgain()



function giveTries (input) {
    keepTrack.push(input)
    return keepTrack
}


}

playGame()






