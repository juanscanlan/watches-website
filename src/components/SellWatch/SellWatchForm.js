import body from "./body.module.scss";

import { useState, useEffect, useRef } from "react";

import db from "../Firebase/Firebase";
import { doc, setDoc, onSnapshot, collection, query } from "firebase/firestore";

import { useHistory } from "react-router-dom";

function SellWatchForm() {
  let history = useHistory();

  const formRef = useRef();

  const [watches, setWatches] = useState([]);

  const email = localStorage.getItem("email");

  useEffect(() => {
    let q = query(collection(db, "users", email, "sell"));
    let watchSnapshot = onSnapshot(q, (querySnapshot) => {
      let watchesToSell = [];
      querySnapshot.forEach((watch) => {
        watchesToSell.push(watch.data());
      });
      setWatches(watchesToSell);
    });
  }, []);

  const addWatch = async (name, phone, brand, model, age, id) => {
    const docRef = await setDoc(doc(db, "users", email, "sell", id), {
      Name: name,
      Phone: phone,
      Brand: brand,
      Model: model,
      Age: age,
      id: id,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let currentdate = new Date();
    let datetime =
      currentdate.getDate() +
      "." +
      (currentdate.getMonth() + 1) +
      "." +
      currentdate.getFullYear() +
      "-" +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();

    let addWatchName = formRef.current["personalName"].value;
    let addWatchPhone = formRef.current["personalPhone"].value;
    let addWatchBrand = formRef.current["watchBrand"].value;
    let addWatchModel = formRef.current["watchModel"].value;
    let addWatchAge = formRef.current["watchAge"].value;
    let addWatchId = datetime;

    addWatch(
      addWatchName,
      addWatchPhone,
      addWatchBrand,
      addWatchModel,
      addWatchAge,
      addWatchId
    );

    history.push("/Profile");
  };

  return (
    <form
      className={body.sellWatch__container}
      onSubmit={submitHandler}
      ref={formRef}
    >
      <div className={body.personalInfo}>
        <h2>Seller Information</h2>

        <div className={body.personalInfo__name}>
          <span>Public Name</span>
          <input type="text" name="personalName" />
        </div>
        <div className={body.personalInfo__email}>
          <span>Phone Number</span>
          <input type="number" name="personalPhone" />
        </div>
      </div>
      <div className={body.watchInfo}>
        <div className={body.brand}>
          <h2>Watch Information</h2>
          <div className={body.watchInfo__brand}>
            <span>Brand/Manufacturer</span>
            <select name="watchBrand">
              <option disabled="disabled" placeholder="eg" value="0" selected>
                Eg: Rolex
              </option>
              <option value="A. Lange &amp; Sohne">A. Lange &amp; Sohne</option>
              <option value="Baume &amp; Mercier">Baume &amp; Mercier</option>
              <option value="Breitling">Breitling</option>
              <option value="Cartier">Cartier</option>
              <option value="Hublot">Hublot</option>
              <option value="IWC">IWC</option>
              <option value="Jaeger-LeCoultre">Jaeger-LeCoultre</option>
              <option value="OMEGA">OMEGA</option>
              <option value="Panerai">Panerai</option>
              <option value="Patek Philippe">Patek Philippe</option>
              <option value="Rolex">Rolex</option>
              <option value="TAG Heuer">TAG Heuer</option>
              <option value="Tudor">Tudor</option>
              <option value="Zenith">Zenith</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className={body.watchInfo__model}>
          <span>Model</span>
          <input type="text" name="watchModel" placeholder="Eg: E75469" />
        </div>
        <div className={body.watchInfo__age}>
          <span>Approximate Age of Watch (Years)</span>
          <input type="text" name="watchAge" placeholder="Eg: 3" />
        </div>
        <div className={body.watchInfo__button}>
          <button type="submit">SUBMIT</button>
        </div>
      </div>
    </form>
  );
}

export default SellWatchForm;
