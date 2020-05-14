var document = document || {};

var text = "To do something virtuous with a commonplace motive will certainly bring us some happiness, but only temporarily. Such happiness will soon be gone, and our helpless roaming in samsara will continue. If, on the other hand, everything we do, say, and think is transformed by bodhichitta, our happiness will go on and on increasing and never be exhausted. ";

var words = text.split(' ');

var content = '';


function myFunction() {

    var inputText = document.getElementById("myTextarea").value;

    var inputTextArray = inputText.split(' ');
    console.log(inputTextArray);

    var hasMistake = false;
    
    var countErrors = 0;
    
    
    for (var i = 0; i < inputTextArray.length; i++) {

        if (inputTextArray[i] !== words[i]) {
            hasMistake = true;
            content += '<p>' + inputTextArray[i] + ' - ' + words[i] + '</p>';
            countErrors++;
            
        }
    }

    if (hasMistake === true) {
    document.getElementById("conclusion").innerHTML = 'You have ' + countErrors + ' mistakes';
            
    document.getElementById('examples').innerHTML = content;
    
    }
    
    else {
    document.getElementById("conclusion").innerHTML = 'Excellent!'; 
    }
//document.getElementById("myTextarea").value = '';


    
}









//To get a mistakes number = to give a variable (for example mistakesCount) to document.getElementById("examples").innerHTML = inputTextArray + ' - ' + words, to make a 'for' and make mistakesCount++