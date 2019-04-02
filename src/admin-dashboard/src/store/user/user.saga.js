import { all, call, put, takeEvery } from 'redux-saga/effects';

import Api from '../../utils/Api';

      
// export default function* fetchData(action) {
//    try {
//       // const data = yield call(Api.fetchUser, action.payload.url)
//       const data = yield Api.post(`auth/login`, action.payload);
//       console.log(data);

//       yield all({type: "LOGIN_SUCCESS", data})
//    } catch (error) {
//       yield all({type: "LOGIN_ERROR", error})
//    }
// }

const login = function* (action) {
   try {
      const data = yield call(Api.post(`auth/login`, action.payload));
      yield put({type: "LOGIN_SUCCESS", data})
   } catch (error) {
      yield put({type: "LOGIN_ERROR", error})
   }
}

const register = function* (action) {
   try {
      const data = yield call(Api.post(`auth/register`, action.payload));
      yield put({type: "LOGIN_SUCCESS", data})
   } catch (error) {
      yield put({type: "LOGIN_ERROR", error})
   }
}


export default {
   login: login,
   register: register,
};

// export default login;