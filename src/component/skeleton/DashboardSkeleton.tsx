const Skeleton = ({ className = "", ...props }) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 dark:bg-zinc-700 rounded ${className}`}
      {...props}
    />
  );
};

const HeaderSkeleton = () => {
  return (
    <header className="bg-white dark:bg-zinc-800 shadow-sm border-b dark:border-zinc-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Skeleton className="h-8 w-32" />
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <Skeleton className="w-8 h-8 rounded-full" />
              <Skeleton className="h-4 w-20" />
            </div>
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
      </div>
    </header>
  );
};

const TitleSkeleton = () => {
  return (
    <div className="text-center space-y-4">
      <Skeleton className="h-10 w-80 mx-auto" />
      <Skeleton className="h-6 w-96 mx-auto" />
    </div>
  );
};

const StatsCardsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-700"
        >
          <div className="flex items-center justify-between">
            <Skeleton className="w-6 h-6" />
            <Skeleton className="h-4 w-12" />
          </div>
          <div className="mt-4 space-y-2">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      ))}
    </div>
  );
};

const BenefitsCardsSkeleton = () => {
  return (
    <div className="space-y-6">
      <Skeleton className="h-8 w-72 mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-zinc-700"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-gray-50 dark:bg-zinc-700 rounded-xl">
                <Skeleton className="w-8 h-8" />
              </div>
              <div className="flex-1 space-y-3">
                <Skeleton className="h-6 w-48" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
                <Skeleton className="h-12 w-32 rounded-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ChartSkeleton = ({ height = "300px" }) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center space-x-2">
              <Skeleton className="w-4 h-3" />
              <Skeleton className="h-3 w-16" />
            </div>
          ))}
        </div>
      </div>
      <div className="relative" style={{ height }}>
        <Skeleton className="w-full h-full" />
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-3 w-8" />
          ))}
        </div>
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-4">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-3 w-8" />
          ))}
        </div>
      </div>
    </div>
  );
};

const LineChartSkeleton = () => {
  return (
    <div className="bg-white duration-500 dark:bg-zinc-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-zinc-700">
      <Skeleton className="h-6 w-48 mb-6" />
      <ChartSkeleton height="300px" />
    </div>
  );
};

const PieChartSkeleton = () => {
  return (
    <div className="bg-white duration-500 dark:bg-zinc-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-zinc-700">
      <Skeleton className="h-6 w-48 mb-6" />
      <div
        className="flex items-center justify-center"
        style={{ height: "300px" }}
      >
        <Skeleton className="w-48 h-48 rounded-full" />
      </div>
    </div>
  );
};

const BarChartSkeleton = () => {
  return (
    <div className="bg-white duration-500 dark:bg-zinc-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-zinc-700">
      <Skeleton className="h-6 w-48 mb-6" />
      <ChartSkeleton height="400px" />
    </div>
  );
};

export const DashboardSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white">
      <HeaderSkeleton />

      <div className="py-20">
        <div className="max-w-7xl mx-auto space-y-8 px-4 sm:px-6 lg:px-8">
          <TitleSkeleton />

          <StatsCardsSkeleton />

          <BenefitsCardsSkeleton />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <LineChartSkeleton />
            <PieChartSkeleton />
          </div>

          <BarChartSkeleton />
        </div>
      </div>
    </div>
  );
};
