import React, { useState } from "react";
import "./Home.css";
import EXIF from "exif-js";
import City from "../City/City";

function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [cityData, setCityData] = useState(null); // State to hold city data
  const [city, setCity] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [abtUs,setabtUS]=useState(false)
  const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");

  const apiKey = "AIzaSyBrS4g-B_RLCXLcazAo7zKhFH60hLERqww";
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction:
      "You are Travarna, a friendly assistant who gives significance of the location in less than 150 words and 3 to 5 key events took place in the history about any place in the world and all the recommended tourist attractions and their descriptions and safety measures for travelling to that place while interacting friendly with the user. Get the data about the query asked by the user from the google database or from the google search results. Give the results in a json file",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  async function run(props) {
    try {
      const chatSession = model.startChat({
        generationConfig,
        history: [
          {
            role: "user",
            parts: [
              {
                text: '{\n"city":"Hyderabad"\n"significance": "Hyderabad, the \'City of Pearls\', is a vibrant metropolis steeped in history and culture. It was once a prominent trading hub and the capital of the Nizams, showcasing a rich blend of Mughal and Islamic architecture. Today, Hyderabad is a thriving hub for technology, pharmaceuticals, and education.",\n"key_events": [\n{\n"event": "Establishment of the Qutb Shahi Dynasty (1512):",\n"description": "The city\'s foundation was laid by the Qutb Shahi dynasty, who established a flourishing kingdom and built iconic monuments like the Charminar and the Golconda Fort."\n},\n{\n"event": "Ascendancy of the Nizams (1724):",\n"description": "The Nizams, a dynasty of viceroys, took control of Hyderabad and turned it into a major center of power and trade, renowned for its pearl industry."\n},\n{\n"event": "Integration into India (1948):",\n"description": "After India\'s independence, Hyderabad became part of the Indian Union, marking a significant transition in its political landscape."\n},\n{\n"event": "Rise as a Technological Hub (1990s):",\n"description": "The city witnessed a rapid transformation in the late 20th century, emerging as a major player in the IT sector, attracting global companies and driving economic growth."\n}\n],\n"tourist_attractions": [\n{\n"name": "Charminar",\n"description": "A 16th-century mosque with iconic minarets, built by Muhammad Quli Qutb Shah. It\'s a symbol of Hyderabad and offers panoramic views of the city."\n},\n{\n"name": "Golconda Fort",\n"description": "An ancient fort built by the Kakatiya dynasty, later expanded by the Qutb Shahis. Explore its intricate architecture, underground tunnels, and fascinating history."\n},\n{\n"name": "Qutb Shahi Tombs",\n"description": "Magnificent mausoleums of the Qutb Shahi rulers, showcasing Mughal and Islamic architectural influences. Admire the intricate carvings and the serene atmosphere."\n},\n{\n"name": "Salar Jung Museum",\n"description": "One of the largest museums in India, housing an extensive collection of art, artifacts, manuscripts, and textiles from across the globe."\n},\n{\n"name": "Birla Mandir",\n"description": "A beautiful Hindu temple dedicated to Lord Venkateswara. Experience the spiritual atmosphere and enjoy the stunning views from the hilltop location."\n}\n],\n"safety_measures": [\n"Be aware of your surroundings, especially in crowded areas.",\n"Avoid walking alone at night, especially in unfamiliar areas.",\n"Keep your valuables safe and secure.",\n"Use reputable transportation services and avoid hailing taxis from the street.",\n"Be respectful of local customs and traditions.",\n"Learn basic phrases in Hindi or Telugu for communication."\n]\n}\n\nThe output should be the above the format',
              },
            ],
          },
          {
            role: "model",
            parts: [
              {
                text: '{\n"city": "Hyderabad",\n"significance": "Hyderabad, known as the \'City of Pearls\', is a bustling metropolis brimming with history and culture. It was a key trading center and the capital of the Nizams, showcasing a captivating blend of Mughal and Islamic architecture. Today, Hyderabad thrives as a hub for technology, pharmaceuticals, and education.",\n"key_events": [\n{\n"event": "Establishment of the Qutb Shahi Dynasty (1512):",\n"description": "The city\'s foundation was laid by the Qutb Shahi dynasty, who established a prosperous kingdom and constructed iconic monuments like the Charminar and the Golconda Fort."\n},\n{\n"event": "Ascendancy of the Nizams (1724):",\n"description": "The Nizams, a dynasty of viceroys, took control of Hyderabad, transforming it into a prominent center of power and trade, renowned for its pearl industry."\n},\n{\n"event": "Integration into India (1948):",\n"description": "After India\'s independence, Hyderabad became a part of the Indian Union, marking a significant shift in its political landscape."\n},\n{\n"event": "Rise as a Technological Hub (1990s):",\n"description": "The city experienced a rapid transformation in the late 20th century, emerging as a major player in the IT sector, attracting global companies and driving economic growth."\n}\n],\n"tourist_attractions": [\n{\n"name": "Charminar",\n"description": "A 16th-century mosque with iconic minarets, built by Muhammad Quli Qutb Shah. It\'s a symbol of Hyderabad and offers panoramic views of the city."\n},\n{\n"name": "Golconda Fort",\n"description": "An ancient fort built by the Kakatiya dynasty, later expanded by the Qutb Shahis. Explore its intricate architecture, underground tunnels, and fascinating history."\n},\n{\n"name": "Qutb Shahi Tombs",\n"description": "Magnificent mausoleums of the Qutb Shahi rulers, showcasing Mughal and Islamic architectural influences. Admire the intricate carvings and the serene atmosphere."\n},\n{\n"name": "Salar Jung Museum",\n"description": "One of the largest museums in India, housing an extensive collection of art, artifacts, manuscripts, and textiles from across the globe."\n},\n{\n"name": "Birla Mandir",\n"description": "A beautiful Hindu temple dedicated to Lord Venkateswara. Experience the spiritual atmosphere and enjoy the stunning views from the hilltop location."\n}\n],\n"safety_measures": [\n"Be aware of your surroundings, especially in crowded areas.",\n"Avoid walking alone at night, especially in unfamiliar areas.",\n"Keep your valuables safe and secure.",\n"Use reputable transportation services and avoid hailing taxis from the street.",\n"Be respectful of local customs and traditions.",\n"Learn basic phrases in Hindi or Telugu for communication."\n]\n}\n',
              },
            ],
          },
          {
            role: "user",
            parts: [{ text: "france" }],
          },
          {
            role: "model",
            parts: [
              {
                text: '{\n"city": "France",\n"significance": "France, a nation steeped in history and culture, is a captivating blend of vibrant cities, breathtaking landscapes, and a rich artistic heritage.  From the iconic Eiffel Tower to the picturesque French countryside, France offers a unique experience for every traveler.",\n"key_events": [\n{\n"event": "French Revolution (1789-1799):",\n"description": "A pivotal period that overthrew the monarchy and established a republic, shaping modern France and influencing political thought globally."\n},\n{\n"event": "Napoleon Bonaparte\'s Reign (1799-1814):",\n"description": "The rise of Napoleon, a brilliant military leader, marked a period of expansion and reform, though his ambition led to wars across Europe."\n},\n{\n"event": "World War I and World War II (1914-1918, 1939-1945):",\n"description": "France played a crucial role in both World Wars, enduring significant loss and ultimately contributing to Allied victories."\n},\n{\n"event": "The Fifth Republic (1958-Present):",\n"description": "The current French government, established after a period of instability, emphasizes a strong executive branch and a stable political system."\n}\n],\n"tourist_attractions": [\n{\n"name": "Eiffel Tower",\n"description": "An iconic symbol of Paris, this wrought-iron lattice tower offers stunning panoramic views of the city. Enjoy a meal in one of its restaurants or take a ride to the top."\n},\n{\n"name": "Louvre Museum",\n"description": "Home to masterpieces like the Mona Lisa and Venus de Milo, the Louvre is one of the world\'s most renowned art museums, showcasing an extensive collection of paintings, sculptures, and artifacts."\n},\n{\n"name": "Arc de Triomphe",\n"description": "A triumphal arch commemorating French military victories, located at the end of the Champs-Élysées. Climb to the top for breathtaking views of the city."\n},\n{\n"name": "Mont Saint-Michel",\n"description": "A breathtaking tidal island off the Normandy coast, home to a historic abbey and stunning views of the surrounding landscape. Explore the abbey\'s history and enjoy the unique tidal phenomenon."\n},\n{\n"name": "French Riviera",\n"description": "A stretch of coastline known for its glamour and luxury, featuring cities like Nice, Cannes, and Monaco. Relax on pristine beaches, indulge in fine dining, and explore the region\'s vibrant nightlife."\n}\n],\n"safety_measures": [\n"Be mindful of pickpockets, especially in crowded tourist areas.",\n"Keep your valuables safe and secure.",\n"Use reputable transportation services and be aware of scams.",\n"Be respectful of local customs and traditions.",\n"Learn basic French phrases for communication."\n]\n}\n',
              },
            ],
          },
        ],
      });

      const result = await chatSession.sendMessage(props.city);
      console.log(result.response.text());
      setCityData(result.response.text());
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false); // End loading
    }
  }

  function dmsToDecimal(degrees, minutes, seconds) {
    const decimalDegrees = degrees + minutes / 60 + seconds / 3600;
    return decimalDegrees;
  }

  async function getCityOpenCage(latitude, longitude) {
    setIsLoading(true);
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      let city=""
      if (data.address ) {
        if(data.address.city){
          city = data.address.city;
      }else{
         city = data.address.county;
      }
        setCity(city);
        console.log(city);
        run({ city: city });
      } else {
        console.log("No results found.");
      }
    } catch (error) {
      console.error("Geocoding service error:", error);
    }
  }

  function getExifData(file) {
    return new Promise((resolve, reject) => {
      EXIF.getData(file, function () {
        const latitude = EXIF.getTag(this, "GPSLatitude");
        const longitude = EXIF.getTag(this, "GPSLongitude");

        if (latitude && longitude) {
          let lat = dmsToDecimal(latitude[0], latitude[1], latitude[2]);
          if (EXIF.getTag(this, "GPSLatitudeRef") === "S") {
            lat *= -1;
          }

          let lon = dmsToDecimal(longitude[0], longitude[1], longitude[2]);
          if (EXIF.getTag(this, "GPSLongitudeRef") === "W") {
            lon *= -1;
          }

          getCityOpenCage(lat, lon);
        } else {
          console.log("No GPS data found.");
        }
      });
    });
  }

  const handleFileUpload = async (event) => {
    setIsLoading(true);
    const file = event.target.files[0];
    if (file) {
      await getExifData(file);
    }
  };

  const handleExploreClick = async () => {
    setIsLoading(true);
    // Code to get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude,longitude)
          await getCityOpenCage(latitude, longitude);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
          setIsLoading(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setIsLoading(false);
    }
  };

  const abtusClick=() =>{
    setabtUS(true);
  }

  return (
    <div className="container">
      {isLoading ? ( // Display loading spinner if loading
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      ) : cityData != null ? (
        <City cityData={cityData} />
      ) :  (
        <main>
          <h1>Unfurl your inner explorer!</h1>
          <p>
            Columbus: Your guide to history's hidden gems, for curious
            travellers and history buffs alike.
          </p>
          <div className="options">
            <div className="option explore" onClick={handleExploreClick}>
              <h3>EXPLORE</h3>
              <p>Find out interesting locations around your area</p>
            </div>
            <div className="option bucket-list">
              <h3>BUCKET LIST</h3>
              <p>Pursue and achieve the greatest trip collections!</p>
            </div>
            <div className="option add-image">
              <label htmlFor="file-upload" className="custom-file-upload">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3oMNAJX-G-QdrHd0qrSvCoLgsqBxD_J2LTPbVrPTJdigMdv1cXV0C9S1JiUJhBoEcJM8&usqp=CAU"
                  alt="Add Image"
                />
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
              />
            </div>
            <div className="option visited">
              <h3>VISITED</h3>
              <p>Explore your finished endeavours</p>
            </div>
            <div className="option about" onClick={abtusClick}>
              <h3>ABOUT</h3>
              <p>About us! History nerds and developers alike!</p>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default Home;
