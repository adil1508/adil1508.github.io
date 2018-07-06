var open = false;

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function toggleNav() {
    if (!open) {
        // open it
        document.getElementById("mySidenav").style.width = "200px";
        document.getElementById("main").style.marginLeft = "200px";
        open = true;
    } else {
        // close it
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        open = false;
    }
}
