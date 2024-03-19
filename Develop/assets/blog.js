const usernameDisplay = document.getElementById('username');
const titleDisplay = document.getElementById('title');
const contentDisplay = document.getElementById('content');
const modeButton = document.getElementById('light-switch');
const page = document.querySelector('*');
const blogBox = document.querySelector('div');
const heading = document.querySelector('h1');
const backButton = document.getElementById('back');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const footerText = document.querySelector('footer p');
const footerButton = document.querySelector('footer button');
const container = document.getElementById('blogs');


function renderBlog() {
    const blogs = JSON.parse(localStorage.getItem('blog'));
    for (const blog of blogs) {
        console.log(blog)
        const blogElement = document.createElement('div');
        container.appendChild(blogElement);
        
        const blogTitle = document.createElement('h2');
        blogTitle.id = "title";
        blogTitle.textContent = blog.title;
        blogElement.appendChild(blogTitle);

        const blogContent = document.createElement('p');
        blogContent.id = "content";
        blogContent.textContent = blog.content;
        blogElement.appendChild(blogContent);

        const blogUsername = document.createElement('p');
        blogUsername.id = "username";
        blogUsername.textContent = blog.username;
        blogElement.appendChild(blogUsername);
    }
}

function light() {
    page.setAttribute('style','background-color: white;');
    usernameDisplay.setAttribute('style','background-color: white; color: black;');
    titleDisplay.setAttribute('style','background-color: white; color: black;');
    contentDisplay.setAttribute('style','background-color: white; color: black;');
    blogBox.setAttribute('style','background-color: white; color: black; border: solid black 3px;');
    body.setAttribute('style','background-color: white;');
    heading.setAttribute('style','background-color: white; color: black; border-bottom: dashed black 3px;');
    modeButton.setAttribute('style','background-color: white; color: black;');
    backButton.setAttribute('style', 'background-color: white; color: black;');
    footer.setAttribute('style', 'background-color: white; color: black;');
    footerText.setAttribute('style', 'background-color: white; color: black;');
    footerButton.setAttribute('style','background-color: white; color: black;');
    container.setAttribute('style','background-color: white; color: black;');
    document.getElementById('light-switch').innerHTML = "Light Mode";
}

function init() {
    renderBlog();
}
init();

let count = 0;

modeButton.addEventListener('click', function (event) {
    event.preventDefault();
    
    if (count == 0) {
        light();
        count++;
    } else {
        location.reload();
    }
});

footerButton.addEventListener('click', function (event) {
    event.preventDefault();
    
    window.location.href = 'https://pauldsherrill.github.io/homework-2/';
});
