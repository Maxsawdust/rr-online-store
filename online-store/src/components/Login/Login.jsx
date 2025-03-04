import { useContext, useState } from "react";
import { UsernameContext } from "../../pages/HomePage/HomePage.jsx";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Login.css";

export default function Login() {
  // retrieving state from context provider
  const { username, setUsername } = useContext(UsernameContext);

  // using formik as a hook
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      // on a successful submit of the form, the username state gets changed
      setUsername({ ...username, username: values.username });
      // local storage gets updated to include "isLoggedIn"
      localStorage.setItem("isLoggedIn", true);
    },
    validateOnChange: false,
    validateOnBlur: false,

    // using Yup in order to have cleaner and easier validation logic
    // first use Yup's object validation method to validates 'values'
    validationSchema: Yup.object({
      // using Yup's string validation for each value.
      username: Yup.string()
        // chaining on additional validation logic and passing in their related error message.
        .required("username is required")
        .min(3, "Username must be at least 3 characters")
        .max(20, "Username must not exceed 20 characters")
        .matches(
          // regex to match for a valid username
          /^[a-zA-Z0-9_]+$/,
          "Username must only include numbers, letters, or underscores."
        ),

      email: Yup.string()
        .required("Email is required.")
        .email("Please enter a valid email address."),

      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters.")
        /* instead of one big regex, I split these up into many smaller ones,
           so that the user knows what they specifically need to change */
        .matches(/(?=.*\d)/, "Password must contain at least one number.")
        .matches(
          /(?=.*[a-z])/,
          "Password must contain at least one lower-case letter."
        )
        .matches(
          /(?=.*[A-Z])/,
          "Password must contain at least one capital letter."
        )
        .matches(
          /(?=.*[!@#$%^&*-])/,
          "Password must contain at least one special character."
        ),
    }),
  });

  return (
    <div className="Login">
      <h1 id="log-in-header">Log in</h1>
      <form id="log-in-box" onSubmit={formik.handleSubmit}>
        <div className="field-container">
          <label htmlFor="username">Username *</label>
          <input
            type="text"
            placeholder="Please enter your username"
            // no "name" is required because I've included ID
            id="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="error-message">
            {/* Checking if username field is empty and has been touched,
                then displaying an error if true. */}
            {formik.errors.username &&
              formik.touched.username &&
              formik.errors.username}
          </div>
        </div>

        <div className="field-container">
          <label htmlFor="email">Email address *</label>
          <input
            type="text"
            placeholder="Please enter your email address"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="error-message">
            {/* Checking if email field is empty and has been touched,
                then displaying an error if true. */}
            {formik.errors.email && formik.touched.email && formik.errors.email}
          </div>
        </div>

        <div className="field-container">
          <label htmlFor="password">Password *</label>
          <input
            type="text"
            placeholder="Please enter your password"
            id="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="error-message">
            {/* Checking if password field is empty and has been touched,
                then displaying an error if true. */}
            {formik.errors.password &&
              formik.touched.password &&
              formik.errors.password}
          </div>
        </div>

        <button className="btn btn-primary" id="log-in-button">
          Log in
        </button>
      </form>
    </div>
  );
}
