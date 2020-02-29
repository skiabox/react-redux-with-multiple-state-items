import { BUY_CAKE } from './cakeTypes';

// action (an object with a property) creator function
export const buyCake = () => {
  return {
    type: BUY_CAKE
  };
};
