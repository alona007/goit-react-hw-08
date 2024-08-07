import { FaRegAddressBook } from "react-icons/fa";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.wrapHomePage}>
      <div className={css.wrapHomePageTitle}>
        <h1>Phonebook welcome page</h1>
        <FaRegAddressBook size={80} className={css.icon} />
      </div>
    </div>
  );
}
