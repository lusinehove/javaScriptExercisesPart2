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
"https://images.dog.ceo/breeds/spaniel-cocker/n02102318_9307.jpg",
    
]

var content = '';
var image = '';

for(var i = 0; i < images.length; i++) {
//    console.log(images[i]);

//    <div><image /><button>Remove</button></div>
    
    var div = document.createElement('div');

    var image = document.createElement('img');
    
//    image.setAttribute('src', images[i]);
//    image.setAttribute('height', '100px');
//    image.setAttribute('width', '100px');
    
    image.src = images[i];
    
    var button = document.createElement('button');
    button.innerHTML = 'Remove';
    
    div.appendChild(image);
    div.appendChild(button);
    
    var put = document.getElementById('outPut');
    put.appendChild(div);
 
}

var parentEl = document.getElementById('outPut');

parentEl.addEventListener('click', function(e) {
    
    parentEl.removeChild(e.target.parentElement);
    
    console.log(e.target);
}
                         
)


    
