"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormData, ValidationErrors } from "../types/auth";
import { useAuth } from "@/hooks/useAuth";

const dummyUsers = [
  {
    email: "admin@gmail.com",
    password: "admin@123",
    user: {
      id: 1,
      name: "Admin",
      email: "admin@gmail.com",
      role: "admin",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
  },
];

function LoginPage() {
  const router = useRouter();
  const {
    login,
    loading,
    error,
    isAuthenticated,
    clearAuthError,
    loginAttempts,
  } = useAuth();

  const [formData, setFormData] = useState<FormData>({
    email: "admin@gmail.com",
    password: "admin@123",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  );
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        clearAuthError();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, clearAuthError]);

  const validateForm = () => {
    const errors: ValidationErrors = {};

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (validationErrors[name as keyof ValidationErrors]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const mokeLoginApi = async (credentials: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const matchingUser = dummyUsers.find(
      (user) =>
        user.email == credentials.email && user.password == credentials.password
    );

    if (matchingUser) {
      return {
        success: true,
        token: `jwt-token-${Date.now()}`,
        user: matchingUser.user,
      };
    } else {
      throw new Error("Invalid email or password");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    if (!validateForm()) return;
    clearAuthError();

    setIsSubmitting(true);

    try {
      const result = await mokeLoginApi(formData);

      await login({
        email: formData.email,
        password: formData.password,
        mockResponse: result,
      });

      console.log("Login successful!");
      router.push("/dashboard");
    } catch (err) {
      console.log("Login failed:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-white dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-800 dark:text-gray-100 flex items-center justify-center p-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md"
      >
        <motion.div
          variants={itemVariants}
          className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 dark:border-white/10 p-8"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Sign in to your account</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Access your dashboard by logging in
            </p>
          </div>

          <form className="space-y-6">
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 bg-white/10 dark:bg-white/5 border border-gray-800 shadow-lg hover:shadow-xl rounded-lg dark:border-zinc-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                    validationErrors.email
                      ? "border-red-500"
                      : "border-white/20 dark:border-white/10"
                  }`}
                  placeholder="Enter your email"
                />
              </div>
              {validationErrors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {validationErrors.email}
                </p>
              )}
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-12 py-3 border-gray-200 shadow-lg hover:shadow-xl bg-white/10 dark:bg-white/5 border rounded-lg text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                    validationErrors.password
                      ? "border-red-500"
                      : "border-white/20 dark:border-white/10"
                  }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-500 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {validationErrors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {validationErrors.password}
                </p>
              )}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-between"
            >
              <label className="flex items-center text-sm">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="mr-2 rounded bg-white/10 border-white/20 text-indigo-500 focus:ring-indigo-500"
                />
                Remember me
              </label>
            </motion.div>

            <motion.button
              variants={itemVariants}
              type="button"
              disabled={loading || isSubmitting}
              className="w-full cursor-pointer  from-indigo-500 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-transparent border    hover:bg-[#0d0d0d] duration-500"
              whileHover={{ scale: loading || isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: loading || isSubmitting ? 1 : 0.98 }}
              onClick={(e) => handleSubmit(e)}
            >
              {loading || isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Signing in...
                </div>
              ) : (
                "Sign In"
              )}
            </motion.button>

            <div className="flex items-center justify-center">
              <p
                className="text-gray-600 flex bg-transparent dark:text-gray-400 text-center cursor-pointer duration-500 hover:text-blue-500"
                onClick={() => router.push("/")}
              >
                Back To Home Page
              </p>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default LoginPage;
