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

function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(5, 15));
  }, [products]);

  return (
    <motion.div
      className="my-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Title and subtitle */}
      <motion.div className="text-center uppercase py-8 text-3xl">
        <Title text1="latest" text2="collection" />
        <motion.p
          className="text-gray-600 w-3/4 m-auto text-xs sm:text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Heyyy broo---- here!!!! supss brooo!!! zenzii kidssssss broodaaaa
        </motion.p>
      </motion.div>

      {/* Rendering products */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {latestProducts.map((item, index) => (
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

export default LatestCollection;
