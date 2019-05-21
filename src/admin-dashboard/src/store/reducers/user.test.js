import userReducer from './user';
import { user } from '../actions';

const initialState = {};
describe('userReducer', () => {
  it('check get is return initial state', () => {
    expect(userReducer({}, { type: user.types.LOGIN })).toEqual(initialState)
  });
  it('check to get login correct', () => {
    expect(userReducer({}, { type: user.types.LOGIN_SUCCESS, payload: {} })).toEqual({})
  })
});

