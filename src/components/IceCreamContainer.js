import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

const IceCreamContainer = props => {
  return (
    <div>
      <h2>Number of icecreams = {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy Icecream</button>
    </div>
  );
};

//redux related function

//new prop for our component called numOfCakes (the key inside the returned object)
const mapStateToProps = state => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams
  };
};

//new prop for our component called buyIceCream (the key inside the returned object)
const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  };
};

//wrap the component with connect since we are not using hooks yet
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
