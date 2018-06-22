const path = new Object;
const menuItens = [];
var item = new Object();
var subitem = new Object();

// declare default path and description
path.current = "/";
path.parentDescription = "Home";
path.childDescription = "";
path.navigatedFromMenu = false;

// resets path variables and return to site Home
path.navigateHome = function () {
  if (path.navigatedFromMenu) {
    clearSession();
    path.navigatedFromMenu = false;
  }
  path.current = "/";
  path.parentDescription = "Home";
  path.childDescription = "";
  updateBreadCrumb(path.parentDescription, path.childDescription);
  route("/");
};

// navigates to an specific destination
path.navigate = function (destination, parentDescription, childDescription) {
  if (path.navigatedFromMenu) {
    clearSession();
    path.navigatedFromMenu = false;
  }
  path.current = destination;
  path.parentDescription = parentDescription;
  path.childDescription = childDescription;
  updateBreadCrumb(path.parentDescription, path.childDescription);
  route(destination);
}

// toogles the navigation bar
function toggleSiteNavigation () {
  $("body").toggleClass("sidenav-toggled");
  $("#image-logo").toggleClass("image-logo--off");
  $(".navbar-sidenav .nav-link-collapse").addClass("collapsed");
  $(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show");
}
