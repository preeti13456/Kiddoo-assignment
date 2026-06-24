// hooks/useActionDispatcher.ts
import { handleAction } from '../services/actionHandlers';

export const useActionDispatcher = () => {
  return handleAction;
};

