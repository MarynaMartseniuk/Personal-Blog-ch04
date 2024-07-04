// save new post to Local Storage

const userNameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submitBtn');

var postsList = JSON.parse(localStorage.getItem("blogLSKey")) || [];
var addNewPost = {};

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    console.log(userNameInput.value);
    console.log(titleInput.value);
    console.log(contentInput.value);


    if (userNameInput.value && titleInput.value && contentInput.value) {

        addNewPost =  {
            userName: userNameInput.value,
            title: titleInput.value,
            content: contentInput.value
        };

        postsList.push(addNewPost);
            
        localStorage.setItem("blogLSKey", JSON.stringify(postsList));
        userNameInput.value = "";
        titleInput.value = "";
        contentInput.value = "";
        window.location.replace("./blog.html");

    } else {
        alert("Please, fill in all sections to save your post!");
    };
});