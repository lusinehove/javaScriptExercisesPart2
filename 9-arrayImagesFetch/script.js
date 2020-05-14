function fetchDogs() {
    
    var container = document.getElementById('outPut');
    
    fetch('https://dog.ceo/api/breeds/image/random/10')
    .then(function(response) {
        return response.json();
    }).then(function(data){
        
        var images = data.message;
        console.log(images);
        
        for( var i = 0; i < images.length; i++){
            
            var content = document.createElement('p');
            var image = document.createElement('img');
            
            var breedsArray = images[i].split('/');
            var breed = breedsArray[4].toUpperCase();
            
            content.innerHTML = breed;
            image.src = images[i];
            
            container.appendChild(content);
            content.appendChild(image);
        }
    
        
    });
    
}
fetchDogs();