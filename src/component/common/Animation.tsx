import { useState, ReactNode, MouseEvent } from "react";
import { motion } from "framer-motion";

interface MagneticCardProps {
  children: ReactNode;
}

const MagneticCard: React.FC<MagneticCardProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x: x * 0.1, y: y * 0.1 });
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg cursor-pointer"
      animate={{
        x: isHovering ? mousePosition.x : 0,
        y: isHovering ? mousePosition.y : 0,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticCard;
