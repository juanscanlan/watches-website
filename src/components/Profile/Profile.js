import styles from "./profile.module.scss";

import SellWatchProfile from "./SellWatchProfile";

import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.title}>
        <h1 className={styles.title__main}>💸Your watch listings💸</h1>
        <Link
          className={styles.title__addListing}
          to="/SellWatch"
          target="_blank"
        >
          Add another listing
        </Link>
      </div>

      <SellWatchProfile />
    </div>
  );
}

export default Profile;
