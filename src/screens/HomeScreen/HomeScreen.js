import React from "react";
import "./homeScreen.css";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Row from "../../components/Row/Row";
import requests from "../../components/Request";
export default function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* nav */}
      <Navbar></Navbar>
      {/* banner */}
      <Banner></Banner>
      {/* row */}
      <Row
        title={"NETFLIX ORIGINALS"}
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      ></Row>
      <Row title={"Trending Now"} fetchURL={requests.fetchTrending}></Row>
      <Row title={"Top Rated"} fetchURL={requests.fetchTopRated}></Row>
      <Row title={"Action Movies"} fetchURL={requests.fetchActionMovies}></Row>
      <Row title={"Comedy Movies"} fetchURL={requests.fetchComedyMovies}></Row>
      <Row title={"Horror Movies"} fetchURL={requests.fetchHorrorMovies}></Row>
      <Row
        title={"Romance Movies"}
        fetchURL={requests.fetchRomanceMovies}
      ></Row>
      <Row title={"Documentaries"} fetchURL={requests.fetchDocumentaries}></Row>
    </div>
  );
}
