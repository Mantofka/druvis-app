import styled from "styled-components/macro";
import { motion } from "framer-motion";

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(75, 75, 75, 0.8);
  z-index: 100;
  overflow: hidden;
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  height: auto;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  z-index: 101;
`;

export const ImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const LeftArrow = styled(motion.div)`
  position: absolute;
  color: white;
  top: 50%;
  left: 2%;
  z-index: 102;
`;

export const RightArrow = styled(motion.div)`
  position: absolute;
  color: white;
  top: 50%;
  right: 2%;
  z-index: 102;
`;

export const DisabledArrow = styled.div`
  color: grey;
`;

export const CancelButton = styled(motion.div)`
  position: absolute;
  top: 1%;
  right: 1%;
  color: rgb(25, 25, 25);
`;
