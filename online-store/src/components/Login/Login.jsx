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
      setUsername(values.username);
      console.log(values);
    },

    // using Yup in order to have cleaner and easier validation logic
    validationSchema: Yup.object({
      username: Yup.string()
        .required("username is required")
        .min(3, "Username must be at least 3 characters")
        .max(20, "Username must not exceed 20 characters")
        .matches(
          /^[a-zA-Z0-9_]+$/,
          "Username must only include numbers, letters, or underscores."
        ),

      email: Yup.string()
        .required("Email is required.")
        .email("Please enter a valid email address."),

      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters.")
        .matches(/(?=.*\d)/, "Password must contain at least one number.")
        .matches(
          /(?=.[a-z])/,
          "Password must contain at least one lower-case letter."
        )
        .matches(
          /(?=.[A-Z])/,
          "Password must contain at least one capital letter."
        )
        .matches(
          /(?=.[!@#$%^&*-])/,
          "Password must contain at least one special character."
        ),
    }),
  });

  return (
    <div className="Login">
      <h1 id="log-in-header">Log in</h1>
      <form id="log-in-box" onSubmit={formik.handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Please enter your username"
            // no "name" is required because I've included ID
            id="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Please enter your email address"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Please enter your password"
            id="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        <button className="btn btn-primary" id="log-in-button">
          Log in
        </button>
      </form>
    </div>
  );
}
