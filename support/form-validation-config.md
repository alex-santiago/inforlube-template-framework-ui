# How to Use Form Validation in a Component

By using this approach, you have control over the validations done, but you still benefit of HTML native validation through element attributes such as `readonly`, `required` or the input type specifications.

- Add the following method call to the component `mount` method, this will turn off the native browser and allow custom messages.

```javascript
this.on('mount', function () {
  // Remove browsers default Form validation
  nativeFormValidationOff();
});
```

- Add the `custom-validation` class to the `form` element.

```HTML
<form id="search-form" role="form" class="custom-validation">
</form>
```

-  Call the validation method `formValidationPassed` in your component code. This method will provide the usual browser validation using element attributes. In this case, the call is made without arguments, as shown in **Example 1**. If you need to create a custom validation, create a separate function and pass it as an argument to the `formValidationPassed` method, as shown in **Example 2**.

**Example 1**
```javascript
// Evento Search button
onButtonSearchClick(e){
  var parameters = {};
  parameters.CreatedAtStartDate = tag.refs.inputStartDate.value;
  parameters.CreatedAtEndDate = tag.refs.inputEndDate.value;

  // Call the form validation and passes a custom function to validate other fields
  if (formValidationPassed()) {
    opts.onclicksearch(parameters);
  }
}
```

**Example 2**
```javascript
// Call the form validation and passes a custom function to validate other fields
if (formValidationPassed(customValidationPassed)) {
  opts.onclicksearch(parameters);
}
```

**Default HTML Validations:**

- field is required
- field not the right type e.g.: E-mail, url, etc
- field minimum length
- field maximum length
- number input isn't a number
- number value doesn't match the step interval
- field value range overflow
- field value range underflow
- field doesn't match a pattern

## How to create a custom validation function

- Do your validations

- Set the field validity by passing an error message to the `setCustomValidity` method

```javascript
  field.setCustomValidity("Start Date must be prior to End Date.");
```

- Set the focus to the field

```javascript
  field.focus();
```

- Show the error message

```javascript
  showError(field, field.validationMessage);
```

- Remember to return `false` if the validation failed

**Complete Custom Validation Function Example:**
```javascript
const customValidationPassed = () => {
  let field = document.getElementById("inputStartDate");
  let result = daysBetweenDates(tag.refs.inputStartDate.value, tag.refs.inputEndDate.value);
  if (result < 0) {
    field.setCustomValidity("Start Date must be prior to End Date.");
    field.focus();
    showError(field, field.validationMessage);
    return false;
  }
  else {
    if (result > 10) {
      field.setCustomValidity("Maximum allowed search period is 10 days between the Created At and Closed At dates.");
      field.focus();
      showError(field, field.validationMessage);
      return false;
    }
    else {
      return true;
    }
  }
}
```
