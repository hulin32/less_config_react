import { handle } from 'redux-pack';

const LOAD_FOO = 'LOAD_FOO';
const INCRE_FOO = 'INCRE_FOO';

const fooReducer = function fooReducer(state = { status: 'initial', count: 0 }, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_FOO:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isLoading: true,
          fooError: null,
        }),
        finish: prevState => ({ ...prevState, isLoading: false }),
        failure: prevState => ({ ...prevState, fooError: payload }),
        success: prevState => ({ ...prevState, foo: payload }),
      });
    case INCRE_FOO:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default fooReducer;
