

function clickBlue() {
    document.body.style.backgroundColor = 'blue'
}


document.getElementById('email-field').addEventListener('keyup', function() {
   console.log(event.target.value);
})


document.getElementById('mouse-header').addEventListener('mousemove', function() {
    console.log('mouse is creating is sursuri');
})

document.getElementById('mouse-header').addEventListener('mouseenter', function() {
    console.log('mouse is creating is sursuri');
})

document.getElementById('mouse-header').addEventListener('mouseover', function() {
    console.log('mouse is creating is sursuri');
})