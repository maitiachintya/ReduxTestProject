import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LOGIN_REQUEST_TYPE, LOGIN_SUCCESS_TYPE} from '../../types';

interface AuthState {
  token: string;
  refreshToken: string;
  loading: boolean;
  error: string | null;
  loginRes: object;
  signUpRes: object;
}

const initialState: AuthState = {
  refreshToken: '',
  token: '',
  loading: false,
  error: null,
  loginRes: {},
  signUpRes: {},
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Login
    loginRequest(state, action: PayloadAction<LOGIN_REQUEST_TYPE>) {
      state.loading = true;
      state.error = null;
    },
    loginSuceess(state, action: PayloadAction<LOGIN_SUCCESS_TYPE>) {
      state.loading = false;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.error = null;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  // Sign-in
  loginRequest,
  loginSuceess,
  loginFailure,
} = authReducer.actions;

export default authReducer.reducer;
