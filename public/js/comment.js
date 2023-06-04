const loadComments = async (id) => {
    const response = await fetch(`/api/blogs/comments/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });

    console.log(response);

    const data = await response.json(); // array of objects
    console.log(data);
}

const postComment = async (event) => {

}

const viewCommentBtns = document.querySelectorAll('.view-comments');

for (let i = 0; i < viewCommentBtns.length; i++) {
    viewCommentBtns[i].addEventListener('click', function() {
        const id = i + 1;
        console.log('Blog ID: ' + id);

        const response = loadComments(id);
    });
}

// document.querySelectorAll('.leave-comment').addEventListener('click', postComment);