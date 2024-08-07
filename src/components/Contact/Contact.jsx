import { FaUser, FaPhone } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/contacts/operations";

export default function Contact({ info }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContacts(info.id));
  };

  return (
    <div className={css.wrap}>
      <ul>
        <li className={css.item}>
          <FaUser className={css.icon} />
          {info.name}
        </li>
        <li className={css.item}>
          <FaPhone className={css.icon} />
          {info.number}
        </li>
      </ul>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
