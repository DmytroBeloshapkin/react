let postBox = document.getElementsByClassName('post-details')[0];
postBox.classList.add('postBox')

let commentsBox = document.getElementsByClassName('comments')[0];

let url = new URL(location.href);
let post = JSON.parse(url.searchParams.get('data'));
console.log(post);

let postId = document.createElement('p');
postId.innerHTML = `ID post: <b>${post.id}</b>`;
let postTitle = document.createElement('p');
postTitle.innerHTML = `Post title: <b>${post.title}</b>`;
let postBody = document.createElement('p');
postBody.innerHTML = `Body post: <i>${post.body}</i>`;

postBox.append(postId, postTitle, postBody);


fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(response => response.json())
    .then(comments => {
        for (const commentItem of comments) {
            let comment = document.createElement('div');
            comment.classList.add('comment');

            let commentId = document.createElement('p');
            commentId.innerText = commentItem.id;
            let commentName = document.createElement('p');
            commentName.innerText = commentItem.name;
            let commentEmail = document.createElement('p');
            commentEmail.innerText = commentItem.email;
            let commentBody = document.createElement('p');
            commentBody.innerText = commentItem.body;

            comment.append(commentId, commentName, commentEmail, commentBody);
            commentsBox.appendChild(comment);
        }
    });


let home = document.createElement("button")
home.classList.add('home')
home.innerHTML = 'home'
document.body.append(home)

home.onclick = () => {
    location.href = `index.html`;
}

let more = document.createElement("button")
more.classList.add('more')
more.innerHTML = 'back to user details'
document.body.append(more)

more.onclick = () => {
    window.history.back();
}
