import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={css.wrapper}>
      <p className={css.title}>Welcome, {user.name}!</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
}
