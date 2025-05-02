// types.ts
export type RootMainStackParamList = {
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
};

export type LOGIN_REQUEST_TYPE = {
  email: string;
  password: string;
};

export type LOGIN_SUCCESS_TYPE = {token: string; refreshToken: string};
