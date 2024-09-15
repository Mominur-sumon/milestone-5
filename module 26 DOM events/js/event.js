console.log("hello from event.js");

const makeBlueButton = document.getElementById('makeBlue');
makeBlueButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'blue';
});


function makeRed() {
    document.body.style.backgroundColor = 'red';
}
   