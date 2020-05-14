var images = [
"https://images.dog.ceo/breeds/samoyed/n02111889_13924.jpg",
"https://images.dog.ceo/breeds/leonberg/n02111129_4017.jpg",
"https://images.dog.ceo/breeds/schnauzer-giant/n02097130_1213.jpg",
"https://images.dog.ceo/breeds/borzoi/n02090622_6408.jpg",
"https://images.dog.ceo/breeds/pekinese/n02086079_13897.jpg",
"https://images.dog.ceo/breeds/pointer-german/n02100236_873.jpg",
"https://images.dog.ceo/breeds/spaniel-irish/n02102973_3303.jpg",
"https://images.dog.ceo/breeds/spaniel-sussex/n02102480_6995.jpg",
"https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_4058.jpg",
"https://images.dog.ceo/breeds/spaniel-cocker/n02102318_9307.jpg"
]

var content = '';
var image = '';

for(var i = 0; i < images.length; i++) {
    
    var breedsArray = images[i].split("/");
    console.log(breedsArray);
    
    var breed = breedsArray[4].toUpperCase();
    console.log(breed);
    
    image = `<img src="${images[i]}">`;
    content += '<p>' + (i+1) + '. ' + breed + image + '</p>';
    
}

 document.getElementById('outPut').innerHTML = content;
