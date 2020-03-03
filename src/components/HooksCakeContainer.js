import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

//React Redux now includes its own useSelector and useDispatch Hooks that can be used instead of connect.
const HooksCakeContainer = () => {
  //useSelector is analogous to connect’s mapStateToProps.
  //You pass it a function that takes the Redux store state and returns the pieces of state you’re interested in.
  const numOfCakes = useSelector(state => state.cake.numOfCakes);
  //useDispatch replaces connect’s mapDispatchToProps but is lighter weight.
  //All it does is return your store’s dispatch method so you can manually dispatch actions.
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Num of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  );
};

export default HooksCakeContainer;
