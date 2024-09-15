
const pinkButton = document.getElementById('make-pink');

pinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'pink';
});

const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
});

// mainly used 

document.getElementById('make-orange').addEventListener('click', function(){
    document.body.style.backgroundColor = 'orange';
});
