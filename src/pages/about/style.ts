import { COLORS } from "@/utils/variables";
import Image from "next/image";
import styled from "styled-components";

export const AboutContainer = styled.div`
    padding: 2rem;
    display: flex;
    align-items: center;
    width: 100%;
    gap: 2rem;
    `;

export const AboutCard = styled.div`
    background-color: ${COLORS.WHITE};
    display: flex;
    flex-direction: column;
    width: 30%;
    border-radius: 2rem;
    padding: 2rem;
    height: 100%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const CardTitle = styled.h1`
    font-size: 4rem;
    font-weight: 600;
    color: ${COLORS.TEXT};
    margin-bottom: 1rem;
`;

export const CardText = styled.p`
    font-size: 2rem;
    font-weight: 400;
    color: ${COLORS.TEXT};
    margin-bottom: 1rem;
    line-height: 2rem;
`;

export const ImageContainer = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    overflow: hidden;
    background-color: ${COLORS.WHITE};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Img = styled(Image)`
    border-radius: .5rem;
`;


