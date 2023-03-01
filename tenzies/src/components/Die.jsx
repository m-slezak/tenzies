import React from "react";

const Die = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return (
    <>
      <div className="box" style={styles} onClick={props.holdDice}>
        <h2 className="number">{props.value}</h2>
      </div>
    </>
  );
};

export default Die;
