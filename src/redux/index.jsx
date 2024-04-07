import React from "react";
import { connect } from "react-redux";
import { buyCake } from "./cake/cakeAction";

const mapStateToProps = state => {
  return {
    numOfCake: state.cake.numOfCake,
  };
};

const CakeContainer = ({ numOfCake, buyCake }) => {
  return (
    <div>
      <h1>number of cake {numOfCake}</h1>
      <button onClick={buyCake}>Buy cake</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

const ConnectedCakeContainer = connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

export { ConnectedCakeContainer as CakeContainer, buyCake };