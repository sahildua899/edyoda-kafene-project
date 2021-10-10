const menuItems = document.getElementsByClassName('menu-item');

for(const item of menuItems) {
    item.addEventListener ('click', function(e) {
        item.classList.add("MenuItemActive")
    })
}



   