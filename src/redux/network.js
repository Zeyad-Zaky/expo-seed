import { createAction } from 'redux-starter-kit';
import API_BASE_URL from 'utils/apiBase';

export const NETWORK_REQUEST = createAction('network/request');

const network = store => next => action => {
  const { type } = action;
  if (type !== NETWORK_REQUEST.toString()) next(action);

  const {
    request: { endpoint, config },
  } = action;

  const url = API_BASE_URL + endpoint;
};

export default network;
