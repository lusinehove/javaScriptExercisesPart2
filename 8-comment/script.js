var document = document || {};



function count() {

    var name = document.getElementById('name').value;

    var surName = document.getElementById('surName').value

    var inputText = document.getElementById("myText").value;
    
    
    var comments = document.createElement('div');
    
    var inicials = document.createElement('span');
    
    var commentText = document.createElement('div');
    
    inicials.innerHTML = (name.charAt(0) + '.' + surName.charAt(0));
    commentText.innerHTML = (inputText);
    
    inicials.setAttribute('id', 'inicials');
    commentText.setAttribute('id', 'commentText');
    
    
    var removeButton = document.createElement('button');
    
    removeButton.innerHTML = 'x';
    removeButton.setAttribute ('id', 'remove');
    
    document.body.appendChild(comments);
    comments.appendChild(inicials);
    comments.appendChild(commentText);
    
    comments.appendChild(removeButton);
    
    comments.addEventListener('click', function(e) {
            var deleteComment = e.target.parentElement;
            document.body.removeChild(deleteComment);
        });

    document.getElementById("name").value = '';
    document.getElementById("surName").value = '';
    document.getElementById("myText").value = '';

}

