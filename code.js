
const displayOnPage = document.querySelector("main");
const startGameButton = document.createElement('button');
startGameButton.innerText = 'Start New Game';
displayOnPage.append(startGameButton);
const result = document.createElement('h1')
const categoryDisplay = document.querySelector('#category')
const questionDisplay = document.querySelector('#question')
displayOnPage.append(categoryDisplay);
displayOnPage.append(questionDisplay);

let counter = 0
let scoreNumber = document.getElementById("scoreNumber")
scoreNumber.innerHTML = ` Score : ${counter}`

let randomClue;
const randomNum = Math.floor(Math.random() * 100)
let index
let Category 
let Question
let Answers
let titleCategory
let gameArray
fetch(`https://jservice.kenzie.academy/api/clues/?category=${randomNum}`)
   .then(response => response.json())
   .then(data => {
        index = 0
       console.log(data)
       Question = data.clues[index].question;
       titleCategory = data.clues[index].category.title;
       Category = data.clues[index].category.id
       Answers = data.clues[index].answer;
       gameArray = {Question, Category, Answers, titleCategory}
       console.log(gameArray.titleCategory)
        console.log(gameArray.Question)
       console.log(gameArray.Answers)
        
    })

function stayIncat(){
    fetch(`https://jservice.kenzie.academy/api/clues/?category=${Category}`)
    .then(response => response.json())
    .then(data => {
        index ++
        titleCategory = data.clues[0].category.title;
        Question = data.clues[index].question;
        Answers = data.clues[index].answer;
        gameArray = {Question,Answers, titleCategory}
        console.log(data)
        console.log(Question)
        console.log(Answers)
        renderGame()
    })
 }
function renderGame(){
    categoryDisplay.innerText = `Category: ${gameArray.titleCategory}`
    questionDisplay.innerText = `Question: 
    ${gameArray.Question}`
}
const input = document.querySelector("#user-input")
input.addEventListener("submit", event =>{
    event.preventDefault()
    const form = event.target
    const userGuess = form.elements.guess.value.toLowerCase().toString()
    const correctGuess = userGuess === gameArray.Answers.toLowerCase().toString()
    //if condition for the length in the correct answer stretch goal
    if (correctGuess) {
        displayOnPage.append(result);
        result.innerText = "Correct!"
        counter += 1;
        scoreNumber.innerHTML = ` Score: ${counter}`
        stayIncat();
        
        form.reset()
    }else{
        displayOnPage.append(result);
        result.innerText = "Incorrect! Game Over!"
        counter = 0;
        setTimeout(() => {
        location.reload()}, 3000)
    } 
    
}) 
startGameButton.addEventListener('click', renderGame)




