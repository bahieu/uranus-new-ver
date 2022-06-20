import { motion } from 'framer-motion';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();

export const Rotate = styled(motion.div)`
  rotate: 360;

  duration: 2;
`;
