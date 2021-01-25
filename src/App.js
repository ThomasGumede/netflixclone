import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      
      <Nav />
        <Banner />
        <Row 
        title = "NETFLIX ORIGINALS" 
        fetchUrl = {requests.fetchNetFlixOriginals}
        isLargeRow = {true}
        />
        <Row title = "Trending Now" fetchUrl = {requests.fetchTreding}/>
        <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
        <Row title = "War & Politics Series" fetchUrl = {requests.fetchWar}/>
        <Row title = "Sci-Fi & Fiction Series" fetchUrl = {requests.fetchFiction}/>
        <Row title = "Science Fiction Movies" fetchUrl = {requests.fetchScienceFiction}/>
        
      
      
    </div>
  );
}

export default App;
