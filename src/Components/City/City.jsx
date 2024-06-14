import React from 'react';

const City = ({ cityData }) => {
    let cleanedJsonString = cityData.replace(/```/g, '');
    cleanedJsonString = cleanedJsonString.replace('json','');

  const data = JSON.parse(cleanedJsonString);  // Parse the JSON data
    console.log(data);
  return (
    <div className="city-info">
        <h1>{data.city}</h1>
      <h2>{data.significance}</h2>
      <section>
        <h2>Significance</h2>
        <p>{data.significance}</p>
      </section>

      <section>
        <h2>Key Events</h2>
        <ul>
          {data.key_events.map((event, index) => (
            <li key={index}>
              <h3>{event.event}</h3>
              <p>{event.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Tourist Information</h2>
        <h3>Recommended Places</h3>
        <ul>
          {data.tourist_attractions.map((place, index) => (
            <li key={index}><h2>{place.name}</h2> <p>{place.description}</p></li>
          ))}
        </ul>
        <h3>Safety Measures</h3>
        <ul>
          {data.safety_measures.map((measure, index) => (
            <li key={index}>{measure}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default City;
