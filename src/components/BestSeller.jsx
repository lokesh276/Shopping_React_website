import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 20,
      staggerChildren: 0.2, // Stagger the appearance of product items
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

function BestSeller() {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products?.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <motion.div
      className="py-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Title and subtitle */}
      <motion.div className="text-center text-3xl py-8 uppercase">
        <Title text1={"best"} text2={"seller"} />
        <motion.p
          className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          quo?
        </motion.p>
      </motion.div>

      {/* Rendering products */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6"
        variants={containerVariants}
      >
        {bestSeller.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default BestSeller;
