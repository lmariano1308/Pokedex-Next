import { BACKGROUND, COLORS } from "@/utils/variables";
import styled from "styled-components";

export const Container = styled.button`
    align-items: center;
    background-color: ${BACKGROUND.PRIMARY};
    border: none;
    border-radius: 50%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 1rem;
    transition: all 0.2s ease-in-out;

    &:hover {
        scale: 1.1;
    }
    &:active {
        scale: 0.9;
    }
`;