import { DiJavascript1, DiReact, DiCss3, DiJira, DiGit, DiHtml5 } from 'react-icons/di';

import { SiRedux, SiTailwindcss, SiFirebase } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { motion } from 'framer-motion';

const Skills = () => {
  const liVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: 'tween',
        duration: 0.5,
      },
    },
  };

  return (
    <ul>
      <motion.li variants={liVariants} whileHover="hover">
        <DiHtml5 />
      </motion.li>
      <motion.li variants={liVariants} whileHover="hover">
        <DiCss3 />
      </motion.li>
      <motion.li variants={liVariants} whileHover="hover">
        <DiJavascript1 />
      </motion.li>
      <motion.li variants={liVariants} whileHover="hover">
        <DiReact />
      </motion.li>

      <motion.li variants={liVariants} whileHover="hover">
        <SiFirebase />
      </motion.li>
      <motion.li variants={liVariants} whileHover="hover">
        <SiRedux />
      </motion.li>
      <motion.li variants={liVariants} whileHover="hover">
        <DiGit />
      </motion.li>
      <motion.li variants={liVariants} whileHover="hover">
        <TbBrandReactNative />
      </motion.li>
      <motion.li variants={liVariants} whileHover="hover">
        <SiTailwindcss />
      </motion.li>
      <motion.li variants={liVariants} whileHover="hover">
        <DiJira />
      </motion.li>
    </ul>
  );
};

export default Skills;
