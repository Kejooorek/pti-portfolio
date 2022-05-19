import React from "react";
import GymPresentationComponent from "./components/GymPresentationComponent";
import Navbar from "./components/Navbar";
import ProfileComponent from "./components/ProfileComponent";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <ProfileComponent></ProfileComponent>
      <GymPresentationComponent></GymPresentationComponent>
    </>
  );
};

export default App;
