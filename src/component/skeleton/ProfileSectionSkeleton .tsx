import React from "react";

const Skeleton = ({ className = "", ...props }) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 dark:bg-gray-600 rounded relative overflow-hidden ${className}`}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 dark:via-gray-400/50 to-transparent animate-shimmer" />
    </div>
  );
};

const ProfileSectionSkeleton = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white via-gray-100 to-white duration-500 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-800 dark:text-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white duration-500 dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 p-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 duration-500 dark:bg-gray-900/5 rounded-full blur-3xl -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 duration-500 dark:bg-gray-900/5 rounded-full blur-2xl translate-y-24 -translate-x-24" />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full border-4 border-white/30 overflow-hidden shadow-2xl bg-gray-200 dark:bg-gray-600">
                      <Skeleton className="w-full h-full rounded-full" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full border-2 border-white">
                      <Skeleton className="w-full h-full rounded-full" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Skeleton className="h-8 w-48 bg-white/30 dark:bg-gray-600/50" />
                    <Skeleton className="h-6 w-32 bg-white/20 dark:bg-gray-600/30" />
                    <div className="flex items-center space-x-3">
                      <Skeleton className="w-5 h-5 bg-white/20 dark:bg-gray-600/30" />
                      <Skeleton className="h-5 w-24 bg-white/20 dark:bg-gray-600/30" />
                      <div className="w-1 h-1 bg-white/20 dark:bg-gray-600/30 rounded-full"></div>
                      <Skeleton className="h-5 w-32 bg-white/20 dark:bg-gray-600/30" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-24 bg-white/20 dark:bg-gray-600/30" />
                    <Skeleton className="h-6 w-40 bg-white/30 dark:bg-gray-600/50" />
                  </div>
                  <div className="text-right space-y-2">
                    <Skeleton className="h-4 w-20 bg-white/20 dark:bg-gray-600/30" />
                    <div className="flex items-center justify-end space-x-2">
                      <Skeleton className="w-5 h-5 bg-white/20 dark:bg-gray-600/30" />
                      <Skeleton className="h-5 w-16 bg-white/20 dark:bg-gray-600/30" />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Skeleton className="w-full h-4 bg-white/20 dark:bg-gray-600/20 rounded-full" />
                  <div className="flex justify-between mt-2">
                    <Skeleton className="h-4 w-20 bg-white/20 dark:bg-gray-600/30" />
                    <Skeleton className="h-4 w-28 bg-white/20 dark:bg-gray-600/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <Skeleton className="w-12 h-12 rounded-full mx-auto mb-4" />
                  <Skeleton className="h-8 w-16 mx-auto mb-2" />
                  <Skeleton className="h-4 w-20 mx-auto" />
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl">
              <div className="flex items-center mb-6">
                <Skeleton className="w-6 h-6 mr-2" />
                <Skeleton className="h-6 w-32" />
              </div>

              <div className="flex justify-between items-center space-x-4 overflow-x-auto pb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center min-w-0 flex-1"
                  >
                    <Skeleton className="w-16 h-16 rounded-full mb-2" />
                    <Skeleton className="h-4 w-16 mb-1" />
                    <Skeleton className="h-3 w-12" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Skeleton className="flex-1 h-14 rounded-xl" />
              <Skeleton className="flex-1 h-14 rounded-xl" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default ProfileSectionSkeleton;
