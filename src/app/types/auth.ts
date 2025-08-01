export interface LoginPayload {
  email: string;
  password: string;
  mockResponse?: {
    token: string;
    user: User;
  };
}

export interface UserProfileUpdate {
  name?: string;
  avatar?: string;
  role?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: string;
}

export type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  loginAttempts: number;
  lastLoginTime: string | null;
};

export interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface ValidationErrors {
  email?: string;
  password?: string;
}
