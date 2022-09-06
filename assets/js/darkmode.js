'use strict';
var dayMode;
var nightMode;
var darkStyle;
window.addEventListener("DOMContentLoaded", changeSkin);
/**
 * @return {undefined}
 */
function changeSkin() {
  /** @type {(Element|null)} */
  dayModeMob = document.getElementById("daymode-Mob");
  /** @type {(Element|null)} */
  nightModeMob = document.getElementById("nightmode-Mob");
  /** @type {(Element|null)} */
  dayMode = document.getElementById("daymode");
  /** @type {(Element|null)} */
  nightMode = document.getElementById("nightmode");
  if ("" === getCookieValue("mode")) {
    /** @type {string} */
    nightMode.style.display = "none";
    /** @type {string} */
    nightModeMob.style.display = "none";
    /** @type {string} */
    dayMode.style.display = "inline-block";
    /** @type {string} */
    dayModeMob.style.display = "inline-block";
  }
  if ("dark" === getCookieValue("mode")) {
    setSkin("dark");
  }
  if ("light" === getCookieValue("mode")) {
    setSkin("light");
  }
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches && "" === getCookieValue("mode")) {
    setSkin("dark");
  }
}
/**
 * @param {string} name
 * @return {undefined}
 */
function setSkin(name) {
  if ("dark" === name) {
    /** @type {string} */
    dayModeMob.style.display = "none";
    /** @type {string} */
    nightModeMob.style.display = "inline-block";
    /** @type {string} */
    dayMode.style.display = "none";
    /** @type {string} */
    nightMode.style.display = "inline-block";
    /** @type {(Element|null)} */
    darkStyle = document.getElementById("darkmode");
    if (null == darkStyle) {
      document.head.innerHTML += '<link id="darkmode" rel="stylesheet" href="/assets/css/darkmode.css" type="text/css"/>';
      createCookie("mode", "dark");
    }
  }
  if ("light" === name) {
    /** @type {string} */
    nightModeMob.style.display = "none";
    /** @type {string} */
    dayModeMob.style.display = "inline-block";
    /** @type {string} */
    nightMode.style.display = "none";
    /** @type {string} */
    dayMode.style.display = "inline-block";
    if (darkStyle = document.getElementById("darkmode")) {
      darkStyle.parentNode.removeChild(darkStyle);
    }
    createCookie("mode", "light");
  }
}
/**
 * @return {undefined}
 */
function toggleSkin() {
  if (darkStyle = document.getElementById("darkmode")) {
    setSkin("light");
  } else {
    setSkin("dark");
  }
}
/**
 * @param {string} name
 * @param {string} value
 * @param {number} expires
 * @return {undefined}
 */
function createCookie(name, value, expires) {
  if (expires) {
    /** @type {!Date} */
    var d = new Date;
    d.setTime(d.getTime() + 864E5 * expires);
    /** @type {string} */
    expires = "; expires=" + d.toGMTString();
  } else {
    /** @type {string} */
    expires = "";
  }
  /** @type {string} */
  document.cookie = name + "=" + value + expires + "; path=/";
}
/**
 * @param {string} name
 * @param {!Array} data
 * @return {?}
 */
function getCookieValue(name, data) {
  return (data = document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")) ? data.pop() : "";
}
;