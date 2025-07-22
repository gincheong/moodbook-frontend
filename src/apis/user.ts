import { Envs } from '@/utils/env';
import { defaultFetch } from '.';

export const Genders = {
  MALE: 'M',
  FEMALE: 'F',
} as const;
export type Gender = (typeof Genders)[keyof typeof Genders];

export interface RequestTempSignUpInput {
  email: string;
  password: string;
  name: string;
  contact: string;
  gender?: Gender;
}
export const requestTempSignUp = (input: RequestTempSignUpInput) => {
  return defaultFetch(`${Envs.VITE_API_ENDPOINT}/api/oauth/tempSignUp`, {
    method: 'POST',
    body: JSON.stringify(input),
  });
};

export interface RequestLoginInput {
  email: string;
  password: string;
}
export interface RequestLoginResponse {
  accessToken: string;
  refreshToken: string;
}
export const requestLogin = (input: RequestLoginInput) => {
  return defaultFetch(`${Envs.VITE_API_ENDPOINT}/api/oauth/login`, {
    method: 'POST',
    body: JSON.stringify(input),
  });
};

export interface RequestMeResponse {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  contact: string;
  emailVerified: boolean;
  status: string;
}
export const requestMe = () => {
  return defaultFetch(`${Envs.VITE_API_ENDPOINT}/api/oauth/me`, {
    method: 'GET',
  });
};
