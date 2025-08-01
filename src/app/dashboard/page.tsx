"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  TrendingUp,
  Users,
  DollarSign,
  Target,
  ArrowRight,
  Star,
  Shield,
  Zap,
} from "lucide-react";
import { DashboardSkeleton } from "@/component/skeleton/DashboardSkeleton";
import MagneticCard from "@/component/common/Animation";

const revenueData = [
  { month: "Jan", revenue: 4000, users: 240 },
  { month: "Feb", revenue: 3000, users: 198 },
  { month: "Mar", revenue: 5000, users: 320 },
  { month: "Apr", revenue: 4500, users: 280 },
  { month: "May", revenue: 6000, users: 390 },
  { month: "Jun", revenue: 5500, users: 350 },
];

const categoryData = [
  { name: "Marketing", value: 400, color: "#8884d8" },
  { name: "Sales", value: 300, color: "#82ca9d" },
  { name: "Support", value: 200, color: "#ffc658" },
  { name: "Development", value: 278, color: "#ff7300" },
];

const Dashboard = () => {
  const { user, isAuthenticated, logout, loading } = useAuth();
  const router = useRouter();
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, loading, router]);

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  const handleProfileClick = () => {
    router.push("/profile");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return <></>;
  }

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Boost Your Revenue",
      description:
        "Increase your monthly revenue by up to 40% with our advanced analytics and optimization tools.",
      cta: "Start Growing",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Expand Your Reach",
      description:
        "Connect with thousands of new customers through our powerful marketing automation platform.",
      cta: "Get More Users",
      gradient: "from-green-500 to-teal-600",
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Enterprise Security",
      description:
        "Protect your business with bank-level security and compliance features built for enterprises.",
      cta: "Learn More",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Lightning Fast",
      description:
        "Experience blazing fast performance with our optimized infrastructure and global CDN.",
      cta: "Try It Now",
      gradient: "from-yellow-500 to-orange-600",
    },
  ];

  const stats = [
    {
      label: "Total Revenue",
      value: "$28,500",
      change: "+12.5%",
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      label: "Active Users",
      value: "1,890",
      change: "+8.2%",
      icon: <Users className="w-6 h-6" />,
    },
    {
      label: "Conversion Rate",
      value: "3.4%",
      change: "+2.1%",
      icon: <Target className="w-6 h-6" />,
    },
    {
      label: "Customer Rating",
      value: "4.8",
      change: "+0.3",
      icon: <Star className="w-6 h-6" />,
    },
  ];

  return (
    <>
      {showSkeleton ? (
        <DashboardSkeleton />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white"
        >
          <header className="bg-white  dark:bg-zinc-800 shadow-sm border-b dark:border-zinc-700">
            <div className="max-w-7xl mx-auto px-4 pt-12 lg:pt-0 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <h1
                  className="text-2xl font-bold cursor-pointer"
                  onClick={() => router.push("/")}
                >
                  CRED
                </h1>

                <div className="flex items-center space-x-4">
                  <div
                    className="flex items-center cursor-pointer space-x-3"
                    onClick={handleProfileClick}
                  >
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm font-medium">{user.name}</span>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="flex items-center cursor-pointer space-x-2 text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          </header>

          <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold  text-gray-900 dark:text-white">
                  Business Dashboard
                </h1>
                <p className="text-gray-900 dark:text-white text-lg max-w-2xl mx-auto">
                  Monitor your business performance and discover new
                  opportunities to grow
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <MagneticCard>
                    <div
                      key={index}
                      className="bg-white cursor-pointer dark:bg-zinc-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-0"
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-gray-500 dark:text-white">
                          {stat.icon}
                        </div>
                        <span className="text-green-500  text-sm font-medium">
                          {stat.change}
                        </span>
                      </div>
                      <div className="mt-4">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {stat.value}
                        </div>
                        <div className="text-gray-600 dark:text-white text-sm">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </MagneticCard>
                ))}
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                  Unlock Your Business Potential
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <MagneticCard>
                      <div
                        key={index}
                        className="group relative cursor-pointer bg-white dark:bg-zinc-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-0"
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                        ></div>
                        <div className="relative p-8">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 p-3 bg-gray-50 dark:bg-zinc-800 rounded-xl group-hover:bg-white transition-colors duration-300">
                              {benefit.icon}
                            </div>
                            <div className="flex-1 space-y-3">
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                                {benefit.title}
                              </h3>
                              <p className="text-gray-600 dark:text-white leading-relaxed">
                                {benefit.description}
                              </p>
                              <button
                                className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${benefit.gradient} text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 group-hover:shadow-xl`}
                              >
                                <span>{benefit.cta}</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </MagneticCard>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <MagneticCard>
                  <div className="bg-white duration-500 dark:bg-zinc-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-zinc-700">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                      Revenue & User Growth
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="month" stroke="#666" />
                        <YAxis stroke="#666" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "white",
                            border: "1px solid #e5e7eb",
                            borderRadius: "8px",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                          }}
                        />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="revenue"
                          stroke="#8884d8"
                          strokeWidth={3}
                          dot={{ fill: "#8884d8", strokeWidth: 2, r: 6 }}
                          activeDot={{
                            r: 8,
                            stroke: "#8884d8",
                            strokeWidth: 2,
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="users"
                          stroke="#82ca9d"
                          strokeWidth={3}
                          dot={{ fill: "#82ca9d", strokeWidth: 2, r: 6 }}
                          activeDot={{
                            r: 8,
                            stroke: "#82ca9d",
                            strokeWidth: 2,
                          }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </MagneticCard>
                <MagneticCard>
                  <div className="bg-white duration-500 dark:bg-zinc-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-zinc-700">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                      Department Performance
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={categoryData}
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) =>
                            `${name} ${((percent ?? 0) * 100).toFixed(0)}%`
                          }
                        >
                          {categoryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "white",
                            border: "1px solid #e5e7eb",
                            borderRadius: "8px",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </MagneticCard>
              </div>

              <MagneticCard>
                <div className="bg-white duration-500 dark:bg-zinc-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-zinc-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Monthly Comparison
                  </h3>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                      data={revenueData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" stroke="#666" />
                      <YAxis stroke="#666" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #e5e7eb",
                          borderRadius: "8px",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                        }}
                      />
                      <Legend />
                      <Bar
                        dataKey="revenue"
                        fill="#8884d8"
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar
                        dataKey="users"
                        fill="#82ca9d"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </MagneticCard>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Dashboard;
