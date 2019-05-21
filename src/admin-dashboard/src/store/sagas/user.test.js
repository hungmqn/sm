import { call, put, takeEvery } from 'redux-saga/effects';
import { handleLogin, handleRegister, login, register } from './user';
import { user } from '../actions';
import Api from '../../utils/Api';

const getPlanet = () => {
  return Api.post(`https://swapi.co/api/planets/1`).then(result => result);
};

const getPlanets = async () => {
  return await Api.post(`https://swapi.co/api/planets`);
};

describe('userSagas', () => {
  it('test handle login', () => {
    const action = {
      type: user.types.LOGIN,
      payload: {
        username: 'sadmin',
        password: '123456'
      }
    }
    try {
      const result = {
        id: 1,
        token: 'dfddsfdsfs'
      }
      // expect(handleLogin().next(action).value).toEqual(put(user.actions.loginSuccess(result)));
    } catch (error) {
      // expect(handleLogin().next(action).value).toEqual(put(user.actions.loginError(error)));
    }
    
  })

  // it('test call login', (done) => {
  //   const userCredentials = {
  //     username: 'sadmin',
  //     password: '123456'
  //   };
  //   // expect.assertions(1);
  //   try {
  //     login(userCredentials).then(result => {
  //       expect(result).toHaveProperty('data')
  //       done();
  //     })
  //   } catch (error) {
  //     console.log(error);
  //     expect(error).toHaveProperty('data')
  //     throw error;
  //   }
    
  // })

  it('test call async/await planets', async () => {
    expect.assertions(1);
    const result = await getPlanets();
    expect(result.data.count).toEqual(61);
  })

  it('test call promise planet', () => {
    expect.assertions(1);
    return getPlanet().then(result => {
      expect(result.data).toHaveProperty('name');
    });
  });
});