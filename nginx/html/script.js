document.addEventListener('DOMContentLoaded', () => {
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => displayPosts(posts))
        .catch(error => console.error('Error loading posts:', error));
});

function displayPosts(posts) {
    const container = document.getElementById('posts-container');
    posts.forEach(post => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h2>${post.title}</h2>
            <p><em>${post.date}</em></p>
            <p>${post.content}</p>
            <hr>
        `;
        container.appendChild(article);
    });
}
