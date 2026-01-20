const menuIcon=document.getElementById('menu-icon');
const menuList=document.getElementById('menu-list')
menuList.style.display="none"
function showmenu(){
    let MenuThere=menuIcon.className.includes("fa-bars")
    if(MenuThere===true){
        menuIcon.className=menuIcon.className.replace("fa-bars","fa-xmarks")
    }else{
        menuIcon.className=menuIcon.className.replace("fa-xmarks","fa-bars")
    }
}