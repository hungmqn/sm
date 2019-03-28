import { types } from './user.action';

const initialState = {
  user: {}
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.LOGIN:
      console.log(action)
      return { ...state, action };
    case types.REGISTER:
      return { ...state, action };
    default:
      return state;
  }
}

export default reducer;