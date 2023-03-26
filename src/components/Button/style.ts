import { COLORS } from "@/utils/variables";
import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    border-radius: 1rem;
    border: none;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    width: max-content;
    &:hover {
        transform: scale(1.05);
    }
    &:active {
        transform: scale(0.95);
    }
    &:focus {
        outline: 1px solid #000;

    }
`;

export const Text = styled.span`
    font-size: 2rem;
    font-weight: 600;
    color: ${COLORS.TEXT_SECONDARY};

`;