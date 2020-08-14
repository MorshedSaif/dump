// write scripts
var sidebar = $(".sidebar");
var sidebarToggler = $(".sidebar-toggler");
var overlay = $(".overlay");

$(document).ready(function () {
    sidebarToggler.click(function () {
        sidebar.toggleClass("active");
        overlay.toggleClass("active");
    });
});
