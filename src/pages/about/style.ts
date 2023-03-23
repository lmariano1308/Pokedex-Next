import { COLORS } from "@/utils/variables";
import Image from "next/image";
import styled from "styled-components";
import { GithubLogo} from 'phosphor-react';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const AboutContainer = styled.div`
    padding: 2rem;
    display: flex;
    width: 100%;
    gap: 2rem;
    `;

export const AboutCard = styled.div`
    background-color: ${COLORS.WHITE};
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 2rem;
    padding: 2rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: #f1f1f1;

`;

export const CardTitle = styled.h1`
    font-size: 3.2rem;
    font-weight: 600;
    color: ${COLORS.TEXT};
    margin-bottom: 1rem;
`;

export const CardSubtitle = styled.h2`
    font-size: 2.4rem;
    font-weight: 500;
    color: ${COLORS.TEXT};
    margin-bottom: 1rem;
`;

export const CardText = styled.p`
    font-size: 1.6rem;
    font-weight: 400;
    color: ${COLORS.TEXT};
    margin-bottom: 1rem;
    line-height: 2rem;
`;

export const ImageContainer = styled.div`
    width: 100%;
    > div {
        position: unset;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    overflow: hidden;
    background-color: ${COLORS.WHITE};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 2rem;
    background-color: #f1f1f1
`;

export const Img = styled(Image)`
    border-radius: .5rem;
    object-fit: contain;
    position: relative;
    height: unset;
    width: 100%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

`;

export const IconContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 2rem;
    margin: auto 0;
`;

export const GitHub = styled(GithubLogo).attrs({
    size: 40,
    weight: "bold",
    color: COLORS.TEXT,
})``;