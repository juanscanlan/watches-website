import body from "./body.module.scss";

// https://www.chrono24.com/offer/index.htm

function Body() {
  return (
    <div className={body.sellWatch}>
      <h1>SELL MY WATCH</h1>
      <div className={body.sellWatch__container}>
        <div className={body.brand}>
          <h3>Brand/Manufacturer</h3>
          <select name="SellBrand" id="SellBrandSelect">
            <option disabled="disabled" placeholder="eg" value="0" selected>
              Eg: ROLEX
            </option>
            <option value="1">A. Lange &amp; Sohne</option>
            <option value="2">Baume &amp; Mercier</option>
            <option value="3">Breitling</option>
            <option value="4">Cartier</option>
            <option value="5">Hublot</option>
            <option value="6">IWC</option>
            <option value="7">Jaeger-LeCoultre</option>
            <option value="8">OMEGA</option>
            <option value="9">Panerai</option>
            <option value="10">Patek Philippe</option>
            <option value="11">Rolex</option>
            <option value="12">TAG Heuer</option>
            <option value="13">Tudor</option>
            <option value="14">Zenith</option>
            <option value="15">Other Brands</option>
          </select>
        </div>
        <div className={body.model}>
          <h3>Model Number</h3>
          <input type="text" placeholder="Eg: E75469" />
        </div>
        <div className={body.button}>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Body;
