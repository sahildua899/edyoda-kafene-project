const menuItems = document.getElementsByClassName('menu-item');

const checkLogin = JSON.parse(localStorage.getItem('userLoggedIn'));
   if(checkLogin == true) {
       location.assign('/Html/orders.html');
   } else {
        logoutBtn.style.display = "none";
   }