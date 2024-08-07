import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { addContacts } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

const initialValues = {
  id: "",
  name: "",
  number: "",
};

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .matches(/^[0-9/-]{3,50}$/, "This is not a number!")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (contact, actions) => {
    dispatch(
      addContacts({
        name: contact.name,
        number: contact.number,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.formStyle}>
        <label htmlFor={nameId}>Name</label>
        <Field className={css.field} id={nameId} name="name" type="text" />
        <ErrorMessage style={{ color: "red" }} name="name" component="span" />
        <label htmlFor={numberId}>Number</label>
        <Field className={css.field} id={numberId} name="number" type="tel" />
        <ErrorMessage style={{ color: "red" }} name="number" component="span" />
        <button style={{ marginTop: "15px" }} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
