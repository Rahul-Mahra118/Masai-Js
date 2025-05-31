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
    try {
      async function fetchData() {
        let response = await fetch(
          `https://api.carbonintensity.org.uk/intensity/date/${date}`
        );
        let data = await response.json();
        const mappedData = data.data.map((d) => d.intensity);
        console.log(mappedData)
        setData(data.intensity);
        dispatch(addData(mappedData));
      }
      fetchData();
    } catch (error) {
      console.log(error.message);
    } finally {
    }
  }, [date]);

//   if (isLoading) return <h1>Load ho rha hai</h1>;
  return (

    <div>
     
      {

        rawIntensity.map((data,i)=>(
              <div key={i+1} style={{display:"flex", gap:'20px'}}>
                <h4> Forecast:{data.forecast}</h4>
                <h4>Actual:{data.actual}</h4>
                <h4>Index:{data.index}</h4>
              </div>

        ))
      }
    </div>
  );
};

export default CarbonPage;
