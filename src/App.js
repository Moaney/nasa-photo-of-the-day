import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

function App() {

  const [photoOfTheDay, updatePhotoOfTheDay] = useState([]);

  useEffect(() => {
    axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(res => updatePhotoOfTheDay(res.data))
        .catch(err => console.log(err));
  }, [])

  return (
    <div className="App">
      <p>
        NASA Photo Of The Day 🚀
      </p>
    </div>
  );
}

export default App;
