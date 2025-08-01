"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme);
    }
  }, [setTheme]);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const handleThemeToggle = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="cursor-pointer fixed z-50 top-5 right-5">
      <motion.button
        onClick={handleThemeToggle}
        className={`
        ring-1
        relative w-16 h-8 rounded-full p-1 transition-colors duration-300 cursor-pointer
         
        ${
          isDark
            ? "bg-[#1c1c1c] focus:ring-gray-400"
            : "bg-gray-300 focus:ring-gray-400"
        }
      `}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        initial={false}
        animate={{
          backgroundColor: isDark ? "#1c1c1c" : "#d1d5db",
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center"
          layout
          animate={{
            x: isDark ? 32 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
          }}
        >
          <motion.div
            key={isDark ? "moon" : "sun"}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            {isDark ? (
              <Moon size={14} className="text-[#1c1c1c]" />
            ) : (
              <Sun size={14} className="text-yellow-500" />
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: isDark
              ? "inset 0 2px 4px rgba(0, 0, 0, 0.3)"
              : "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
    </div>
  );
};

export default ThemeSwitcher;
