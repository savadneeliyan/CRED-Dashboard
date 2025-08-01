"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Star,
  Trophy,
  Crown,
  Zap,
  Shield,
  Award,
  Target,
  TrendingUp,
  Gift,
  Medal,
  ArrowLeft,
} from "lucide-react";
import React from "react";
import { useAuth } from "@/hooks/useAuth";
import ProfileSectionSkeleton from "@/component/skeleton/ProfileSectionSkeleton ";
import MagneticCard from "@/component/common/Animation";
import { useRouter } from "next/navigation";

interface Level {
  level: number;
  name: string;
  color: string;
  icon: React.ElementType;
  xp: number;
}

interface Stat {
  label: string;
  value: string | number;
  suffix: string;
  icon: React.ElementType;
  color: string;
}

const UserProfileSummary = () => {
  const router = useRouter();
  const [animatedXP, setAnimatedXP] = useState(0);
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  const { user } = useAuth();
  const userData = {
    name: user?.name,
    username: `@${user?.name}`,
    avatar: user?.avatar,
    currentLevel: 12,
    currentXP: 8450,
    xpToNextLevel: 10000,
    xpForCurrentLevel: 7500,
    totalXP: 45680,
    joinDate: "March 2023",
    streak: 15,
    achievements: 24,
    rank: "Elite",
  };

  const levels: Level[] = [
    {
      level: 1,
      name: "Beginner",
      color:
        "from-gray-400 to-gray-600  duration-500 dark:from-gray-100 dark:to-gray-400",
      icon: Target,
      xp: 0,
    },
    {
      level: 5,
      name: "Explorer",
      color: "from-green-400 to-green-600 ",
      icon: Star,
      xp: 2500,
    },
    {
      level: 10,
      name: "Adventurer",
      color:
        "from-blue-400 to-blue-600  duration-500 dark:from-blue-900 dark:to-blue-800 duration-500",
      icon: Shield,
      xp: 6000,
    },
    {
      level: 15,
      name: "Expert",
      color: "from-purple-400 to-purple-600",
      icon: Award,
      xp: 12000,
    },
    {
      level: 20,
      name: "Master",
      color: "from-yellow-400 to-yellow-600",
      icon: Trophy,
      xp: 20000,
    },
    {
      level: 25,
      name: "Legend",
      color: "from-red-400 to-red-600",
      icon: Crown,
      xp: 30000,
    },
    {
      level: 30,
      name: "Mythic",
      color: "from-indigo-400 to-indigo-600",
      icon: Zap,
      xp: 45000,
    },
  ];

  const getCurrentLevelInfo = () => {
    for (let i = levels.length - 1; i >= 0; i--) {
      if (userData.currentLevel >= levels[i].level) return levels[i];
    }
    return levels[0];
  };

  const getNextLevelInfo = () => {
    const nextIndex = levels.findIndex(
      (level) => level.level > userData.currentLevel
    );
    return nextIndex !== -1 ? levels[nextIndex] : null;
  };

  const currentLevelInfo = getCurrentLevelInfo();
  const nextLevelInfo = getNextLevelInfo();
  const CurrentLevelIcon = currentLevelInfo.icon;
  const NextLevelIcon = nextLevelInfo?.icon || Trophy;

  const xpProgress = userData.currentXP - userData.xpForCurrentLevel;
  const xpNeeded = userData.xpToNextLevel - userData.xpForCurrentLevel;
  const progressPercentage = (xpProgress / xpNeeded) * 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedXP(progressPercentage);
    }, 500);
    return () => clearTimeout(timer);
  }, [progressPercentage]);

  const stats: Stat[] = [
    {
      label: "Current Streak",
      value: userData.streak,
      suffix: " days",
      icon: Zap,
      color: "text-orange-600",
    },
    {
      label: "Achievements",
      value: userData.achievements,
      suffix: "",
      icon: Medal,
      color: "text-purple-600",
    },
    {
      label: "Total XP",
      value: userData.totalXP.toLocaleString(),
      suffix: "",
      icon: TrendingUp,
      color: "text-blue-600",
    },
    {
      label: "Global Rank",
      value: userData.rank,
      suffix: "",
      icon: Trophy,
      color: "text-yellow-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {showSkeleton ? (
        <ProfileSectionSkeleton />
      ) : (
        <>
          <section className=" pt-16 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-100 to-white duration-500 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-800 dark:text-gray-100 relative min-h-screen">
            <button
              onClick={() => router.push("/dashboard")}
              className="absolute cursor-pointer top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8 z-20 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="max-w-4xl mx-auto">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="bg-white duration-500 dark:bg-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden"
              >
                <div
                  className={`relative bg-gradient-to-r ${currentLevelInfo.color} p-4 sm:p-6 lg:p-8 text-white`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-white/10 duration-500 dark:bg-gray-900/5 rounded-full blur-2xl sm:blur-3xl -translate-y-16 sm:-translate-y-24 lg:-translate-y-32 translate-x-16 sm:translate-x-24 lg:translate-x-32" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-white/5 duration-500 dark:bg-gray-900/5 rounded-full blur-xl sm:blur-2xl translate-y-12 sm:translate-y-18 lg:translate-y-24 -translate-x-12 sm:-translate-x-18 lg:-translate-x-24" />

                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 space-y-4 sm:space-y-0">
                      <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                        <motion.div
                          className="relative"
                          variants={itemVariants}
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-3 sm:border-4 border-white/30 overflow-hidden shadow-2xl">
                            <img
                              src={userData.avatar}
                              alt={userData.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-white duration-500 dark:bg-gray-900 text-gray-900 dark:text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg border-2 border-white">
                            {userData.currentLevel}
                          </div>
                        </motion.div>

                        <motion.div
                          variants={itemVariants}
                          className="text-center sm:text-left"
                        >
                          <h1 className="text-2xl sm:text-3xl font-bold mb-1">
                            {userData.name}
                          </h1>
                          <p className="text-white/80 text-base sm:text-lg mb-2">
                            {userData.username}
                          </p>
                          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-3">
                            <div className="flex items-center space-x-2">
                              <CurrentLevelIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                              <span className="font-semibold text-sm sm:text-base">
                                {currentLevelInfo.name}
                              </span>
                            </div>
                            <span className="hidden sm:inline text-white/60">
                              •
                            </span>
                            <span className="text-white/80 text-sm sm:text-base">
                              Member since {userData.joinDate}
                            </span>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    <motion.div variants={itemVariants} className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                        <div className="text-center sm:text-left">
                          <p className="text-white/80 text-sm">
                            Level Progress
                          </p>
                          <p className="text-lg sm:text-xl font-bold">
                            {userData.currentXP.toLocaleString()} /{" "}
                            {userData.xpToNextLevel.toLocaleString()} XP
                          </p>
                        </div>
                        {nextLevelInfo && (
                          <div className="text-center sm:text-right">
                            <p className="text-white/80 text-sm">Next Level</p>
                            <div className="flex items-center justify-center sm:justify-end space-x-2">
                              <NextLevelIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                              <span className="font-semibold text-sm sm:text-base">
                                {nextLevelInfo.name}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="relative">
                        <div className="w-full bg-white/20 duration-500 dark:bg-gray-600/20 rounded-full h-3 sm:h-4 overflow-hidden backdrop-blur-sm">
                          <motion.div
                            className="h-full bg-gradient-to-r from-white to-white/80 dark:from-gray-600 dark:to-gray-900/80 rounded-full relative overflow-hidden"
                            initial={{ width: 0 }}
                            animate={{ width: `${animatedXP}%` }}
                            transition={{
                              duration: 2,
                              ease: "easeOut",
                              delay: 0.5,
                            }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/30 dark:via-white/30 to-transparent"
                              animate={{ x: ["-100%", "100%"] }}
                              transition={{
                                repeat: Infinity,
                                duration: 2,
                                ease: "linear",
                              }}
                            />
                          </motion.div>
                        </div>

                        <div className="flex justify-between mt-2 text-xs sm:text-sm text-white/70">
                          <span>{xpProgress.toLocaleString()} XP earned</span>
                          <span>
                            {(xpNeeded - xpProgress).toLocaleString()} XP to
                            next level
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  className="p-4 sm:p-6 lg:p-8"
                  variants={itemVariants}
                >
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                    {stats.map((stat, index) => {
                      const StatIcon = stat.icon;
                      return (
                        <MagneticCard>
                          <motion.div
                            key={stat.label}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-gradient-to-br hover:opacity-70 cursor-pointer from-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
                          >
                            <div
                              className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r ${currentLevelInfo.color} mb-2 sm:mb-3 lg:mb-4`}
                            >
                              <StatIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                            </div>
                            <p
                              className={`text-lg sm:text-xl lg:text-2xl font-bold ${stat.color} mb-1`}
                            >
                              {stat.value}
                              {stat.suffix}
                            </p>
                            <p className="text-gray-600 dark:text-white duration-500 text-xs sm:text-sm font-medium">
                              {stat.label}
                            </p>
                          </motion.div>
                        </MagneticCard>
                      );
                    })}
                  </div>

                  <motion.div
                    className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r duration-500 from-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl"
                    variants={itemVariants}
                  >
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white duration-500 mb-4 sm:mb-6 flex items-center justify-center sm:justify-start">
                      <Crown className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-purple-600" />
                      Level Roadmap
                    </h3>

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0 sm:space-x-2 lg:space-x-4 overflow-x-auto pb-4">
                      {levels.map((level, index) => {
                        const LevelIcon = level.icon;
                        const isCompleted =
                          userData.currentLevel >= level.level;
                        const isCurrent =
                          userData.currentLevel >= level.level &&
                          (index === levels.length - 1 ||
                            userData.currentLevel < levels[index + 1]?.level);

                        return (
                          //   <MagneticCard>
                          <motion.div
                            key={level.level}
                            className="flex sm:flex-col items-center sm:min-w-0 sm:flex-1 cursor-pointer hover:opacity-70 space-x-4 sm:space-x-0"
                          >
                            <div className="relative">
                              <div
                                className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-0 sm:mb-2 transition-all duration-500 ${
                                  isCompleted
                                    ? `bg-gradient-to-r ${level.color} shadow-lg`
                                    : "bg-gray-200 dark:bg-gray-600"
                                }`}
                              >
                                <LevelIcon
                                  className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${
                                    isCompleted
                                      ? "text-white"
                                      : "text-gray-400 dark:text-gray-500"
                                  }`}
                                />
                              </div>
                              {isCurrent && (
                                <motion.div
                                  className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border-2 sm:border-3 lg:border-4 border-blue-400"
                                  animate={{ scale: [1, 1.1, 1] }}
                                  transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                  }}
                                />
                              )}
                            </div>
                            <div className="flex-1 sm:text-center">
                              <p
                                className={`text-sm sm:text-base font-semibold dark:text-white duration-500 ${
                                  isCompleted
                                    ? "text-gray-900"
                                    : "text-gray-400"
                                }`}
                              >
                                {level.name}
                              </p>
                              <p
                                className={`text-xs sm:text-sm dark:text-white duration-500 ${
                                  isCompleted
                                    ? "text-gray-600"
                                    : "text-gray-400"
                                }`}
                              >
                                Level {level.level}
                              </p>
                            </div>
                          </motion.div>
                          //   </MagneticCard>
                        );
                      })}
                    </div>
                  </motion.div>

                  <motion.div
                    className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
                    variants={itemVariants}
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex-1 bg-gradient-to-r cursor-pointer ${currentLevelInfo.color} text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 flex items-center justify-center space-x-2`}
                    >
                      <Gift className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base">
                        Claim Rewards
                      </span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl hover:border-gray-400 hover:bg-gray-50 hover:dark:bg-gray-800 cursor-pointer transition-all flex items-center justify-center space-x-2"
                    >
                      <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base">
                        View Achievements
                      </span>
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default UserProfileSummary;
