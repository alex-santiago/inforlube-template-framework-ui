
// create observable to trigger event that will update breadcrumb
const breadCrumb = riot.observable();
const objBreadCrumb = new Object;
objBreadCrumb.parentPathDescription = "";
objBreadCrumb.currentPathDescription = "";

// updates the path in the observable object
function updateBreadCrumb (parent, child) {
  breadCrumb.trigger('updateBreadCrumb', parent, child);
}
