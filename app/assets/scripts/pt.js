// toggle hamburger menu
const toggleLinks = () => {
    const getNav = document.getElementById("my-top-nav");
    if (getNav.className === "top-nav") {
        getNav.className += "responsive";
    } else {
        getNav.className = "top-nav";
    }
}