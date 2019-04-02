import { user } from '../actions';

const { types } = user;

const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case types.LOGIN:
      return state;
    case types.LOGIN_SUCCESS:
      const { data } = action.payload;
      return { ...state, ...data };
    case types.LOGIN_ERROR:
      return { ...state };
    case types.REGISTER:
      console.log(action)
      return state;
    case types.REGISTER_SUCCESS:
      console.log(action)
      return state;
    case types.REGISTER_ERROR:
      console.log(action)
      return state;
    case types.LOGOUT:
      return {};
    default:
      return state;
  }
}


export default reducer;