import { BACKGROUND, COLORS } from "@/utils/variables";
import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 1rem 0;
    gap: 2rem;
`;

export const TextContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5rem;
`;

export const Title = styled.span`

    font-size: 7rem;
    font-weight: 600;
    color: ${COLORS.TEXT};
`;

export const Description = styled(motion.p)`
    font-size: 3.6rem;
    font-weight: 300;
    color: ${COLORS.TEXT_SECONDARY};
    line-height: 4.5rem;
    margin-bottom: auto;

`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.WHITE};
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    flex: 1;
`;

export const Img = styled(Image)`
   
`;