import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  loginUser,
  logoutUser,
  checkAuthStatus,
  clearError,
  updateUserProfile,
} from "@/app/store/slices/authSlice";
import { AppDispatch, RootState } from "@/app/store";
import { LoginPayload, UserProfileUpdate } from "@/app/types/auth";

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (token && !auth.isAuthenticated) {
      dispatch(checkAuthStatus());
    }
  }, [dispatch, auth.isAuthenticated]);

  const login = async (credentials: LoginPayload) => {
    return dispatch(loginUser(credentials));
  };

  const logout = async () => {
    return dispatch(logoutUser());
  };

  const clearAuthError = () => {
    dispatch(clearError());
  };

  const updateProfile = (profileData: UserProfileUpdate) => {
    dispatch(updateUserProfile(profileData));
  };

  return {
    ...auth,
    login,
    isAuthenticated: auth.isAuthenticated,
    logout,
    clearAuthError,
    updateProfile,
  };
};
