import { ResponsiveLine } from "@nivo/line";
import { useState, useEffect } from "react";
import { fetchSearchData } from "../Networking/ResultsNetworking";
import Header from "../Components/Header";

export default function Results() {
  const [data, setData] = useState([]);
  const [indicator, setIndicator] = useState("");

  useEffect(() => {
    async function getData() {
      await fetchData();
    }
    getData();
  }, []);

  async function fetchData() {
    const results = await fetchSearchData("search");
    setData(results.response);
    getIndicator(results.response);
  }

  function getIndicator(countryData) {
    const countries = Object.keys(countryData);
    const indicator = countryData[countries[0]][0]["indicatorname"];
    setIndicator(indicator);
  }

  function map() {
    const result = [];
    const countries = Object.keys(data);
    for (let i = 0; i < countries.length; i++) {
      const dataObj = {};
      const dataCopy = data[countries[i]].map((year) => {
        return {
          x: year.year,
          y: year.value,
        };
      });

      dataObj["id"] = countries[i];
      dataObj["color"] = "hsl(254, 70%, 50%)";
      dataObj["data"] = dataCopy;
      result.push(dataObj);
    }
    return result;
  }

  const newData = map(data);

  function myResponsiveLine(data) {
    return (
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "year",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: indicator,
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    );
  }

  return (
    <div style={{ height: 200 }}>
      <Header />
      {newData ? <div style={{ height: 200 }}>{myResponsiveLine(newData)}</div> : null}
    </div>
  );
}
