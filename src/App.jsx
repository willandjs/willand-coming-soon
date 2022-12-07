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
      <div className={css.planet}>
        <Spline scene="https://prod.spline.design/ZFYn0Wdjmt628dEU/scene.splinecode" />
      </div>
      <div className={css.content}>
        <h1 className={css.heading}>
          There is nothing out here yet!
        </h1>
        <h2 className={css.text}>
          But in time there will be. Stay tuned!
        </h2>
      </div>
    </motion.div>
  );
};

export default App;
