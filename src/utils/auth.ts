import { LoginCredentials } from '../types/auth';

export const validateCredentials = (credentials: LoginCredentials): boolean => {
  return credentials.username === 'demo' && credentials.password === 'demo';
};