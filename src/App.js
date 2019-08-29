import React, { useState, useEffect } from "react";
import axios from 'axios';
import Photo from '../src/components/Photo';
import styled from 'styled-components';

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
      axios
          .get(`https://api.nasa.gov/planetary/apod?api_key=FrWR3FRSNdFdPdKVMJa9dPxjuIZBuf1LfjSqTsZg`)
          .then(res => {
            console.log(res.data);
            setData(res.data)
          })
          .catch(err => console.log(err));
  }, [])

  const Div = styled.div `
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: black;
  color: white;
  `
  const H1 = styled.h1 `
  font-family: 'Lexend Peta', sans-serif;
  `
 
  return (
    <Div className="App">
      <H1>
        NASA Photo Of The Day <span role="img" aria-label="rocket">🚀</span>
      </H1>
      <div>
        <Photo title={data.title} url={data.url} explanation={data.explanation} />
      </div>
    </Div>
  );
}

export default App;
