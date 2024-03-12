const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');

function createAndRenderBlog() {
    const blog = {
        username: usernameInput.ariaValueMax,
        title: titleInput.ariaValueMax,
        content: contentInput.ariaValueMax,
    };

    const blogs = localStorage.getItem('blogs');
    localStorage.setItem('blog', JSON.stringify(blogs));
}