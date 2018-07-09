var open = false;
var contactOpen = false;

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function toggleNav() {
    if (!open) {
        // open it
        document.getElementById("mySidenav").style.width = "100px";
        document.getElementById("main").style.marginLeft = "100px";
        open = true;
    } else {
        // close it
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        open = false;
    }
}

/*
    Open up contact bar at bottom
*/
function toggleContactBar() {

    if (!contactOpen){
        document.getElementById("footerNav").style.height = "40px";
        document.getElementById("footerNav").style.width = "100%";
        contactOpen = true;
    } else {
        document.getElementById("footerNav").style.height = "0";
        document.getElementById("footerNav").style.width = "0";

        contactOpen = false;
    }

}