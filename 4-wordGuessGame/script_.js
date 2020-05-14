var game = "scarlett";

var taskArray = [ 
    {word: 'scarlett', description: 'It is a color'}, 
    {word: 'rainbow', description: 'It is a natural event'},
    {word: 'chrysanthemum', description: 'It is a flower'},
    {word: 'mercury', description: 'It is a planet'},
    {word: 'nelson mandela', description: 'It is a South African revolutioner'},
    {word: 'ingmar bergman', description: 'It is a Swedish filmmaker'},
    {word: 'tenzin gyatso', description: 'It is a Buddhist spiritual leader'},
    {word: 'titicaca', description: 'It is the largest lake in South America'},
    {word: 'carmel', description: 'It is a mountain mentioned in Bible'},
    {word: 'paedocypris progenetica', description: 'It is the smallest fish'},
]

var wordToMatch = Math.floor(Math.random()*10) +1;
var guessedWord = taskArray[wordToMatch];
//console.log(guessedWord);

var game = guessedWord.word;
console.log(game);

var titleLine = guessedWord.description;
console.log(titleLine);

document.getElementById('title').innerHTML = titleLine;

var content = '';

for(var i = 0; i < game.length; i++) {
    content += '_';
}
document.getElementById('outPut').innerHTML = content;

 

function initializeGame() {
    
    var guessingLetter = document.getElementById('letter').value;
    
    var isLetterFound = false;
    
    for(var i = 0; i < game.length; i++) {
        if (guessingLetter === game[i]) {
            content = content.substring(0, i) + guessingLetter + content.substring(i+1);
            isLetterFound = true;
        }
    }
    
    if (isLetterFound === false) {
        alert('Not Found');
    }
    
    document.getElementById('letter').value = '';
    document.getElementById('outPut').innerHTML = content;
    
    
}