export default function validateName(name) {
  // map storing error messages to be displayed in ErrorMessage component
  const ERROR_MESSAGES = {
    EMPTY: "Input field cannot be empty.",
    LENGTH:
      "Username must not be less than 3, or greater than 20 characters in length.",
    CHARACTER: "Username must only include numbers, letters, and underscores.",
  };

  // Basic check that the input field is not empty
  if (name.trim() === "") {
    /* returning an object with boolean value to determine if the input is valid, 
       and an error message to be displayed in ErrorMessage component*/
    return { isValid: false, message: ERROR_MESSAGES.EMPTY };
  }

  // Minimum and maximum length checks.
  const minLength = 3;
  const maxLength = 20;
  if (name.length < minLength || name.length > maxLength) {
    return { isValid: false, message: ERROR_MESSAGES.LENGTH };
  }

  // Restricting characters to alphanumeric and underscores only
  const characterRegex = /^[a-zA-Z0-9_]+$/;
  if (!characterRegex.test(name)) {
    return { isValid: false, message: ERROR_MESSAGES.CHARACTER };
  }

  return { isValid: true, message: "" };
}
