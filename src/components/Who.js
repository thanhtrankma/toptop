import { motion } from 'framer-motion';
import { AiOutlineCheck } from 'react-icons/ai';
import relaxSvg from '../Media/relax.svg';

const WhoAmI = () => {
  const hoobys = ['Playing Sports', 'Reading', 'Traveling', 'Master of Ceremonies'];

  return (
    <div className="About_Content_Psf">
      <motion.div
        className="whoAmI"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 40, delay: 0.2 }}
      >
        <h1>
          Know Who <span>I'M</span>{' '}
        </h1>

        <p>
          Hi Everyone, I am <span>Thanh Tran Dung</span> from <span>Hai Phong, Viet Nam.</span>
          <br />I graduated from information security at{' '}
          <span>ACADEMY OF CRYPTOGRAPHY TECHNIQUES/HỌC VIỆN KỸ THUẬT MẬT MÃ.</span>
        </p>
        <br />
        <p>Apart from coding, some other activities that I love to do!</p>
        <br />

        <ul>
          {hoobys.map((hobby, index) => {
            return (
              <li key={index}>
                <AiOutlineCheck />
                {hobby}
              </li>
            );
          })}
        </ul>
      </motion.div>

      <motion.div
        className="illustrateIcon_rlx"
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 40, delay: 0.2 }}
      >
        <img src={relaxSvg} alt="pic" />
      </motion.div>
    </div>
  );
};

export default WhoAmI;
