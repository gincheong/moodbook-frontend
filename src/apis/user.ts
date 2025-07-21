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
  return defaultFetch(`${Envs.VITE_API_ENDPOINT}/api/oauth/tempSigUp`, {
    method: 'POST',
    body: JSON.stringify(input),
  });
};
