import { BACKGROUND, COLORS } from "@/utils/variables";
import Image from "next/image";
import styled from "styled-components";
import { GithubLogo, LinkedinLogo, Link, InstagramLogo} from 'phosphor-react';

export const Container = styled.div`
    display: flex;
    gap: 1rem;
    height: 100%;
    padding: 1rem 0;
    width: 100%;
`;

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    `;

export const AboutCard = styled.div`
    background-color: ${COLORS.WHITE};
    border-radius: 2rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    width: 100%;
`;

export const CardTitle = styled.h1`
    color: ${COLORS.TEXT};    
    font-size: 3.2rem;
    font-weight: 600;
`;

export const CardSubtitle = styled.h2`
    color: ${COLORS.TEXT};
    font-size: 2.4rem;
    font-weight: 500;
`;

export const CardText = styled.p`
    color: ${COLORS.TEXT_SECONDARY};
    font-size: 2rem;
    margin: 1rem 0;
    line-height: 2rem;
`;

export const ImageContainer = styled.div`
    align-items: center;
    background-color: ${COLORS.WHITE};
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    overflow: hidden;
    padding: 2rem;
    width: 100%;
    > div {
        position: unset;
    }
`;

export const Img = styled(Image)`
    border-radius: .5rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    height: unset;
    object-fit: contain;
    position: relative;
    width: 100%;
`;

export const IconContainer = styled.div`
    align-items: center;
    display: flex;
    gap: 2rem;
    margin: auto 0;
    width: 100%;
`;

export const GitHub = styled(GithubLogo).attrs({
    size: 32,
    weight: "bold",
    color: "#F1F1F1",
})``;

export const LinkedIn = styled(LinkedinLogo).attrs({
    size: 32,
    weight: "bold",
    color: "#F1F1F1",
})``;

export const Instagram = styled(InstagramLogo).attrs({
    size: 32,
    weight: "bold",
    color: "#F1F1F1",
})``;

export const LinkTree = styled(Link).attrs({
    size: 32,
    weight: "bold",
    color: "#F1F1F1",
})``;

