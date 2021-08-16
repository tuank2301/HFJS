import React from "react";

const Doc = () => {
  function init() {
    var planet = document.getElementById("greenplanet");

    planet.innerHTML = "Red Alert: hit by phaser fire!";
    planet.setAttribute("class", "redtext");
  }
  window.onload = init;

  return (
    <div className='margin'>
      <h1>Green Planet</h1>
      <p id='greenplanet'>All is well</p>
      <h1>Red Planet</h1>
      <p id='redplanet'>Red Planet</p>
      <h1>Blue Planet</h1>
      <p id='blueplanet'>All system A-OK</p>
      <init />
    </div>
  );
};

export default Doc;
