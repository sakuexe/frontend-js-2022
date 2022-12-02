/*
    * HTML5 Form elements
    additional information:
    -Web Forms:
    https://developer.mozilla.org/en-US/docs/Learn/Forms
    -JavaScript info Web Form Controls
    https://javascript.info/forms-controls
    -HTML Forms
    https://www.w3schools.com/html/html_forms.asp
*/

// for selecting the option that user has selected, modern way would be to do it with 
document.querySelector("#element_id:checked")
// it is a bit neater and easier to read (in my opinion)

const formAttributes = {
  "accept-charset": "charset used to fill the form eg. charset='utf-8",
  action: "URL, where to send the form contents after submit (action='' uses current url/webpage)",
  autocomplete: "on | off, on by default",
  method: "get - Appends the form-data to the URL in name/value pairs: URL?name=value&name=value",
  method: "post - sends the form data as an http post transaction",
  novalidate: "if present, form is not validated automatically",
}

// * <fieldset> <legend> and <label>
// can be used to style and make the form elements more clearer to the user
// <label for="element-id"> will also make it possible to click on the text and still activate the element

const inputAttributes = {
  autocomplete: "on | off, on by default",
  autofocus: "if present, gain focus at the page load up",
  checked: "radio/checkbutton input element is preselected",
  formnovalidate: "if present, dont validate the element",
  max: "maximum value for number or range field",
  maxlength: "maximum number of characters allowed for password, search, tel, text, url",
  min: "minimum value for number or range field",
  minlength: "minimum number of characters allowed for password, search, tel, text, url",
  multiple: "multiple emails (comma seperated) or files (using control key)",
  name: "unique name for a from field, submitted as name=value pair to server",
  // always define names on forms, extremely important
  // for radio and check buttons, names can (and should) have the same name value
  pattern: "regular expression, which must be satisfied for the form to validate",
  placeholder: "hint text displayed in an empty field",
  required: "if present, user must fill this field",
  size: "the width of text, password, email, tel in characters",
  step: "numerical stepping for number or range fields",
  tabindex: "specifies the tab order of an element",
  title: "extra 'tooltip' information related to element e.g. text shown if pattern is not matched",
  type: "the type of input: https://www.w3schools.com/html/html_form_input_types.asp",
  // when using these types, be sure to check that the type is working on all popular browsers
  value: "current value of the element (can also be used to give initial value)",
}