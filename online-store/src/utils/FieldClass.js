// this is a class to make creating InputField components easier
export default class Field {
  // because this is in an external file, I need to pass formik into the constructor
  constructor(name, label, placeholder, formik) {
    this.name = name;
    this.label = label;
    this.placeholder = placeholder;
    this.errorCase = formik.errors[this.name] && formik.errors[this.name];
    this.onChange = formik.handleChange;
  }
}
