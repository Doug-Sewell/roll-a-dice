document.getElementById('dice-roll').addEventListener('click',(e) => {
    let diceAmount = document.getElementById('dice-text').value;
    diceAmount = Number(diceAmount);
    const randomNum = Math.round(Math.random()*diceAmount);
    if(isNaN(randomNum)) {
        alert('Please add a valid number.');
    } else {
        alert(`You rolled a ${randomNum}`);
    }
});

const handleForm = (e) => {
    e.preventDefault();
}

document.getElementById('userInput').addEventListener('submit', handleForm);

