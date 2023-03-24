import { BACKGROUND, COLORS } from "@/utils/variables";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: 100%;
    width: 80%;
`;

export const Title = styled.h1`
    font-size: 7rem;
    font-weight: 600;
    color: ${COLORS.TEXT};
`;

export const Description = styled.p`
    font-size: 4.5rem;
    font-weight: 300;
    color: ${COLORS.TEXT_SECONDARY}

`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.WHITE};
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    align-self: center;
`;

export const Img = styled(Image)`
   
`;