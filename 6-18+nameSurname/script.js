var document = document || {};


var nameList = [];

var table = document.createElement('table');
var tBody = document.createElement('tbody');
table.appendChild(tBody);

function checkTheAge() {

    var userName = document.getElementById('userName').value;

    var userSurname = document.getElementById('userSurname').value;

    var userProf = document.getElementById('userProf').value;

    var userAge = document.getElementById('userAge').value;

    if (userAge >= 18) {

        var row = document.createElement('tr');
        var array = [userName, userSurname, userProf, 'x'];
        
        
        for (var i = 0; i < array.length; i++) {
            
            var column1 = document.createElement('td');
            
            if (i === array.length-1) {
                var userText = document.createElement('button');
                userText.innerHTML = 'Remove';
            }
            
            else {
                var userText = document.createTextNode(array[i]);
            }
            
            column1.appendChild(userText); 

            row.appendChild(column1);
        }
        
        table.addEventListener('click', function(e) {
            var tr = e.target.parentElement.parentElement;
            tBody.removeChild(tr);
        });
        
        tBody.appendChild(row);
        
       document.getElementById('outPut').appendChild(table);

    } else {
        alert('Sorry. You need to be an adult!')
    }

    document.getElementById("userName").value = '';
    document.getElementById("userSurname").value = '';
    document.getElementById("userProf").value = '';
    document.getElementById("userAge").value = '';
}
