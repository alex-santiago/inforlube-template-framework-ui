const menuItens = ` [
  { "id": "item0", "ico": "fa-home fa-lg", "description": "Home", "route": "/", "children": [] },
  { "id": "item1", "ico": "fa-clone", "description": "Sample", "route": "/sample", "children": [] },
  { "id": "item2", "ico": "fa-clone", "description": "Analytics", "route": "#", "children": [
    { "ico": "fa-caret-right", "description": "Exception Logs", "route": "/report-exceptionslog", "parent": "Analytics"},
    { "ico": "fa-caret-right", "description": "Protocols", "route": "/report-protocols", "parent": "Analytics"}
  ] }
] `;

const path = new Object;

// declare default path and description
path.current = "/";
path.parentDescription = "Home";
path.childDescription = "";

// resets path variables and return to site Home
path.navigateHome = function () {
  path.current = "/";
  path.parentDescription = "Home";
  path.childDescription = "";
  updateBreadCrumb(path.parentDescription, path.childDescription);
  route("/");
};

// navigates to an specific destination
path.navigate = function (destination, parentDescription, childDescription) {
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
