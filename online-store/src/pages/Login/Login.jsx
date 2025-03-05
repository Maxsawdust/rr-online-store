import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import {
  UserContext,
  AuthContext,
  NameContext,
} from "../../Context/AppContext";
import { InputField } from "../../components";
import { useFormik } from "formik";
import { validationSchema } from "../../utils/validationSchema";
import Field from "../../utils/fieldClass";
import * as Yup from "yup";
import "./Login.css";

export default function Login() {
  // retrieving state from context provider
  const { users, setUsers } = useContext(UserContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { setCurrentUsername } = useContext(NameContext);

  const navigate = useNavigate();

  // creating log in error state
  const [logInError, setLogInError] = useState(null);

  // using formik as a hook
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      // using array.some() to check the users array and make sure the user is stored
      const storedUser = users.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );

      // displaying error if is not a stored user
      if (!storedUser) {
        setLogInError("Email or password is incorrect, please try again.");
        return;
      }

      // updating state and storage if user is stored
      localStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true);

      // updating state and storage for user's name
      localStorage.setItem("currentUsername", storedUser.name);
      setCurrentUsername(storedUser.name);

      // navigating to homePage
      navigate("/");
    },
    // These two properties make it so the form only gets validated on submit.
    validateOnChange: false,
    // This also makes the onBlur property redundant
    validateOnBlur: false,

    // using Yup in order to have cleaner and easier validation logic
    // Yup.object here, because it's validating the "values" object returned by formik
    validationSchema: Yup.object({
      email: validationSchema.email,
      password: validationSchema.password,
    }),

    // navigating to welcome page
  });

  // creating a fields map, using the Field class imported from FieldClass.js
  const fields = {
    email: new Field(
      "email",
      "Email Address *",
      "Please enter your email address.",
      formik
    ),
    password: new Field(
      "password",
      "Password *",
      "Please enter your password.",
      formik
    ),
  };

  return (
    <div className="Login">
      <h1 id="log-in-header">Log in</h1>
      <form id="log-in-box" onSubmit={formik.handleSubmit}>
        <InputField {...fields.email} />
        <InputField {...fields.password} />

        <button type="submit" className="btn btn-primary" id="log-in-button">
          Log in
        </button>
        <span id="log-in-error">{logInError}</span>
      </form>
    </div>
  );
}
