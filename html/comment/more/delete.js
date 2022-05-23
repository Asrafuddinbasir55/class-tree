
document.getElementById('delete-btn').addEventListener('click', function() {
    document.getElementById('secret-info').style.display = 'none';
})


document.getElementById('delete-confirm').addEventListener('focus', function() {
    // document.getElementById('secret-info').style.display = 'none';
    // console.log('oe amer dike takai na');
    document.body.style.backgroundColor = 'green';
})

document.getElementById('delete-confirm').addEventListener('blur', function() {
    document.body.style.backgroundColor = 'white';
})

// document.getElementById('delete-confirm').addEventListener('keydown', function() {
//     document.body.style.backgroundColor = 'white';
//     const deletefield = document.getElementById('delete-confirm')
//     console.log('deletefield.value');
// })

// document.getElementById('delete-confirm').addEventListener('keypress', function() {
//     document.body.style.backgroundColor = 'white';
//     const deletefield = document.getElementById('delete-confirm')
//     console.log('deletefield.value');
// })

document.getElementById('delete-confirm').addEventListener('keyup', function(event) {
    const deleteBttn = document.getElementById('delete-btn')
     if(event.target.value == 'delete') {
        deleteBttn.removeAttribute('disabled').removeAttribute('disabled')
     } else {
        deleteBttn.setAttribute('disabled', true) 
     }
})


document.getElementById('delete-confirm').addEventListener('change', function() {
    document.body.style.backgroundColor = 'white';
    const deletefield = document.getElementById('delete-confirm')
    console.log('deletefield.value');
})