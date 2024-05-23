import { AnimatePresence } from 'framer-motion';
import React, { useLayoutEffect } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';

const AnimatedOutlet: React.FC = () => {
  const location = useLocation();
  const element = useOutlet();

  useLayoutEffect(() => {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      750,
    );
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait" initial={true}>
      {element && React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
};

export default AnimatedOutlet;
