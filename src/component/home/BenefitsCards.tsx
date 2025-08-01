"use client";
import { motion } from "framer-motion";
import {
  Gift,
  Percent,
  ShoppingBag,
  Star,
  Clock,
  CreditCard,
} from "lucide-react";
import MagneticCard from "../common/Animation";
import { useRouter } from "next/navigation";

interface Benefit {
  id: string;
  title: string;
  description: string;
  value: string;
  type: "discount" | "offer" | "voucher" | "cashback";
  icon: React.ReactNode;
  validUntil?: string;
  color: string;
  bgGradient: string;
}

const benefitsData: Benefit[] = [
  {
    id: "1",
    title: "Summer Sale",
    description: "Get amazing discounts on all electronics and gadgets",
    value: "50% OFF",
    type: "discount",
    icon: <Percent className="w-6 h-6" />,
    validUntil: "2025-08-31",
    color: "text-orange-600",
    bgGradient:
      "from-orange-50 to-red-50  dark:from-orange-300 dark:to-red-300",
  },
  {
    id: "2",
    title: "Welcome Bonus",
    description: "Exclusive offer for new customers on first purchase",
    value: "$25 FREE",
    type: "voucher",
    icon: <Gift className="w-6 h-6" />,
    validUntil: "2025-09-15",
    color: "text-purple-600",
    bgGradient:
      "from-purple-50 to-pink-50 dark:from-purple-300 dark:to-pink-300",
  },
  {
    id: "3",
    title: "Flash Deal",
    description: "Limited time offer on selected premium items",
    value: "Buy 2 Get 1",
    type: "offer",
    icon: <ShoppingBag className="w-6 h-6" />,
    validUntil: "2025-08-05",
    color: "text-blue-600",
    bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-300 dark:to-cyan-300",
  },
  {
    id: "4",
    title: "Premium Cashback",
    description: "Earn cashback on every purchase above $100",
    value: "15% BACK",
    type: "cashback",
    icon: <CreditCard className="w-6 h-6" />,
    color: "text-green-600",
    bgGradient:
      "from-green-50 to-emerald-50 dark:from-green-300 dark:to-emerald-300",
  },
  {
    id: "5",
    title: "VIP Access",
    description: "Early access to sales and exclusive products",
    value: "EXCLUSIVE",
    type: "offer",
    icon: <Star className="w-6 h-6" />,
    validUntil: "2025-12-31",
    color: "text-yellow-600",
    bgGradient:
      "from-yellow-50 to-amber-50 dark:from-yellow-300 dark:to-amber-300",
  },
  {
    id: "6",
    title: "Weekend Special",
    description: "Special weekend pricing on home & garden items",
    value: "30% OFF",
    type: "discount",
    icon: <Clock className="w-6 h-6" />,
    validUntil: "2025-08-03",
    color: "text-indigo-600",
    bgGradient:
      "from-indigo-50 to-blue-50 dark:from-indigo-300 dark:to-blue-300",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const hoverVariants = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
};

const BenefitsCards = () => {
  const router = useRouter();

  const getTypeLabel = (type: string) => {
    const labels = {
      discount: "Discount",
      offer: "Special Offer",
      voucher: "Voucher",
      cashback: "Cashback",
    };
    return labels[type as keyof typeof labels] || "Benefit";
  };

  const getTypeBadgeColor = (type: string) => {
    const colors = {
      discount:
        "bg-orange-100 text-orange-800 dark:bg-orange-200 dark:text-orange",
      offer: "bg-blue-100 text-blue-800 dark:bg-blue-5=200 dark:text-blue",
      voucher:
        "bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple",
      cashback: "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green",
    };
    return (
      colors[type as keyof typeof colors] ||
      "bg-gray-100 text-gray-800 dark:bg-gray-500 dark:text-gray-300 "
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#161517] py-12 px-4 duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-200 mb-4">
            Exclusive Benefits & Offers
          </h1>
          <p className="text-xl text-gray-600 dark:text-white max-w-2xl mx-auto">
            Discover amazing deals, discounts, and exclusive vouchers tailored
            just for you
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefitsData.map((benefit) => (
            <MagneticCard key={benefit.id}>
              <motion.div
                key={benefit.id}
                variants={cardVariants}
                whileHover="hover"
                className="group cursor-pointer"
              >
                <motion.div
                  variants={hoverVariants}
                  className={`relative bg-gradient-to-br ${benefit.bgGradient} rounded-2xl p-6 shadow-lg border border-white/50 backdrop-blur-sm overflow-hidden h-full`}
                >
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-current"></div>
                    <div className="absolute -left-2 -bottom-2 w-16 h-16 rounded-full bg-current"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`p-3 rounded-xl bg-white/80 ${benefit.color}`}
                      >
                        {benefit.icon}
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeBadgeColor(
                          benefit.type
                        )}`}
                      >
                        {getTypeLabel(benefit.type)}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {benefit.description}
                    </p>

                    <div className="mb-4">
                      <span className={`text-xl font-bold ${benefit.color}`}>
                        {benefit.value}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
                      {benefit.validUntil ? (
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          Valid until{" "}
                          {new Date(benefit.validUntil).toLocaleDateString()}
                        </div>
                      ) : (
                        <div className="text-gray-500 text-sm">No expiry</div>
                      )}

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 cursor-pointer rounded-lg ${benefit.color} bg-white/80 hover:bg-white transition-colors text-sm font-medium`}
                        onClick={() => router.push("/dashboard")}
                      >
                        Claim Now
                      </motion.button>
                    </div>
                  </div>

                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-white rounded-2xl"
                  />
                </motion.div>
              </motion.div>
            </MagneticCard>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 m-auto   bg-transparent border  cursor-pointer text-white font-semibold  hover:bg-[#0d0d0d] transition duration-500"
            onClick={() => router.push("/dashboard")}
          >
            View All Benefits
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default BenefitsCards;
