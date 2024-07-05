// Save user data (post with title, content and authorName) to Local Storage

//input data
const userNameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submitBtn');

//other data
var postsList = JSON.parse(localStorage.getItem("blogLSKey")) || [];
var addNewPost = {};

//triger to action (to save the data) - click on the Submit Button
submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    //Check if ther is a full info so it can be save to Local Storage
        //if user gave all three inputs then this data is going to be saved 
    if (userNameInput.value && titleInput.value && contentInput.value) {

        //get value of new data
        addNewPost =  {
            userName: userNameInput.value,
            title: titleInput.value,
            content: contentInput.value
        };

        //add new data to old one
        postsList.push(addNewPost);
        
        //save updated data to Local Storage
        localStorage.setItem("blogLSKey", JSON.stringify(postsList));

        //clear input on the page
        userNameInput.value = "";
        titleInput.value = "";
        contentInput.value = "";

        console.log(postsList);

        //relocate to the 2nd pg (Blog pg)
        window.location.replace("./blog.html");
   
    } else {
        //give Alert if user input data not full
        alert("Please, fill in all sections to save your post!");
    };
});
//--------------------------------------------------------