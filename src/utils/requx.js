import { createAction } from 'redux-starter-kit';

const requx = (request, action) => {
  const alpha = createAction(`${action}/fetch:request`);
  const beta = createAction(`${action}/fetch:success`);
  const gamma = createAction(`${action}/fetch:failure`);

  return {
    request,
    types: { alpha, beta, gamma },
  };
};

export default requx;
