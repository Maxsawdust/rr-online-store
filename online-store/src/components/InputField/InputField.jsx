import "./InputField.css";

/* InputField component is designed to take properties from FieldClass.js' "Field" class.
   This is done because writing out each input field with each property for both forms,
   would be extremely repetetive and untidy. */
export default function InputField(props) {
  return (
    <div className="input-field">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type="text"
        placeholder={props.placeholder}
        // no "name" is required because I've included ID
        id={props.name}
        name={props.name}
        onChange={props.onChange}
      />
      <span className="error-message">
        {/* Checking if username field is empty,
          then displaying an error if true. */}
        {props.errorCase}
      </span>
    </div>
  );
}
