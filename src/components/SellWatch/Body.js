import body from "./body.module.scss";

import Banner from "./Banner";
import SellWatchForm from "./SellWatchForm";
import HowItWorks from "./HowItWorks";

// https://www.chrono24.com/offer/index.htm

//https://stackoverflow.com/questions/64327232/typeerror-firebase-firebase-webpack-imported-module-1-firestore-collection

function Body() {
  // useEffect(
  //   () =>
  //     onSnapshot(collection(db, "users"), (snapshot) =>
  //       //console.log(snapshot.docs.map((doc) => doc.data()))
  //       console.log(snapshot.docs)
  //     ),
  //   []
  // );

  return (
    <div>
      <Banner />
      <SellWatchForm />
      <HowItWorks />
    </div>
  );
}

export default Body;
