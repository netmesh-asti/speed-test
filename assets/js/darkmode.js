var dayMode, nightMode, darkStyle;
window.addEventListener("DOMContentLoaded", changeSkin);
function changeSkin() {
    dayModeMob = document.getElementById("daymode-Mob");
    nightModeMob = document.getElementById("nightmode-Mob");
    dayMode = document.getElementById("daymode");
    nightMode = document.getElementById("nightmode");
    "" === getCookieValue("mode") && ((nightMode.style.display = "none"), (nightModeMob.style.display = "none"), (dayMode.style.display = "inline-block"), (dayModeMob.style.display = "inline-block"));
    "dark" === getCookieValue("mode") && setSkin("dark");
    "light" === getCookieValue("mode") && setSkin("light");
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches && "" === getCookieValue("mode") && setSkin("dark");
}
function setSkin(a) {
    "dark" === a &&
        ((dayModeMob.style.display = "none"),
        (nightModeMob.style.display = "inline-block"),
        (dayMode.style.display = "none"),
        (nightMode.style.display = "inline-block"),
        (darkStyle = document.getElementById("darkmode")),
        null == darkStyle && ((document.head.innerHTML += '<link id="darkmode" rel="stylesheet" href="/assets/css/darkmode.css" type="text/css"/>'), createCookie("mode", "dark")));
    "light" === a &&
        ((nightModeMob.style.display = "none"),
        (dayModeMob.style.display = "inline-block"),
        (nightMode.style.display = "none"),
        (dayMode.style.display = "inline-block"),
        (darkStyle = document.getElementById("darkmode")) && darkStyle.parentNode.removeChild(darkStyle),
        createCookie("mode", "light"));
}
function toggleSkin() {
    (darkStyle = document.getElementById("darkmode")) ? setSkin("light") : setSkin("dark");
}
function createCookie(a, c, b) {
    if (b) {
        var d = new Date();
        d.setTime(d.getTime() + 864e5 * b);
        b = "; expires=" + d.toGMTString();
    } else b = "";
    document.cookie = a + "=" + c + b + "; path=/";
}
function getCookieValue(a, c) {
    return (c = document.cookie.match("(^|;)\\s*" + a + "\\s*=\\s*([^;]+)")) ? c.pop() : "";
}
