import React from "react";
import ChessPrezentationComponent from "./components/ChessPrezentationComponent";
import GymPresentationComponent from "./components/GymPresentationComponent";
import Navbar from "./components/Navbar";
import ProfileComponent from "./components/ProfileComponent";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <ProfileComponent></ProfileComponent>
      <GymPresentationComponent></GymPresentationComponent>
      <ChessPrezentationComponent></ChessPrezentationComponent>
    </>
  );
};

export default App;
