import { FaGithub, FaFacebook, FaInstagram, FaL, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SocialMedia = () => {
  const style = { color: '#D76D0B' };

  return (
    <motion.div
      className="part3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <div className="socialMedia_wq">
        <h1>FIND ME ON </h1>
        <p>
          Feel free to <span>connect</span> with me
        </p>

        <ul>
          <li>
            <a href="https://github.com/thanhtrankma/" target="_blank" rel="noreferrer">
              <FaGithub style={style} />
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/double.d.z/" target="_blank" rel="noreferrer">
              <FaInstagram style={style} />
            </a>
          </li>

          <li>
            <a href="https://www.facebook.com/nanth.nart" target="_blank" rel="noreferrer">
              <FaFacebook style={style} />
            </a>
          </li>
          <li>
            <a href="#!" target="_blank" rel="noreferrer">
              <FaLinkedin style={style} />
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default SocialMedia;
