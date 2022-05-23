

document.getElementById('submit-comment').addEventListener('click', function () {
    // console.log('clicked');
    const commentBox = document.getElementById('new-comment')
    // const userComment = commentBox.value;


    const newComment = document.createElement('p');
    newComment.innerText = commentBox.value;


    const commentContainer = document.getElementById('comment-container')
    commentContainer.appendChild(newComment)

    commentBox.value = '';
})