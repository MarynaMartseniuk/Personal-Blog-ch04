//Back Button: back to 1pg
const backButton = document.querySelector('#backBtn');

backButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.replace("./index.html");
});
//-------------------------

//Display posts from Local Storage

//output data
const postsContainer = document.querySelector('#postsBlogContainer');

//get info from Local Storage - array of objects
blogPostsList = JSON.parse(localStorage.getItem("blogLSKey"));

// loop though array to display each object (each loop displays one post)
for (let i = 0; i < blogPostsList.length; i++) {

  //create elements and set style for them
  postCard = document.createElement('div');
  postCard.style.border = '1px solid var(--lBlack)';
  postCard.style.borderRadius = '4px';
  postCard.style.margin = '10px';

  postTitle = document.createElement('h4');
  postTitle.style.fontWeight = 'bold';
  postTitle.style.paddingLeft = '5px';
  postTitle.style.marginBottom = '0px';
  postTitle.style.borderBottom = '1px solid var(--dGrey)';

  postContent = document.createElement('p');
  postContent.style.fontStyle = 'italic';
  postContent.style.marginTop = '5px';

  postUserName = document.createElement('p');
  postUserName.style.marginBottom = '5px';

  //set contant value (title of post, content of post and author of post) do display them next on the page
  postTitle.textContent = blogPostsList[i].title;
  postContent.textContent = blogPostsList[i].content;
  postUserName.textContent = "Posted by: " + blogPostsList[i].userName;

  //attached elements with content value to the page
  postCard.append(postTitle, postContent, postUserName);
  postsContainer.appendChild(postCard);
};
//-------------------------------------------------