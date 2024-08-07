import { MagnifyingGlass } from "react-loader-spinner";
import css from "./Error.module.css";

export default function Loader() {
  return (
    <div className={css.loaderContainer}>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#1e26c4"
      />

      <br />
      <p style={{ color: "white" }}>Error! Reload page.</p>
    </div>
  );
}
