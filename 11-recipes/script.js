var document = document || {};


function getRecipes() {
    
    var mySearch = document.getElementById('mySearch').value

    var container = document.getElementById('outPut');

    fetch(`https://api.spoonacular.com/recipes/search?query=${mySearch}&number=10&apiKey=91b95939da654bce89b6eb7840578ec9&diet=vegetarian`)
        .then(response => response.json())
        .then(data => {

            var recipes = data.results;
            //            console.log(recipes);


            for (var i = 0; i < recipes.length; i++) {

                var content = document.createElement('div');
                var contentImage=document.createElement('div');
                var image = document.createElement('img');
                var text = document.createElement('p');

                var imageRecipe = data.baseUri + recipes[i].image;
                console.log(imageRecipe);

                var nameRecipe = recipes[i].title;
                console.log(nameRecipe);

                content.setAttribute('id', 'content');
                contentImage.setAttribute('id', 'contentImage');
                image.setAttribute('class', 'portrait');
                
                image.src = imageRecipe;
                text.innerHTML = nameRecipe;

                container.appendChild(content);
                content.appendChild(contentImage);
                contentImage.appendChild(image);
                content.appendChild(text);

            }


        })
}