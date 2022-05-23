
function makered() {
    document.body.style.backgroundColor = '#FFA500';
}

const blueButton = document.getElementById('blue-button-make');
// console.log(blueButton);
blueButton.onclick = makeblue;

function makeblue() {
    document.body.style.backgroundColor = '#191970';
}


const greenButon = document.getElementById('green-button-mak');
// console.log(greenButon);
greenButon.onclick = function() {
    document.body.style.backgroundColor = '#EE82EE';
}


const guldenButton = document.getElementById('gulden-button-mod');
// console.log(guldenButton);
guldenButton.addEventListener('click', makeGulden);

function makeGulden() {
    document.body.style.backgroundColor = '#9ACD32';
}

const hotPink = document.getElementById('make-hot');
// console.log(hotPink);
hotPink.addEventListener('click', function make() {
    document.body.style.backgroundColor = '#FF7F50'
})


document.getElementById('light-blue').addEventListener('click', function() {
    document.body.style.backgroundColor = '#1E90FF';
})