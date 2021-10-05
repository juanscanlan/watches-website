import imgDeal0 from "../../../../assets/dailyDeals/dailyDeal2.jpg";
import imgDeal1 from "../../../../assets/dailyDeals/dailyDeal3.jpg";
import imgDeal2 from "../../../../assets/dailyDeals/dailyDeal4.jpg";
import imgDeal3 from "../../../../assets/dailyDeals/dailyDeal5.jpg";

import DealElement from "./DealElement";

const DailyDeals = () => {
  const DUMMY_DEALS = [
    {
      id: "1",
      brand: "TISSOT",
      description: "Chemin des Tourelles",
      newPrice: 389.99,
      oldPrice: 499.99,
    },
    {
      id: "2",
      brand: "MIDO",
      description: "Multifort",
      newPrice: 475.99,
      oldPrice: 549.99,
    },
    {
      id: "3",
      brand: "TISSOT",
      description: "Tour De France",
      newPrice: 299.99,
      oldPrice: 339.99,
    },
    {
      id: "4",
      brand: "SEIKO",
      description: "Silver Open Heart",
      newPrice: 199.99,
      oldPrice: 299.99,
    },
  ];

  return (
    <div className="dailyDeals" id="dailyDeals">
      <h3 className="dailyDeals__title">🔥 Daily Sale 🔥</h3>
      <div className="dailyDeals__container">
        <div className="dailyDeals__double">
          <DealElement
            key={DUMMY_DEALS[0].id}
            image={imgDeal0}
            info={DUMMY_DEALS[0]}
          />
          <DealElement
            key={DUMMY_DEALS[1].id}
            image={imgDeal1}
            info={DUMMY_DEALS[1]}
          />
        </div>
        <div className="dailyDeals__double">
          <DealElement
            key={DUMMY_DEALS[2].id}
            image={imgDeal2}
            info={DUMMY_DEALS[2]}
          />
          <DealElement
            key={DUMMY_DEALS[3].id}
            image={imgDeal3}
            info={DUMMY_DEALS[3]}
          />
        </div>
      </div>
    </div>
  );
};

export default DailyDeals;
