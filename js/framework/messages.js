// create observable to trigger event that will update modal window with error info
const modalAlert = riot.observable();

const onError = function(errorCode, errorMessage) {
  if ((parseInt(errorCode/100)*100) === 400) {
    onErrorAlert(errorCode, errorMessage);
    return;
  }
  var error = new Object;
  error.errorCode = errorCode;
  error.errorMessage = errorMessage;
  error = JSON.parse(JSON.stringify(error));
  sessionObj.error = new Object();
  sessionObj.error = error;
  saveSession();
  spinner.stop();
  displayError();
};

// updates the error information in the observable object
const onErrorAlert = function(errorCode, errorMessage) {
  var error = new Object;
  error.errorCode = errorCode;
  error.errorMessage = errorMessage;
  modalAlert.trigger('updateModalErrorAlert', error);
};

const getErrorModal = function() {
    var modalData = {
        id : 'modalErrorAlert',
        title : language.globals.windows.error.title,
        actionBtns : [
            {
                title : language.globals.back,
                action : "modal.hide('modalErrorAlert');",
                bootstrapBtnClass : 'primary'
            }
        ]
    }
    return modalData;
}

const displayError = function() {
  path.navigate("/site-error", "Error", "Error Message");
};

const displayMessageSuccess = function(text) {
  displayMessage(text, 'success');
};

const displayMessageWarning = function(text) {
  displayMessage(text, 'warning');
};

const displayMessageDanger = function(text) {
  displayMessage(text, 'danger');
};

const displayMessage = function(text, type) {
  const forms = document.querySelectorAll('.custom-validation');
  const i = 0;
  if (!forms[i].classList.contains('custom-validation')) return;
  // Get all of the form elements
  var fields = forms[i].elements;
  var message = document.querySelector('#message-alert');
  if (!message) {
    message = document.createElement('div');
    message.className = 'window-message';
    message.id = 'message-alert';
    forms[i].parentNode.insertBefore( message, forms[i].parentNode.firstChild );
    let button = document.createElement('button');
    button.id = 'message-alert-close';
    button.setAttribute('type', 'button');
    button.setAttribute('data-dismiss', 'alert');
    button.setAttribute('aria-hidden', 'true');
    button.className = 'close';
    button.classList.add('tiny');
    button.innerHTML = 'x';

    // Update error message
    message.appendChild(document.createTextNode(text));
    message.appendChild(button);
    // Add error class to message parent
    message.classList.add('alert');
    message.classList.add('alert-dismissible');
    message.classList.add('alert-' + type);
    message.classList.add('col-sm-12');
  }
}
