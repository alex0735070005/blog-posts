var url = 'http://blog.api.axenov-it.com/posts';

function format(reponce) {
    return reponce.json();
}

function render(data) {
    var container = document.querySelector('#list-posts');

    data.forEach(function (post) {
        var template = document.createElement('div');
        template.className = 'post';

        var h2 = document.createElement('h2');
        h2.innerHTML = post.title;

        var likes = document.createElement('i');
        likes.innerHTML = post.likes;

        var p = document.createElement('p');
        p.innerHTML = post.description;

        template.append(h2, p, likes);

        container.appendChild(template);
    })
}


fetch(url)
    .then(format)
    .then(render);
