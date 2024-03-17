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

    localStorage.setItem('blog', JSON.stringify(blog));

    usernameInput.textContent = "";
    titleInput.textContent = "";
    usernameInput.textContent = "";
}

function renderMessage(){
    document.querySelector('h3').textContent = "Please complete the form";
}

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    if (usernameInput.value || titleInput.value || contentInput.value !== null) {
        createBlog();
    } else {
        renderMessage();
    }
});




  