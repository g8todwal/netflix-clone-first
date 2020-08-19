import React from 'react';
import './App.css';
import Row from './Components/Row';
import requests from './request'
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row 
      	title="NETFLIX ORIGINALS" 
      	fetchUrl={requests.fetchNetflixOriginals}
      	isLargeRow
      />
      <Row title="Trending Today" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} /> 
      <Row title="India Today" fetchUrl={requests.fetchNetflixOriginals} />     
      <Row title="US/UK Top Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Because You Watched- The Notebook" fetchUrl={requests.fetchTopRated} />
    </div>
  );
}

export default App;
