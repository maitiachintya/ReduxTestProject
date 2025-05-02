import {call, put, takeLatest} from 'redux-saga/effects';

// Worker Saga: Handles the sign-in API call
function* handleLogin(action: any) {
  try {

    console.log('action -- ',action);
    
    // yield put(
    //     signInSuccess({
    //       token: data.accessToken,
    //       refreshToken: data.refreshToken,
    //     }),
    //   );
  } catch (error: any) {
    // yield put(signInFailure(error?.response?.data?.message || error.message));
  }
}

function* authSaga() {
  yield takeLatest('auth/loginRequest', handleLogin);
}

export default authSaga;
