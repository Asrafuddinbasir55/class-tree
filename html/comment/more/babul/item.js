
document.getElementById('second-item').addEventListener('click', function(event) {
    console.log('second1 item click');
    // event.stopPropagation();
    event.stopImmediatePropagation();
})

document.getElementById('second-item').addEventListener('click', function(event) {
    console.log('second2 item click');
    event.stopPropagation();
})

document.getElementById('second-item').addEventListener('click', function(event) {
    console.log('second3 item click');
    event.stopPropagation();
})

document.getElementById('second-item').addEventListener('click', function(event) {
    console.log('second4 item click');
    event.stopPropagation();
})




document.getElementById('list-container').addEventListener('click', function() {
    console.log('ul click');
})

document.getElementById('section-container').addEventListener('click', function() {
    console.log('section click');
})