let input = prompt("Guess a number")
let number = Number(input)

if(number.isNaN(number)) {
    alert('Please input valid number')
} else {
    alert('Got a number')
}
