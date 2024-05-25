import { motion, Transition, Variants } from 'framer-motion';

import React from 'react';
import { Outlet } from 'react-router-dom';

const AnimatedLayout: React.FC = () => {
  const pageVariants: Variants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const pageTransition: Transition = {
    type: 'easeInOut',
    duration: 0.75,
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="relative"
    >
      <Outlet />
    </motion.div>
  );
};

export default AnimatedLayout;
