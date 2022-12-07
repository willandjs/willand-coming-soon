import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import css from './ComingSoon.module.css';

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      className={css.container}
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 15,
          delay: 0.5,
        }}
        className={css.planet}
      >
        <Spline scene="https://prod.spline.design/ZFYn0Wdjmt628dEU/scene.splinecode" />
      </motion.div>
      <motion.div
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 15,
          delay: 1.5,
        }}
        className={css.content}
      >
        <h1 className={css.heading}>
          There is nothing out here yet!
        </h1>
        <h2 className={css.text}>
          But in time there will be. Stay tuned!
        </h2>
      </motion.div>
    </motion.div>
  );
};

export default App;
