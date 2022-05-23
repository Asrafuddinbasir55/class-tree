
function justClick() {
    const p = document.getElementById('click-method');
    p.innerText = 'set by using '
}

document.getElementById('click-event').addEventListener('click', function() {
    const p = document.getElementById('click-event');
    p.innerText = 'direct click metod by function';
})

document.getElementById('update-name').addEventListener('click', function() {
    const nameField = document.getElementById('name-field')
    // console.log(nameField.value);
    const p = document.getElementById('click-method');
    p.innerText = 'clickMethod.value'
    clickMethod.value = '';
})
