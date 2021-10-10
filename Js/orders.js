var checkLocal = JSON.parse(localStorage.getItem('userLoggedIn'));
if(checkLocal != true) {
    location.assign('/index.html');
}
$(document).ready(function() {
})

