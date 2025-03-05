import { useFormik } from "formik";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { InputField } from "../../components";
import { validationSchema } from "../../utils/validationSchema";
import { UserContext } from "../../Context/AppContext";
import Field from "../../utils/fieldClass";
import User from "../../utils/UserClass";
import * as Yup from "yup";
import "./Register.css";

export default function Register() {
  const { users, setUsers } = useContext(UserContext);

  const navigate = useNavigate();

  const formik = useFormik({
    // setting initial field values
    initialValues: {
      "first-name": "",
      surname: "",
      email: "",
      password: "",
      "confirm-password": "",
    },
    onSubmit: (values) => {
      // creating a newUser variable which is a User object (from UserClass.js)
      const newUser = new User(
        values["first-name"],
        values.email,
        values.password
      );

      // adding the newUser to localStorage
      localStorage.setItem("users", JSON.stringify([...users, newUser]));

      // updating users state
      setUsers([...users, newUser]);

      // navigating to login
      navigate("/login");
    },
    // only validating on submit
    validateOnChange: false,
    // this removes the need to include onBlur as a property
    validateOnBlur: false,
    // using yup for error handling, getting my validation object from external file
    validationSchema: Yup.object({
      ...validationSchema,
    }),
  });

  // fields map object to store InputField values and avoid repetition
  const fields = {
    // using the Field class, imported from FieldClass.js
    "first-name": new Field(
      "first-name",
      "First name *",
      "Please enter your first name",
      formik
    ),
    surname: new Field(
      "surname",
      "Surname *",
      "Please enter your surname.",
      formik
    ),
    email: new Field(
      "email",
      "Email address *",
      "Please enter your email address.",
      formik
    ),
    password: new Field(
      "password",
      "Password *",
      "Please enter a password.",
      formik
    ),
    "confirm-password": new Field(
      "confirm-password",
      "Confirm password *",
      "Please confirm your password",
      formik
    ),
  };

  return (
    <div className="Register">
      <h1 id="register-heading">Register an account!</h1>
      <form onSubmit={formik.handleSubmit} className="registration-form">
        <InputField {...fields["first-name"]} />
        <InputField {...fields.surname} />
        <InputField {...fields.email} />
        <InputField {...fields.password} />
        <InputField {...fields["confirm-password"]} />

        <button type="submit" className="btn btn-primary" id="log-in-button">
          Register account
        </button>
      </form>
    </div>
  );
}
