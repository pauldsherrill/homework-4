const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submitButton = document.getElementById('submit');

function createBlog() {
    const blog = {
        username: usernameInput.value,
        title: titleInput.value,
        content: contentInput.value.trim(),
    };

    const blogs = JSON.parse(localStorage.getItem('blog'));

    if (blogs) {
        blogs.push(blog);
        localStorage.setItem('blog', JSON.stringify(blogs));
    } else {
        const blogsInitializer = [blog];
        localStorage.setItem('blog', JSON.stringify(blogsInitializer));
    }
}

function renderMessage(){
    document.querySelector('h3').textContent = "Please complete the form";
}

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    if (usernameInput.value === "" || titleInput.value === "" || contentInput.value === "") {
        renderMessage();
    } else {
        createBlog();
        window.location.href = './blog.html';
    }
});




  