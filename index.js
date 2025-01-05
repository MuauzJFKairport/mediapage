document.addEventListener('DOMContentLoaded', () => {
    const homePage = document.getElementById('home-page');
    const loginPage = document.getElementById('login-page');
    const homeBtn = document.getElementById('homeBtn');
    const loginBtn = document.getElementById('loginBtn');
    const chatBox = document.getElementById('chat-box');
 


    homeBtn.addEventListener('click', () => {
      homePage.style.display = 'block';
      loginPage.style.display = 'none';
    });
 
    loginBtn.addEventListener('click', () => {
      homePage.style.display = 'none';
      loginPage.style.display = 'block';
    });
 
    //display user data; `(backtick) used to include the user data(${})and html elements
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        const usersDiv = document.getElementById('users');
        usersDiv.innerHTML = '<h3>User Profiles</h3>';
        users.forEach(user => {
          usersDiv.innerHTML += `
          <div>
              <p>${user.name}</p>
              <p>Email: ${user.email}</p>
              <p>Address: ${user.address.street}, ${user.address.city}</p>
              <p>----------------------------------------------------------------------------------------</p>
            </div>`;
        });
      });
 
    //display comments
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=3')
      .then(response => response.json())
      .then(comments => {
        const commentsDiv = document.getElementById('comments');
        commentsDiv.innerHTML = '<h3>Latest Comments</h3>';
        comments.forEach(comment => {
          commentsDiv.innerHTML += `
            <div>
              <p>${comment.body}</p>
            </div>`;
        });
      });
 
    //login/chat
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const message = document.getElementById('message').value;
 
      // Append the message to the chat box
      chatBox.innerHTML += `
        <div>
          <p><strong>${username}:</strong> ${message}</p>
        </div>`;
 
      // Clear the form
      loginForm.reset();
    });
  });
