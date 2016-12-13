window.onload = function () {
  // Obtain the different inputs that will be validated
  // on the search form and save them to variables
  var searchFormElement = document.getElementById('searchform');
  var searchFieldElement = document.getElementById('searchfield');
  var selectParameterElement = document.getElementById('selectpara');
  var submitButton = document.getElementById('submit');
  // When the submit button is clicked...
  submitButton.addEventListener('click', function(event) {
    // ...pass the different elements to their
    // corresponding validation functions
    checkSearchField(searchFieldElement);
    checkSelectParameter(selectParameterElement);
  });
  // When the submit event is detected on the search form...
  searchFormElement.addEventListener('submit', function(event) {
    // ...prevent its default operation to send the form
    // since this is not necessary for this project
    event.preventDefault();
  });
  // The checkSearchField function checks if the search field
  // is empty or has not been trimmed of superfluous space characters
  function checkSearchField(element) {
    // Capture the value on the element to a variable
    var input = element.value;
    // If the search field is empty...
    if (validator.isEmpty(input)) {
      // ...display a custom message that some input is needed for search field
      element.setCustomValidity("The universe is a big place. You will have to"+
        " give us something to work with here.");
      // ...else if the search input is not trimmed...
    } else if (!validator.isTrimmed(input)) {
      // ...display a custom message to the user to remove extra spaces
      element.setCustomValidity("Please remove any extra spaces in your search"+
        " parameter for a more accurate search.");
      // ...else resut the search fields validity
    } else {
      element.setCustomValidity("");
    }
  }
  // The checkSelectParameter function checks whether a select option
  // has been chosen
  function checkSelectParameter(element) {
    // Capture the value on the element to a variable
    var input = element.value;
    // If the value of the input is the same as the default option...
    if (input === "Refine Search by Star System Type. . .") {
      // ...display a custom message telling the user that a select option
      // is needed
      element.setCustomValidity("Please choose a star system type to speed up" +
        " your search.");
      // ...else reset the validity of the select parameter
    } else {
      element.setCustomValidity("");
    }
  }
};
