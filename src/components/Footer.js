import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div>Designed and Developed by Thanh Tran Dung</div>
      <div>Copyright © 2025 DoubleDZ</div>
      <div>
        <li>
          <a href="https://github.com/thanhtrankma" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/double.d.z/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/nanth.nart" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="#!" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </li>
      </div>
    </footer>
  );
};

export default Footer;
