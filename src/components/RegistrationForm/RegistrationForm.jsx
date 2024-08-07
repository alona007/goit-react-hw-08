import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .min(8, "Too short")
    .max(30, "Too long")
    .matches(/^[0-9/-/a-z/A-Z/@/.]{8,30}$/, "This is not a valid email!")
    .required("Required"),
  password: Yup.string()
    .min(8, "Too short")
    .max(16, "Too long")
    .matches(/^[0-9/-/a-z/A-Z]{8,16}$/, "This is not a valid password!")
    .required("Required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmitRegistration = (user, actions) => {
    dispatch(
      register({
        name: user.name,
        email: user.email,
        password: user.password,
      })
    );
    actions.resetForm();
  };

  return (
    <div className={css.wrapRegistrationForm}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitRegistration}
        validationSchema={ContactSchema}
      >
        <Form className={css.formRegistration}>
          <h2 className={css.registrationTitle}>Register form</h2>
          <label htmlFor={nameId}>Name</label>
          <Field
            className={css.fieldRegistration}
            id={nameId}
            name="name"
            type="text"
          />
          <ErrorMessage style={{ color: "red" }} name="name" component="span" />
          <label htmlFor={emailId}>Email</label>
          <Field
            className={css.fieldRegistration}
            id={emailId}
            name="email"
            type="email"
          />
          <ErrorMessage
            style={{ color: "red" }}
            name="email"
            component="span"
          />
          <label htmlFor={passwordId}>Password</label>
          <Field
            className={css.fieldRegistration}
            id={passwordId}
            name="password"
            type="password"
          />
          <ErrorMessage
            style={{ color: "red" }}
            name="password"
            component="span"
          />
          <button style={{ marginTop: "15px" }} type="submit">
            Registration
          </button>
        </Form>
      </Formik>
    </div>
  );
}
