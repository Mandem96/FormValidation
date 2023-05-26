const formOpenBtn = document.querySelector("#form-open")
home = document.querySelector(".home"),
formContainer = document.querySelector(".form_container"),
formCloseBtn = document.querySelector(".form_close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
email = document.getElementById("email"),
password = document.getElementById("password"),
successful = document.querySelector(".notification-card"),

pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add('show'));
formCloseBtn.addEventListener("click", () => home.classList.remove('show'));


pwShowHide.forEach(icon => {
   icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
   if (getPwInput.type === "password"){

    getPwInput.type = "text";
    icon.classList.replace("uil-eye-slash", "uil-eye");
   } else {
    getPwInput.type = "password";
    icon.classList.replace("uil-eye", "uil-eye-slash");
   }
   })
});


signupBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    formContainer.classList.add('active');
})
loginBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    formContainer.classList.remove('active');
})


// const notification = document.querySelector('.notification');

// // Function to show the notification with a given message
// function showNotification(message) {
//   notification.textContent = message;
//   notification.style.display = 'block';
//   setTimeout(() => {
//     notification.style.display = 'none';
//   }, 3000); // Hide the notification after 3 seconds
// }



// Get the existing users array from local storage, or create a new empty array
let users = JSON.parse(localStorage.getItem("users")) || [];
const registerForm = document.getElementById("register-form");
// Register event listener for submit event on the registration form
registerForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the form values
  const username = document.getElementById("signup-login").value;
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  // Check if password and confirm password fields match
  if (password !== confirmPassword) {
    alert("Password and confirm password do not match.");
    return;
  } 

  // Check if the username is already taken
  if (users.some(user => user.username === username)) {
    alert("Username already taken.");
    return;
  }

  // Create an object to represent the user
  const user = { username, password };

  // Add the user to the array of users
  users.push(user);

  // Save the updated users array to local storage
  localStorage.setItem("users", JSON.stringify(users));

  // Clear the form
  registerForm.reset();

  // Show a success message
  alert("Registration successful. You may now login.");
});

// Register event listener for submit event on the login form
const loginForm = document.getElementById("form");
loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the form values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Find the user with the matching username in the array of users
  const user = users.find(user => user.username === username);

  // Check if the user exists and the password matches
  if (user && user.password === password) {
    // Clear the form
    loginForm.reset();

    // Show a success message
    successful.style.display = 'block'
    formContainer.style.display = 'none'
  } else {
    // Show an error message
    alert("Invalid username or password.");
  }
});


// // Get the registration form
// const registerForm = document.getElementById("register-form");

// // Get the login form


// // Register event listener for submit event on the registration form
// registerForm.addEventListener("submit", function(event) {
//   event.preventDefault(); // Prevent form submission

//   // Get the form values
//   const username = document.getElementById("signup-login").value;
//   const password = document.getElementById("signup-password").value;
//   const confirmPassword = document.getElementById("confirm-password").value;

//   // Check if password and confirm password fields match
//   if (password !== confirmPassword) {
//     alert("Password and confirm password do not match.");
//     return;
//   } 

  
//   // Create an object to represent the user
//   const user = { username, password };

//   // Save the user to local storage
//   localStorage.setItem("user", JSON.stringify(user));

//   // Clear the form
//   registerForm.reset();

//   // Show a success message
//   alert("Registration successful. You may now login.");
// });

// // Register event listener for submit event on the login form
// const loginForm = document.getElementById("form");
// loginForm.addEventListener("submit", function(event) {
//   event.preventDefault(); // Prevent form submission

//   // Get the form values
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;

//   // Get the user from local storage
//   const storedUser = JSON.parse(localStorage.getItem("user"));

//   // Check if the user exists and the password matches
//   if (storedUser && storedUser.username === username && storedUser.password === password) {
//     // Clear the form
//     loginForm.reset();

//     // Show a success message
//     alert("Login successful.");
//   } else {
//     // Show an error message
//     alert("Invalid username or password.");
//   }
// });




// let form = document.getElementById('form');

// if (localStorage.getItem('username') && localStorage.getItem('password') && localStorage.getItem('password')){
//    document.getElementById('username').value = localStorage.getItem('username') 
//    document.getElementById('password').value = localStorage.getItem('password')
// }


// form.addEventListener('submit', (e)=> {
//     e.preventDefault()
//    let username = document.getElementById('username').value
//    let password = document.getElementById('password').value


//    //localstorage

//  localStorage.setItem('username',username)
//  localStorage.setItem('password',password)

//  alert("Your details are saved in the localstorage");



// })





// email.addEventListener('input', ()=>{
//     const emailBox = document.querySelector('.emailBox');
//     const emailText = document.querySelector('.emailText');
//     const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;

//     if (email.value.match(emailPattern)){
//         emailBox.classList.add('valid')
//         emailBox.classList.remove('invalid');
//         emailText.innerHTML = "Valid Email Address";
//     } else {
//         emailBox.classList.add('invalid')
//         emailBox.classList.remove('valid');
//         emailText.innerHTML = "Enter Valid email";
//     }
// })


