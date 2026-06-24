import { Action } from '../types/payload';
import { useCartStore } from '../store/cartStore';

export const handleAction = (action: Action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (action.payload?.id) {
        useCartStore
          .getState()
          .addItem(action.payload.id);
      }
      break;

    case 'DEEP_LINK':
      console.log(
        'Navigate to',
        action.payload?.url
      );
      break;

    default:
      console.warn(
        'Unknown action',
        action.type
      );
  }
};