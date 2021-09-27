import styles from "./sellWatchProfile.module.scss";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import db from "../Firebase/Firebase";
import {
  onSnapshot,
  collection,
  query,
  doc,
  deleteDoc,
} from "firebase/firestore";

function SellWatchProfile() {
  const [watches, setWatches] = useState([]);

  const email = localStorage.getItem("email");

  useEffect(() => {
    const getWatchList = (email) => {
      let q = query(collection(db, "users", email, "sell"));
      let watchSnapshot = onSnapshot(q, (querySnapshot) => {
        let watchesToSell = [];
        querySnapshot.forEach((watch) => {
          watchesToSell.push(watch.data());
        });
        setWatches(watchesToSell);
      });
    };
    getWatchList(email);
  }, []);

  const deleteWatch = async (id) => {
    await deleteDoc(doc(db, "users", email, "sell", id));
  };

  const onDeleteHandler = (id) => {
    deleteWatch(id);
  };

  const noWatchListings = (
    <div className={styles.noWatchListings}>
      <span>You have not created a watch listing!</span>
      <Link to="/SellWatch" target="_blank">
        Click here to create a listing
      </Link>
    </div>
  );

  const firebaseSell = watches.map((watch) => (
    <div className={styles.sellWatch} key={watch.id}>
      <h2>Watch Information</h2>
      <div className={styles.container}>
        <div className={styles.box}>
          <div>
            <span className={styles.box__bold}>Brand: </span>
            <span className={styles.box__text}>{watch.Brand}</span>
          </div>
          <div>
            <span className={styles.box__bold}>Model: </span>
            <span className={styles.box__text}>{watch.Model}</span>
          </div>
          <div>
            <span className={styles.box__bold}>Age: </span>
            <span className={styles.box__text}>{watch.Age} Years</span>
          </div>
        </div>
        <div className={styles.box}>
          <div>
            <span className={styles.box__bold}>Name: </span>
            <span className={styles.box__text}>{watch.Name}</span>
          </div>
          <div>
            <span className={styles.box__bold}>Phone: </span>
            <span className={styles.box__text}>{watch.Phone}</span>
          </div>
        </div>
        <div className={styles.trash}>
          <i
            class="fas fa-trash-alt"
            onClick={() => onDeleteHandler(watch.id)}
          ></i>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      {watches.length === 0 ? (
        noWatchListings
      ) : (
        <div className={styles.profile}>{firebaseSell}</div>
      )}
    </>
  );
}

export default SellWatchProfile;
