import React, { useEffect, useState } from "react";
import "./City.css";
const City = ({ cityData }) => {
  let cleanedJsonString = cityData.replace(/```/g, "");
  cleanedJsonString = cleanedJsonString.replace("json", "");

  const data = JSON.parse(cleanedJsonString); // Parse the JSON data
  console.log(data);
  const [visited, setVisited] = useState({});
  const [bucketlist, setBucketlist] = useState({});

  useEffect(() => {
    // Initialize state for all tourist attractions
    const initialVisited = {};
    const initialBucketlist = {};
    data.tourist_attractions.forEach((place, index) => {
      initialVisited[index] = false;
      initialBucketlist[index] = false;
    });
    setVisited(initialVisited);
    setBucketlist(initialBucketlist);
  }, []);

  const handleVisitedClick = (index) => {
    setVisited((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleBucketlistClick = (index) => {
    setBucketlist((prev) => ({ ...prev, [index]: !prev[index] }));
  };
  // console.log(visited);
  return (
    <div className="city-info">
      <header className="header">
        <h1>{data.city}</h1>
      </header>
      <main className="content">
        <div className="intro">
          <h2>{data.significance}</h2>
        </div>

        <section className="key-events">
          <h2>Key Events</h2>
          <div className="key">
            <ul>
              {data.key_events.map((event, index) => (
                <li key={index} className="lal  ">
                  <h3>{event.event}</h3>
                  <p>{event.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="tourist-info">
          <h2>Tourist Information</h2>
          <h3>Recommended Places</h3>
          <div className="trst">
            <ul>
              {data.tourist_attractions.map((place, index) => (
                <li className="lala" key={index}>
                  <h2>{place.name}</h2>
                  <p>{place.description}</p>
                  <button
                    className={visited[index] ? "visited" : ""}
                    onClick={() => handleVisitedClick(index)}
                  >
                    {visited[index] ? "Visited" : "Mark as Visited"}
                  </button>
                  <button
                    className={bucketlist[index] ? "bucketlist" : ""}
                    onClick={() => handleBucketlistClick(index)}
                  >
                    {bucketlist[index] ? "In Bucketlist" : "Add to Bucketlist"}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="safety-measures">
            <h3>Safety Measures</h3>
            <ul>
              {data.safety_measures.map((measure, index) => (
                <li key={index}>{measure}</li>
              ))}
            </ul>
          </div> */}
        </section>
      </main>
    </div>
  );
};

export default City;
