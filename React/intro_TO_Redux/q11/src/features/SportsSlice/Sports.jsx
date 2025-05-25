import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav, fetchMatchDetailes } from "./sportsSlice";

const Sports = ({ query }) => {
  const { isLoading, isError, footballMatches } = useSelector(
    (state) => state.matches
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMatchDetailes());
  }, []);
  const filteredMatches = footballMatches.filter(
    (match) =>
      match.data.team1.toLowerCase().includes(query.search.toLowerCase()) ||
      match.data.team2.toLowerCase().includes(query.search.toLowerCase())
  );
  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>fav</th>
            <th>Match ID</th>
            <th>Team 1</th>
            <th>Team 2</th>
            <th>Score</th>
            <th>Date</th>
            <th>Venue</th>
            <th>Outcome</th>
          </tr>
        </thead>
        <tbody>
          {filteredMatches.map(({ id, data }) => (
            <tr key={id}>
              {/* <td ></td> */}
              <td>
              <button onClick={()=>dispatch(addFav(id))}>😍</button>

              </td>
              <td>{data.matchId}</td>
              <td>{data.team1}</td>
              <td>{data.team2}</td>
              <td>
                {data.team1Score} - {data.team2Score}
              </td>
              <td>{data.date}</td>
              <td>{data.venue}</td>
              <td>{data.outcome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sports;
