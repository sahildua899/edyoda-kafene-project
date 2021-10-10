var loginBtn = document.getElementById('login-btn');
const enteredUsername = document.getElementById('username');
const enteredPassword = document.getElementById('password');
var logoutBtn = document.getElementById('logout-btn');


var database = [
    {username:"qaifi", password: "qaifi"}
]

const checkLogin = JSON.parse(localStorage.getItem('userLoggedIn'));
   if(checkLogin == true) {
       location.assign('/Html/orders.html');
   } else {
        logoutBtn.style.display = "none";
   }

loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if(enteredUsername.value == database[0].username &&  enteredPassword.value == database[0].password) {
        alert("Login Success");
        localStorage.setItem('userLoggedIn', JSON.stringify(true));
        location.assign('/Html/orders.html');
    }else {
        alert('Enter a valid username & password');
    }
})

// try {
//     const userLoggedIn = localStorage.getItem(JSON.parse('userLoggedIn'));
//     if(userLoggedIn == true) {
//         location.assign('/Html/orders.html');
//         return;
//     }
// }catch(e) {
//     console.log(e)
// };
