import { BUY_ICECREAM } from './iceCreamTypes';

// action (an object with a property) creator function
export const buyIceCream = () => {
  return {
    type: BUY_ICECREAM
  };
};
