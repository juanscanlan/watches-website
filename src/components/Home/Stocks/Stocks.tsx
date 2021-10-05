import { Line } from "react-chartjs-2";

import { useState, useEffect } from "react";

function Stocks() {
  const [company, setCompany] = useState("AAPL");
  const [companyTitle, setCompanyTitle] = useState("Apple Inc");
  const [x_values, setX_values] = useState<string[]>([]);

  const [y_values, setY_values] = useState<any>([]);

  const getStocks = (companyName: string) => {
    let API_KEY = "D2V18KYMWOP2UBBQ";
    let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${companyName}&outputsize=compact&apikey=${API_KEY}`;

    fetch(API_CALL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let dailyData = data["Time Series (Daily)"];
        let prices: string[] = [];
        let dates: string[] = [];

        for (let day in dailyData) {
          prices.unshift(dailyData[day]["1. open"]);
          dates.unshift(day);
        }
        setY_values(prices);
        setX_values(dates);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getStocks(company);
  }, [company]);

  const onSelectCompanyHandler = (event: any) => {
    setCompany(event.target.value);
    setCompanyTitle(
      event.nativeEvent.target[event.nativeEvent.target.selectedIndex].text
    );
  };

  return (
    <div className="stocks">
      <div className="stocks__header">
        <h3 className="stocks__title">Daily Stock Prices</h3>
        <div className="stocks__header-top">
          <select
            name="Company"
            id="SelectCompanyStock"
            onChange={onSelectCompanyHandler}
          >
            <option value="AAPL">Apple Inc.</option>
            <option value="CSIOY">Casio</option>
            <option value="CTZ.FRK">Citizen</option>
            <option value="FOSL">Fossil Group, Inc</option>
            <option value="GRMN">Garmin Ltd</option>
            <option value="LVMHF">Louis Vuitton</option>
            <option value="MOV">Movado Group</option>
            <option value="RL">Ralph Lauren Corp</option>
            <option value="SWGAY">Swatch Group AG</option>
          </select>
        </div>
        <span>(Alpha Vantage API has a max limit of 5 request per minute)</span>
      </div>
      {
        <div>
          <Line
            height={200}
            width={600}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                xAxis: {
                  ticks: {
                    maxTicksLimit: 5,
                  },
                },
                yAxes: {
                  title: {
                    display: true,
                    text: "Stock Price ($USD)",
                    font: {
                      size: 15,
                    },
                  },
                  ticks: {
                    precision: 0,
                  },
                },
              },
            }}
            data={{
              labels: x_values,
              datasets: [
                {
                  label: `Daily Stock Price for ${companyTitle}`,
                  data: y_values,
                  fill: false,
                  borderColor: "rgb(75, 192, 192)",
                  tension: 0.1,
                },
              ],
            }}
          />
        </div>
      }
    </div>
  );
}

export default Stocks;
