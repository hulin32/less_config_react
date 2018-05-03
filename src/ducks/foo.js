import { handle } from 'redux-pack';
import Duck from 'extensible-duck';

export default new Duck({
  namespace: 'foo',
  store: 'foo_store',
  types: ['LOAD_FOO', 'INCRE_FOO'],
  initialState: {},
  reducer: (state, action, duck) => {
    const { type, payload } = action;
    switch (type) {
      case duck.types.LOAD_FOO:
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
      case duck.types.INCRE_FOO:
        return {
          ...state,
          count: state.count + 1,
        };
      default:
        return state;
    }
  },
  creators: duck => ({
    increFoo: () => ({ type: duck.types.INCRE_FOO }),
  }),
});
