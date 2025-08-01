import React from "react";
import { motion, Variants } from "framer-motion";

const ProfileSectionSkeleton = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const shimmerVariants: Variants = {
    initial: { x: "-100%" },
    animate: {
      x: "100%",
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "linear",
      },
    },
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white via-gray-100 to-white duration-500 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-800 dark:text-gray-100">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white duration-500 dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="relative bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 p-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 duration-500 dark:bg-gray-900/5 rounded-full blur-3xl -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 duration-500 dark:bg-gray-900/5 rounded-full blur-2xl translate-y-24 -translate-x-24" />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-6">
                  <motion.div className="relative" variants={itemVariants}>
                    <div className="w-24 h-24 rounded-full border-4 border-white/30 overflow-hidden shadow-2xl bg-gray-200 dark:bg-gray-600 relative">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 dark:via-gray-400/50 to-transparent"
                        variants={shimmerVariants}
                        initial="initial"
                        animate="animate"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-gray-200 dark:bg-gray-600 rounded-full w-10 h-10 flex items-center justify-center shadow-lg border-2 border-white relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 dark:via-gray-400/50 to-transparent"
                        variants={shimmerVariants}
                        initial="initial"
                        animate="animate"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-3">
                    <div className="h-8 w-48 bg-white/30 dark:bg-gray-600/50 rounded-lg relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 dark:via-gray-400/50 to-transparent"
                        variants={shimmerVariants}
                        initial="initial"
                        animate="animate"
                      />
                    </div>
                    <div className="h-6 w-32 bg-white/20 dark:bg-gray-600/30 rounded-lg relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 dark:via-gray-400/50 to-transparent"
                        variants={shimmerVariants}
                        initial="initial"
                        animate="animate"
                      />
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-white/20 dark:bg-gray-600/30 rounded relative overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 dark:via-gray-400/50 to-transparent"
                          variants={shimmerVariants}
                          initial="initial"
                          animate="animate"
                        />
                      </div>
                      <div className="h-5 w-24 bg-white/20 dark:bg-gray-600/30 rounded relative overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 dark:via-gray-400/50 to-transparent"
                          variants={shimmerVariants}
                          initial="initial"
                          animate="animate"
                        />
                      </div>
                      <div className="w-1 h-1 bg-white/20 dark:bg-gray-600/30 rounded-full"></div>
                      <div className="h-5 w-32 bg-white/20 dark:bg-gray-600/30 rounded relative overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 dark:via-gray-400/50 to-transparent"
                          variants={shimmerVariants}
                          initial="initial"
                          animate="animate"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.div className="flex space-x-3" variants={itemVariants}>
                  {[1, 2].map((i: number) => (
                    <div
                      key={i}
                      className="w-12 h-12 bg-white/20 dark:bg-gray-600/20 rounded-xl relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 dark:via-gray-400/50 to-transparent"
                        variants={shimmerVariants}
                        initial="initial"
                        animate="animate"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="space-y-2">
                    <div className="h-4 w-24 bg-white/20 dark:bg-gray-600/30 rounded relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 dark:via-gray-400/50 to-transparent"
                        variants={shimmerVariants}
                        initial="initial"
                        animate="animate"
                      />
                    </div>
                    <div className="h-6 w-40 bg-white/30 dark:bg-gray-600/50 rounded relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 dark:via-gray-400/50 to-transparent"
                        variants={shimmerVariants}
                        initial="initial"
                        animate="animate"
                      />
                    </div>
                  </div>
                  <div className="text-right space-y-2">
                    <div className="h-4 w-20 bg-white/20 dark:bg-gray-600/30 rounded relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 dark:via-gray-400/50 to-transparent"
                        variants={shimmerVariants}
                        initial="initial"
                        animate="animate"
                      />
                    </div>
                    <div className="flex items-center justify-end space-x-2">
                      <div className="w-5 h-5 bg-white/20 dark:bg-gray-600/30 rounded relative overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 dark:via-gray-400/50 to-transparent"
                          variants={shimmerVariants}
                          initial="initial"
                          animate="animate"
                        />
                      </div>
                      <div className="h-5 w-16 bg-white/20 dark:bg-gray-600/30 rounded relative overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 dark:via-gray-400/50 to-transparent"
                          variants={shimmerVariants}
                          initial="initial"
                          animate="animate"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="w-full bg-white/20 dark:bg-gray-600/20 rounded-full h-4 overflow-hidden backdrop-blur-sm relative">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-gray-400/30 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "linear",
                      }}
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="h-4 w-20 bg-white/20 dark:bg-gray-600/30 rounded relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 dark:via-gray-400/50 to-transparent"
                        variants={shimmerVariants}
                        initial="initial"
                        animate="animate"
                      />
                    </div>
                    <div className="h-4 w-28 bg-white/20 dark:bg-gray-600/30 rounded relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 dark:via-gray-400/50 to-transparent"
                        variants={shimmerVariants}
                        initial="initial"
                        animate="animate"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div className="p-8" variants={itemVariants}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i: number) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto mb-4 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-500 to-transparent"
                      variants={shimmerVariants}
                      initial="initial"
                      animate="animate"
                    />
                  </div>
                  <div className="h-8 w-16 bg-gray-200 dark:bg-gray-600 rounded mx-auto mb-2 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-500 to-transparent"
                      variants={shimmerVariants}
                      initial="initial"
                      animate="animate"
                    />
                  </div>
                  <div className="h-4 w-20 bg-gray-200 dark:bg-gray-600 rounded mx-auto relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-500 to-transparent"
                      variants={shimmerVariants}
                      initial="initial"
                      animate="animate"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl"
              variants={itemVariants}
            >
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 bg-gray-200 dark:bg-gray-600 rounded mr-2 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-500 to-transparent"
                    variants={shimmerVariants}
                    initial="initial"
                    animate="animate"
                  />
                </div>
                <div className="h-6 w-32 bg-gray-200 dark:bg-gray-600 rounded relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-500 to-transparent"
                    variants={shimmerVariants}
                    initial="initial"
                    animate="animate"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center space-x-4 overflow-x-auto pb-4">
                {[1, 2, 3, 4, 5].map((i: number) => (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center min-w-0 flex-1"
                  >
                    <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-600 mb-2 relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-500 to-transparent"
                        variants={shimmerVariants}
                        initial="initial"
                        animate="animate"
                      />
                    </div>
                    <div className="h-4 w-16 bg-gray-200 dark:bg-gray-600 rounded mb-1 relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-500 to-transparent"
                        variants={shimmerVariants}
                        initial="initial"
                        animate="animate"
                      />
                    </div>
                    <div className="h-3 w-12 bg-gray-200 dark:bg-gray-600 rounded relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-500 to-transparent"
                        variants={shimmerVariants}
                        initial="initial"
                        animate="animate"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <div className="flex-1 h-14 bg-gray-200 dark:bg-gray-600 rounded-xl relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-500 to-transparent"
                  variants={shimmerVariants}
                  initial="initial"
                  animate="animate"
                />
              </div>
              <div className="flex-1 h-14 bg-gray-200 dark:bg-gray-600 rounded-xl relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-500 to-transparent"
                  variants={shimmerVariants}
                  initial="initial"
                  animate="animate"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileSectionSkeleton;
