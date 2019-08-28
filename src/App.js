import React, { useState, useEffect } from "react";
import axios from 'axios';
import Photo from '../src/components/Photo';
import "./App.css";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
      axios
          .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
          .then(res => {
            console.log(res.data);
            setData(res.data)
          })
          .catch(err => console.log(err));
  }, [])
  return (
    <div className="App">
      <p>
        NASA Photo Of The Day <span role="img" aria-label="rocket">🚀</span>
      </p>
      <div>
        <Photo title={data.title} url={data.url} explanation={data.explanation} />
      </div>
    </div>
  );
}

export default App;
