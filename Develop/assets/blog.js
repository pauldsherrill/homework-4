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
    document.getElementById('light-switch').innerHTML = "Light Mode";
}

function renderBlog() {
    const retrieveBlog = JSON.parse(localStorage.getItem('blog'));
    console.log(retrieveBlog);

    usernameDisplay.innerHTML = retrieveBlog.username;
    titleDisplay.innerHTML = retrieveBlog.title;
    contentDisplay.innerHTML = retrieveBlog.content;
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
