# Kenzie Academy JavaScript Assignment

Complete your work inside of `code.js`

Follow the instructions provided on my.kenzie.academy for this assignment.


Psuedo code game plan:
Task:
The app will use the jService API to create a trivia quiz where a user will be shown questions that 
they can respond to and receive points for answering correctly. 
If the user answers incorrectly, the score and game reset.

Requirements:
-Use fetch to pull questions from the API
-Present a single question to the user
-Allow the user to respond to the question
-Determine if the user's answer was correct
-A correct answer awards one (1) point and continues the game
-An incorrect answer resets the game and resets the score to zero (0)
-Keep track of and display a user's score


Steps & Goals:

Step One:Fetch the questions
Research the API and use HTTP request to determine what data comes back from the API. what clues and answers can you retrieve.
    -get random clues and make use of math.random()
    -get correct answers. are answers(case sensitive? lowercase? quotes? are Thes and stuff like that in the answer?) 
    -show the category 
    -show the correct answer when the answer is wrong

**Findings:**
Clues-https://jservice.kenzie.academy/api/clues - this gets a list of the clues
Random questions- https://jservice.kenzie.academy/api/random-clue?valid=true - gets a random clue and category from the actual jeopardy game
this console logs the quesiton,answer and category:
fetch('https://jservice.kenzie.academy/api/random-clue?valid=true')
    .then(response => response.json())
    .then((data) => {
        console.log(data.question)
        console.log(data.answer)
        console.log(data.category)
        })







Step Two: Present a single question to the user
Find a way to present the question to the user.
    -place the question in a h2 in the DOM
    -find a way to move onto the next question when its correct and update the score
    -make a new game button that starts the new game at zero

**findings**
need a function to show the question.
    


Step Three: Allow the user to repond to the question
Make some way the user can answer the question
    -use a form and have it input as a string. 
    -make a conditional

Step Four:Determine if the answer is correct:
Make a conditional that moves the game along or resets the game and resets the score to zero
-correct answers should give one point
-after the point is awarded. show a congrats message and update the score.
-have the message dissapear when they hit the "Next Question" button

Step Five: Keep track of users score
-display the score on the page and update regularly when they answer correctly.

Completion Criteria:
Use fetch to pull questions from the API
Present a single question to the user
Allow the user to respond to the question
Determine if the user's answer was correct
A correct answer awards one (1) point and continues the game
An incorrect answer resets the game and resets the score to zero (0)
Keep track of and display a user's score
