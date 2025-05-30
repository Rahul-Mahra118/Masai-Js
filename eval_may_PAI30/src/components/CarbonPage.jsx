import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addData } from "../features/intensitySlice";

const CarbonPage = () => {
  const { date } = useParams();
  const rawIntensity = useSelector((state) => state.intensity.rawData);
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(
          `https://api.carbonintensity.org.uk/intensity/date/${date}`
        );
        let data = await response.json();
        const mappedData = data.data.map((d) => d.intensity);
        console.log(mappedData);
        setData(mappedData); // this was incorrect: should be `mappedData` not `data.intensity`
        dispatch(addData(mappedData));
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [date, dispatch]);

  if (isLoading) {
    return <h1 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h1>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Carbon Intensity Data for {date}
      </h2>
      {rawIntensity.map((data, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 20px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h4 style={{ margin: 0 }}>Forecast: {data.forecast}</h4>
          <h4 style={{ margin: 0 }}>Actual: {data.actual}</h4>
          <h4 style={{ margin: 0 }}>Index: {data.index}</h4>
        </div>
      ))}
    </div>
  );
};

export default CarbonPage;
