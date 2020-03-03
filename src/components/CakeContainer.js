import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

const CakeContainer = props => {
  return (
    <div>
      <h2>Number of cakes = {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

//redux related function

//new prop for our component called numOfCakes (the key inside the returned object)
const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  };
};

//new prop for our component called buyCake (the key inside the returned object)
const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  };
};

//wrap the component with connect since we are not using hooks yet
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
