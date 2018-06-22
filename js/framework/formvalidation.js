// Add the novalidate attribute when the JS loads
const nativeFormValidationOff = () => {
  const forms = document.querySelectorAll('.custom-validation');
  for (var i = 0; i < forms.length; i++) {
      forms[i].setAttribute('novalidate', true);
  }
}

const formValidationPassed = (customValidationFunction) => {
  const forms = document.querySelectorAll('.custom-validation');
  for (var i = 0; i < forms.length; i++) {
    // Only run on forms flagged for validation
    if (!forms[i].classList.contains('custom-validation')) return;

    // Get all of the form elements
    var fields = forms[i].elements;
    // Validate each field
    // Store the first field with an error to a variable so we can bring it into focus later
    var error, hasErrors;
    for (var i = 0; i < fields.length; i++) {
      error = hasError(fields[i]);
      if (error) {
        showError(fields[i], error);
        if (!hasErrors) {
          hasErrors = fields[i];
        }
      }
      else {
        removeError(fields[i]);
      }
    }
    // If there are errrors, don't submit form and focus on first element with error
    if (hasErrors) {
      // console.log('hasErrors');
      hasErrors.focus();
      return false;
    }
    else {
      if (customValidationFunction) {
        // console.log('no errors before customValidation');
        return customValidationFunction();
      }
      else {
        // console.log('formValidationPassed');
        return true;
      }
    }
  }
};

// Validate the field
const hasError = (field) => {
  // Don't validate submits, buttons, file and reset inputs, and disabled fields
  if (field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') return;

  // Get validity
  let validity = field.validity;

  // If valid, return null
  if (validity.valid) return;

  // If field is required and empty
  if (validity.valueMissing) return language.globals.formValidation.requiredField;

  // If not the right type
  if (validity.typeMismatch) {
    // Email
    if (field.type === 'email') return language.globals.formValidation.email;

    // URL
    if (field.type === 'url') return language.globals.formValidation.url;

    // else
    return language.globals.formValidation.typeMismatch;
  }

  // If too short
  if (validity.tooShort) return language.globals.formValidation.tooShort.format(field.getAttribute('minLength'), field.value.length);

  // If too long
  if (validity.tooLong) return language.globals.formValidation.tooLong.format(field.getAttribute('maxLength'), field.value.length);

  // If number input isn't a number
  if (validity.badInput) return language.globals.formValidation.badInput;

  // If a number value doesn't match the step interval
  if (validity.stepMismatch) return language.globals.formValidation.stepMismatch;

  // If a number field is over the max
  if (validity.rangeOverflow) return language.globals.formValidation.rangeOverflow.format(field.getAttribute('max'));

  // If a number field is below the min
  if (validity.rangeUnderflow) return language.globals.formValidation.rangeUnderflow.format(field.getAttribute('min'));

  // If pattern doesn't match
  if (validity.patternMismatch) {
    // If pattern info is included, return custom error
    if (field.hasAttribute('title')) return field.getAttribute('title');
    // Otherwise, generic error
    return language.globals.formValidation.patternMismatch;
  }
  // If all else fails, return a generic catchall error
  // return 'The value you entered for this field is invalid.';
};

const showError = (field, error) => {
  // Add error class to field
  // field.classList.add('error');

  // If the field is a radio button and part of a group, error all and get the last item in the group
  if (field.type === 'radio' && field.name) {
    var group = document.getElementsByName(field.name);
    if (group.length > 0) {
      for (var i = 0; i < group.length; i++) {
        // Only check fields in current form
        if (group[i].form !== field.form) continue;
        group[i].classList.add('error');
      }
      field = group[group.length - 1];
    }
  }

  // Get field id or name
  var id = field.id || field.name;
  if (!id) return;

  // Check if error message field already exists
  // If not, create one
  var message = field.form.querySelector('.error-message#error-for-' + id );
  if (!message) {
    message = document.createElement('div');
    message.className = 'error-message';
    message.id = 'error-for-' + id;

    // If the field is a radio button or checkbox, insert error after the label
    var label;
    if (field.type === 'radio' || field.type ==='checkbox') {
      label = field.form.querySelector('label[for="' + id + '"]') || field.parentNode;
      if (label) {
        label.parentNode.insertBefore( message, label.nextSibling );
      }
    }

    // Otherwise, insert it after the field
    if (!label) {
      field.parentNode.insertBefore( message, field.nextSibling );
    }
  }
  // Add error class to field parent
  field.parentNode.classList.add('error');

  // Add ARIA role to the field
  field.setAttribute('aria-describedby', 'error-for-' + id);

  // Update error message
  message.innerHTML = error;

  // Show error message
  message.style.display = 'block';
  message.style.visibility = 'visible';
};

// Remove the error message
const removeError = function (field) {
  // Remove error class to field
  field.parentNode.classList.remove('error');

  // If the field is a radio button and part of a group, remove error from all and get the last item in the group
  if (field.type === 'radio' && field.name) {
    var group = document.getElementsByName(field.name);
    if (group.length > 0) {
      for (var i = 0; i < group.length; i++) {
        // Only check fields in current form
        if (group[i].form !== field.form) continue;
        group[i].classList.remove('error');
      }
      field = group[group.length - 1];
    }
  }

  // Remove ARIA role from the field
  field.removeAttribute('aria-describedby');

  // Get field id or name
  var id = field.id || field.name;
  if (!id) return;

  // Check if an error message is in the DOM
  var message = field.form.querySelector('.error-message#error-for-' + id + '');
  if (!message) return;

  // If so, hide it
  message.innerHTML = '';
  message.style.display = 'none';
  message.style.visibility = 'hidden';
};
