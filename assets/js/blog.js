// back to 1pg
const backButton = document.querySelector('#backBtn');

backButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.replace("./index.html");
});